import { useEffect, useRef } from 'react'

const FRAME = 32
const SCALE = 2

function baseCol(colorIndex) {
  return colorIndex * 4
}

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function dist2(ax, ay, bx, by) {
  const dx = ax - bx
  const dy = ay - by
  return dx * dx + dy * dy
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

/**
 * Estados exactamente según el sheet:
 * row0: derecha 0-2, sleep 3
 * row1: arriba  0-2 (espalda)
 * row2: abajo  0-2
 * row3: izquierda 0-2, sleep 3
 * row4: inclinación/olfateo 0-3
 */
const ACTIONS = {
  walkRight: { row: 0, frames: [0, 1, 2], fps: 5, move: { dx: 1, dy: 0 } },
  walkLeft: { row: 3, frames: [0, 1, 2], fps: 5, move: { dx: -1, dy: 0 } },
  walkUp: { row: 1, frames: [0, 1, 2], fps: 4, move: { dx: 0, dy: -1 } },
  walkDown: { row: 2, frames: [0, 1, 2], fps: 4, move: { dx: 0, dy: 1 } },

  sleepRight: { row: 0, frames: [3], fps: 1, move: null },
  sleepLeft: { row: 3, frames: [3], fps: 1, move: null },

  sniff: { row: 4, frames: [0, 1, 2, 3], fps: 3, move: null }
}

function pickSleepOrMove() {
  return Math.random() < 0.20 ? 'sleep' : 'move'
}

function pickMoveDir() {
  const r = Math.random()
  if (r < 0.42) return 'right'
  if (r < 0.84) return 'left'
  if (r < 0.92) return 'up'
  return 'down'
}

export default function PetCat({
  id,
  containerRef,
  spriteUrl,
  colorIndex = 0,
  initialXRatio = 0.2,
  initialYRatio = 0.6,
  registryRef,
  onRegister,
  onUnregister
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    const container = containerRef.current
    if (!el || !container) return

    let mounted = true
    const getBounds = () => container.getBoundingClientRect()

    let bounds = getBounds()

    let x = bounds.width * initialXRatio
    let y = bounds.height * initialYRatio

    const spriteW = FRAME * SCALE
    const spriteH = FRAME * SCALE

    let speed = 14 + Math.random() * 10

    let actionName = 'sleepRight'
    let action = ACTIONS[actionName]
    let frameIdx = 0
    let frameAcc = 0

    let stateTimer = 0
    let stateDuration = 8 + Math.random() * 12

    let savedActionName = actionName
    let savedStateDuration = stateDuration
    let savedStateTimer = stateTimer

    let isHovering = false

    let lastDir = 'right'

    let isSleeping = true

    const setAction = (name) => {
      actionName = name
      action = ACTIONS[actionName]
      frameIdx = 0
      frameAcc = 0
      isSleeping = actionName.startsWith('sleep')
    }

    const ensureSleepSeparation = () => {
      const reg = registryRef?.current
      if (!reg) return

      const myCx = x + spriteW / 2
      const myCy = y + spriteH / 2
      const minDist = 42
      const minDist2 = minDist * minDist

      let tooClose = false
      for (const [otherId, d] of reg.entries()) {
        if (otherId === id) continue
        if (!d?.sleeping) continue
        const ocx = d.x + spriteW / 2
        const ocy = d.y + spriteH / 2
        if (dist2(myCx, myCy, ocx, ocy) < minDist2) {
          tooClose = true
          break
        }
      }

      if (!tooClose) return

      const tries = 10
      for (let i = 0; i < tries; i++) {
        const nx = x + rand(-40, 40)
        const ny = y + rand(-28, 28)

        const minX = 4
        const minY = 4
        const maxX = Math.max(4, bounds.width - spriteW - 4)
        const maxY = Math.max(4, bounds.height - spriteH - 4)

        const cx = clamp(nx, minX, maxX)
        const cy = clamp(ny, minY, maxY)

        let ok = true
        const ccx = cx + spriteW / 2
        const ccy = cy + spriteH / 2

        for (const [otherId, d] of reg.entries()) {
          if (otherId === id) continue
          if (!d?.sleeping) continue
          const ocx = d.x + spriteW / 2
          const ocy = d.y + spriteH / 2
          if (dist2(ccx, ccy, ocx, ocy) < minDist2) {
            ok = false
            break
          }
        }

        if (ok) {
          x = cx
          y = cy
          return
        }
      }
    }

    const chooseNextState = () => {
      if (isHovering) return

      const mode = pickSleepOrMove()
      if (mode === 'sleep') {
        if (lastDir === 'left') setAction('sleepLeft')
        else setAction('sleepRight')

        ensureSleepSeparation()

        stateDuration = 10 + Math.random() * 18
        stateTimer = 0
        return
      }

      const dir = pickMoveDir()
      lastDir = dir

      if (dir === 'right') setAction('walkRight')
      else if (dir === 'left') setAction('walkLeft')
      else if (dir === 'up') setAction('walkUp')
      else setAction('walkDown')

      stateDuration = 3 + Math.random() * 7
      stateTimer = 0
    }

    const onEnter = () => {
      if (isHovering) return
      isHovering = true

      savedActionName = actionName
      savedStateDuration = stateDuration
      savedStateTimer = stateTimer

      setAction('sniff')
    }

    const onLeave = () => {
      if (!isHovering) return
      isHovering = false

      setAction(savedActionName)
      stateDuration = savedStateDuration
      stateTimer = savedStateTimer
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    setTimeout(() => {
      if (!mounted) return
      chooseNextState()
    }, 300)

    let last = performance.now()

    const tick = (t) => {
      if (!mounted) return

      const dt = Math.min(0.033, (t - last) / 1000)
      last = t

      bounds = getBounds()

      frameAcc += dt
      const spf = 1 / action.fps
      while (frameAcc >= spf) {
        frameAcc -= spf
        frameIdx = (frameIdx + 1) % action.frames.length
      }

      const frame = action.frames[frameIdx]
      const col = baseCol(colorIndex) + frame
      el.style.backgroundImage = `url(${spriteUrl})`
      el.style.backgroundPosition = `${-col * FRAME}px ${-action.row * FRAME}px`

      if (action.move && !isHovering) {
        const pauseChance =
          actionName === 'walkUp' || actionName === 'walkDown' ? 0.22 : 0.10

        if (Math.random() >= pauseChance) {
          let s = speed
          if (actionName === 'walkUp' || actionName === 'walkDown') s *= 0.9

          x += action.move.dx * s * dt
          y += action.move.dy * s * dt
        }
      }

      const minX = 4
      const minY = 4
      const maxX = Math.max(4, bounds.width - spriteW - 4)
      const maxY = Math.max(4, bounds.height - spriteH - 4)

      if (x <= minX) {
        x = minX
        if (actionName === 'walkLeft') { setAction('walkRight'); lastDir = 'right' }
      } else if (x >= maxX) {
        x = maxX
        if (actionName === 'walkRight') { setAction('walkLeft'); lastDir = 'left' }
      }

      if (y <= minY) {
        y = minY
        if (actionName === 'walkUp') { setAction('walkDown'); lastDir = 'down' }
      } else if (y >= maxY) {
        y = maxY
        if (actionName === 'walkDown') { setAction('walkUp'); lastDir = 'up' }
      }

      if (!isHovering) {
        stateTimer += dt
        if (stateTimer >= stateDuration) {
          chooseNextState()
        }
      }

      const feetY = y + spriteH
      const z = Math.round(feetY)

      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${SCALE}, ${SCALE})`
      el.style.zIndex = String(z)

      onRegister?.(id, { x, y, sleeping: isSleeping, z })

      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)

    return () => {
      mounted = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      onUnregister?.(id)
    }
  }, [
    id,
    containerRef,
    spriteUrl,
    colorIndex,
    initialXRatio,
    initialYRatio,
    registryRef,
    onRegister,
    onUnregister
  ])

  return (
    <div
      ref={elRef}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${FRAME}px`,
        height: `${FRAME}px`,
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        willChange: 'transform, background-position',
        pointerEvents: 'auto'
      }}
      aria-hidden="true"
    />
  )
}
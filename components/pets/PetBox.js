import { Box, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef, useState, useCallback } from 'react'
import PetCat from './PetCat'

function rand(min, max) {
  return Math.random() * (max - min) + min
}

export default function PetBox({
  height = 150,
  maxCats = 4,
  spawnDelayMs = 1200
}) {
  const bg = useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
  const border = useColorModeValue('blackAlpha.300', 'whiteAlpha.200')

  const boxRef = useRef(null)
  const [cats, setCats] = useState([])

  const registryRef = useRef(new Map())

  const register = useCallback((id, data) => {
    registryRef.current.set(id, data)
  }, [])

  const unregister = useCallback(id => {
    registryRef.current.delete(id)
  }, [])

  useEffect(() => {
    let cancelled = false
    let timer = null

    const spawnOne = () => {
      if (cancelled) return
      if (!boxRef.current) return

      setCats(prev => {
        if (prev.length >= maxCats) return prev

        const id = globalThis.crypto?.randomUUID
          ? globalThis.crypto.randomUUID()
          : String(Date.now() + Math.random())

        const colorIndex = Math.floor(rand(0, 4))

        return [
          ...prev,
          {
            id,
            colorIndex,
            x: rand(0.08, 0.82),
            y: rand(0.2, 0.72)
          }
        ]
      })

      timer = setTimeout(spawnOne, spawnDelayMs)
    }

    timer = setTimeout(spawnOne, 250)
    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [maxCats, spawnDelayMs])

  return (
    <Box
      ref={boxRef}
      position="relative"
      w="100%"
      maxW="420px"
      h={`${height}px`}
      mx="auto"
      bg={bg}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      mb={6}
    >
      {cats.map(c => (
        <PetCat
          key={c.id}
          id={c.id}
          containerRef={boxRef}
          spriteUrl="/images/pets/cat.png"
          colorIndex={c.colorIndex}
          initialXRatio={c.x}
          initialYRatio={c.y}
          registryRef={registryRef}
          onRegister={register}
          onUnregister={unregister}
        />
      ))}
    </Box>
  )
}

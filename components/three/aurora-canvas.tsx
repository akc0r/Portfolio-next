"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MathUtils, type Group, type Mesh, type Points as ThreePoints } from "three"
import { useTheme } from "next-themes"
import { usePointer } from "./use-pointer"
import { brandHexes } from "@/lib/palette"

/* A drifting field of stars filling a cube around the camera. */
function StarField({
  count,
  color,
  opacity,
  spread = 26,
}: {
  count: number
  color: string
  opacity: number
  spread?: number
}) {
  const ref = useRef<ThreePoints>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread
    }
    return arr
  }, [count, spread])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/* A slowly tumbling wireframe icosahedron used as ambient depth. */
function FloatingShape({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed: number
}) {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed
      ref.current.rotation.y += delta * speed * 0.7
    }
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.14} />
    </mesh>
  )
}

function Scene({ isLight }: { isLight: boolean }) {
  const group = useRef<Group>(null)
  const pointer = usePointer()

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.18, 0.04)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -pointer.current.y * 0.12, 0.04)
  })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const count = isMobile ? 1100 : 2600

  // Brand colors derived from the live CSS hues (see lib/palette.ts).
  const c = useMemo(() => brandHexes(isLight), [isLight])

  return (
    <group ref={group}>
      <StarField
        count={count}
        color={c.star}
        opacity={isLight ? 0.45 : 0.85}
      />
      <FloatingShape position={[-7, 2.5, -3]} scale={1.8} color={c.primary} speed={0.12} />
      <FloatingShape position={[7.5, -2, -2]} scale={1.3} color={c.accent} speed={0.16} />
      <FloatingShape position={[5, 3.5, -5]} scale={1} color={c.tertiary} speed={0.1} />
    </group>
  )
}

export default function AuroraCanvas() {
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === "light"

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Scene isLight={isLight} />
    </Canvas>
  )
}

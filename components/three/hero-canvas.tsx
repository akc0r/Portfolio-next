"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, Lightformer, MeshDistortMaterial } from "@react-three/drei"
import { MathUtils, type Group, type Mesh } from "three"
import { useTheme } from "next-themes"
import { usePointer } from "./use-pointer"
import { brandHexes, type BrandHexes } from "@/lib/palette"

/* The hero centerpiece: a morphing metallic crystal that reflects a
   colored light environment, producing an iridescent aurora sheen.
   A counter-rotating wireframe halo adds depth. */
function Crystal({ c }: { c: BrandHexes }) {
  const group = useRef<Group>(null)
  const halo = useRef<Mesh>(null)
  const pointer = usePointer()

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.6, 0.05)
      group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -pointer.current.y * 0.4, 0.05)
    }
    if (halo.current) {
      halo.current.rotation.z -= delta * 0.15
      halo.current.rotation.x += delta * 0.1
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.15, 18]} />
          <MeshDistortMaterial
            color={c.primaryDeep}
            envMapIntensity={1.6}
            metalness={1}
            roughness={0.08}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
        <mesh ref={halo} scale={1.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={c.accent} wireframe transparent opacity={0.18} />
        </mesh>
      </Float>
    </group>
  )
}

export default function HeroCanvas() {
  const { resolvedTheme } = useTheme()
  // Brand colors derived from the live CSS hues (see lib/palette.ts).
  const c = useMemo(() => brandHexes(resolvedTheme === "light"), [resolvedTheme])

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={30} color={c.primary} />
      <pointLight position={[-5, -3, 2]} intensity={20} color={c.accent} />

      <Crystal c={c} />

      {/* Offline-safe colored environment built from light shapes — this is
          what gives the metal surface its iridescent multi-hue reflections. */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="circle" intensity={3} position={[3, 2, 2]} scale={4} color={c.primary} />
        <Lightformer form="circle" intensity={3} position={[-4, -1, 2]} scale={4} color={c.accent} />
        <Lightformer form="ring" intensity={2} position={[0, 3, -3]} scale={5} color={c.tertiary} />
        <Lightformer form="rect" intensity={1.5} position={[0, -4, 1]} scale={[8, 3, 1]} color={c.primaryDeep} />
      </Environment>
    </Canvas>
  )
}

"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

function FloatingCube({
  position,
  color,
  speed = 1,
}: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={meshRef} args={[1, 1, 1]} position={position}>
        <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
      </Box>
    </Float>
  )
}

function GlowingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <MeshDistortMaterial color="#00eaff" transparent opacity={0.8} distort={0.4} speed={2} roughness={0} />
    </Sphere>
  )
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[0.8, 0.2, 16, 100]} position={position}>
        <meshStandardMaterial color="#00eaff" transparent opacity={0.4} wireframe />
      </Torus>
    </Float>
  )
}

function Particles({ count = 100 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00eaff" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[10, 10, 10]} intensity={1} color="#00eaff" /> */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

        <FloatingCube position={[-3, 2, -2]} color="#00eaff" speed={0.8} />
        <FloatingCube position={[3, -1, -3]} color="#ff00ff" speed={1.2} />
        <FloatingCube position={[4, 2, -4]} color="#00eaff" speed={0.6} />
        <FloatingCube position={[8, 2, -4]} color="#00eaff" speed={0.6} />


        <GlowingSphere position={[-2, -2, -1]} />
        <GlowingSphere position={[2, 1, -2]} />

        <FloatingTorus position={[0, 0, -5]} />

         {/* <FloatingTorus position={[0, 0, -5]} /> */}

        <Particles count={200} />
      </Canvas>
    </div>
  )
}

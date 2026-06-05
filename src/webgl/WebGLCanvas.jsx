import React from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleBackground from '../webgl/environment/ParticleBackground'

export default function WebGLCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.5} />
      <ParticleBackground />
    </Canvas>
  )
}

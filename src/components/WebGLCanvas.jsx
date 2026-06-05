import React from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleBackground from '../webgl/environment/ParticleBackground'

export default function WebGLCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 65 }}
      gl={{ antialias: true }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 1, pointerEvents: 'none'
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Efek Latar Belakang Partikel */}
      <ParticleBackground />
    </Canvas>
  )
}
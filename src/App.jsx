import React, { useState } from 'react'
import WebGLCanvas from './core/WebGLCanvas'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor/CustomCursor'
import HomeView from './views/HomeView'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <CustomCursor />
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <WebGLCanvas />
      {isLoaded && (
        <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
          <HomeView />
        </div>
      )}
    </>
  )
}

import React, { useState, useEffect } from 'react'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20) // Kecepatan simulasi loading

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>BIGDADE UNIVERSE</h1>
        <div style={styles.barContainer}>
          <div style={{ ...styles.bar, width: `${progress}%` }} />
        </div>
        <p style={styles.text}>{progress}% INITIALIZING SYSTEM</p>
        
        {progress === 100 && (
          <button style={styles.button} onClick={onComplete}>
            ENTER EXPERIENCE
          </button>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: '#050505', display: 'flex', justifyContent: 'center',
    alignItems: 'center', zIndex: 9999, transition: 'all 0.5s ease'
  },
  content: { textAlign: 'center', fontFamily: 'monospace' },
  title: { letterSpacing: '8px', marginBottom: '20px', fontSize: '24px', color: '#00ffff' },
  barContainer: { width: '200px', height: '2px', backgroundColor: '#222', margin: '20px auto' },
  bar: { height: '100%', backgroundColor: '#00ffff', transition: 'width 0.1s linear' },
  text: { fontSize: '12px', letterSpacing: '2px', color: '#666' },
  button: {
    marginTop: '30px', backgroundColor: 'transparent', border: '1px solid #00ffff',
    color: '#00ffff', padding: '10px 20px', cursor: 'pointer', letterSpacing: '2px',
    animation: 'pulse 1.5s infinite alternate', fontSize: '12px'
  }
}
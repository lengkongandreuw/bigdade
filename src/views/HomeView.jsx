import React from 'react'

export default function HomeView() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <div style={styles.logo}>BIGDADE</div>
        <nav style={styles.nav}>
          <span style={styles.navLink}>GAMES</span>
          <span style={styles.navLink}>ECOSYSTEM</span>
          <span style={styles.navLink}>ABOUT</span>
        </nav>
      </header>
      
      <main style={styles.main}>
        <h2 style={styles.subtitle}>NEXT-GEN GAME STUDIO</h2>
        <h1 style={styles.mainTitle}>MANGUNI SQUAD</h1>
        <p style={styles.desc}>
          Merajut teknologi imersif, aksi taktis, dan identitas kebangsaan Indonesia ke kancah global.
        </p>
        <button style={styles.cta}>LAUNCH UNIVERSE</button>
      </main>
    </div>
  )
}

const styles = {
  wrapper: { width: '100%', minHeight: '100vh', padding: '40px 80px', fontFamily: 'sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '100px' },
  logo: { fontWeight: 'bold', letterSpacing: '4px', fontSize: '20px', color: '#fff' },
  nav: { display: 'flex', gap: '30px' },
  navLink: { letterSpacing: '2px', fontSize: '12px', cursor: 'pointer', color: '#aaa', transition: '0.3s' },
  main: { maxWidth: '600px', marginTop: '10%' },
  subtitle: { color: '#00ffff', letterSpacing: '6px', fontSize: '12px', marginBottom: '10px' },
  mainTitle: { fontSize: '64px', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px', lineHeight: '1' },
  desc: { color: '#888', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', letterSpacing: '0.5px' },
  cta: { backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px 30px', fontWeight: 'bold', letterSpacing: '2px', fontSize: '11px', cursor: 'pointer' }
}
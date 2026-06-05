import React from 'react'

export default function HomeView() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <div style={styles.logo}>BIGDADE</div>
        <nav style={styles.nav}>
          <a style={styles.navLink}>GAMES</a>
          <a style={styles.navLink}>ECOSYSTEM</a>
          <a style={styles.navLink}>ABOUT</a>
        </nav>
      </header>
      
      <main style={styles.main}>
        <h2 style={styles.subtitle}>INDONESIAN GAME DEVELOPER</h2>
        <h1 style={styles.mainTitle}>MANGUNI SQUAD</h1>
        <p style={styles.desc}>
          Merajut teknologi imersif, aksi taktis, dan identitas kebangsaan ke kancah global.
        </p>
        <button style={styles.cta}>EXPLORE GAMES</button>
      </main>
    </div>
  )
}

const styles = {
  wrapper: { width: '100%', height: '100vh', padding: '40px 8vw', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  logo: { fontWeight: 'bold', letterSpacing: '4px', fontSize: '20px', color: '#fff' },
  nav: { display: 'flex', gap: '40px' },
  navLink: { letterSpacing: '2px', fontSize: '12px', cursor: 'none', color: '#aaa' },
  main: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '600px' },
  subtitle: { color: '#00ffff', letterSpacing: '4px', fontSize: '12px', marginBottom: '15px' },
  mainTitle: { fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px', lineHeight: '1', color: '#fff' },
  desc: { color: '#888', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px' },
  cta: { backgroundColor: '#fff', color: '#000', border: 'none', padding: '15px 35px', fontWeight: 'bold', letterSpacing: '2px', fontSize: '12px', cursor: 'none', alignSelf: 'flex-start' }
}

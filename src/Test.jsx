import React, { useEffect } from 'react'

export default function Test(){
  useEffect(()=>{
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cx', e.clientX + 'px')
      document.documentElement.style.setProperty('--cy', e.clientY + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div style={{minHeight:'100vh', display:'grid', placeItems:'center'}}>
      <div style={{color:'#fff', textAlign:'center'}}>
        <h1>Cursor Glow Test</h1>
        <p>Move your mouse around to see the neon aura follow.</p>
      </div>
    </div>
  )
}

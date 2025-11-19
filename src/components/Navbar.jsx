import React, { useEffect, useState } from 'react'

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="brand" onClick={() => scrollToId('top')}>
          <div className="brand__mark" />
          <span className="brand__text">NEONIX</span>
        </div>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          <button className="nav__link" onClick={() => scrollToId('products')}>Products</button>
          <button className="nav__link" onClick={() => scrollToId('testimonials')}>Testimonials</button>
          <button className="nav__link" onClick={() => scrollToId('newsletter')}>Newsletter</button>
          <a className="btn btn--ghost" href="#" onClick={(e)=>{e.preventDefault();scrollToId('products')}}>Shop Now</a>
          <button className="toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        <button className={`burger ${open ? 'is-open' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

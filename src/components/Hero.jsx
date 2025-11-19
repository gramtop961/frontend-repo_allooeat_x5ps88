import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const smoothScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="hero">
      <div className="hero__bg">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="hero__glow pointer-events-none" />
      </div>
      <div className="container hero__content">
        <h1 className="headline">Experience Commerce from the Future</h1>
        <p className="sub">Curated tech, neon aesthetics, and ultra-smooth shopping.
        </p>
        <div className="cta">
          <button className="btn btn--primary" onClick={() => smoothScroll('products')}>Shop Now</button>
          <button className="btn btn--ghost" onClick={() => smoothScroll('features')}>Explore</button>
        </div>
      </div>
    </section>
  )
}

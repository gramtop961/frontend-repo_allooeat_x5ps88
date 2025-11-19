import React, { useEffect } from 'react'

const products = [
  { id: 1, title: 'Quantum Headset', price: 199, img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Neon Keyboard', price: 149, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Holo Drone', price: 499, img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Cyber Glasses', price: 259, img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Aurora Mouse', price: 89, img: 'https://images.unsplash.com/photo-1616567211335-96e1f99a2c54?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Phantom Speaker', price: 229, img: 'https://images.unsplash.com/photo-1523409973018-3fec4f74a80f?q=80&w=1200&auto=format&fit=crop' }
]

export default function Products() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card')
    const onMove = (e) => {
      cards.forEach(card => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - (r.left + r.width/2)
        const y = e.clientY - (r.top + r.height/2)
        const max = 15
        card.style.setProperty('--rx', `${(-y / r.height) * max}deg`)
        card.style.setProperty('--ry', `${(x / r.width) * max}deg`)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section__title">Featured Products</h2>
        <div className="grid">
          {products.map(p => (
            <article key={p.id} className="card will-change-transform">
              <div className="card__img">
                <img src={p.img} alt={p.title} />
                <button className="btn btn--neon add">Add to Cart</button>
              </div>
              <div className="card__body">
                <h3 className="card__title">{p.title}</h3>
                <span className="price">${p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

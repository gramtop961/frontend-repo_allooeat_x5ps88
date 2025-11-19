import React, { useEffect, useRef, useState } from 'react'

const quotes = [
  { name: 'Ava T.', title: 'Product Designer', text: 'Sleek, fast, and futuristic. Shopping here feels like browsing a sci‑fi UI.' },
  { name: 'Liam R.', title: 'Gamer', text: 'Those neon accessories are fire. The glow details are insane.' },
  { name: 'Maya K.', title: 'Engineer', text: 'Smooth animations and premium products. A delight on every scroll.' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIndex((i)=> (i+1)%quotes.length), 3500)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Loved by Visionaries</h2>
        <div className="testi">
          {quotes.map((q, i)=> (
            <figure key={q.name} className={`testi__item ${i===index ? 'is-active' : ''}`}>
              <blockquote>“{q.text}”</blockquote>
              <figcaption>
                <span className="name">{q.name}</span>
                <span className="role">{q.title}</span>
              </figcaption>
            </figure>
          ))}
          <div className="dots">
            {quotes.map((_, i)=> (
              <button key={i} className={`dot ${i===index?'is-active':''}`} onClick={()=>setIndex(i)} aria-label={`Go to slide ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

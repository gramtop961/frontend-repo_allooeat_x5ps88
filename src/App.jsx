import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Navbar onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />
      <Hero />
      <div id="features" className="reveal">
        <Products />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default App

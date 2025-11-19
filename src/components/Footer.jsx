import React from 'react'

export default function Footer(){
  return (
    <footer id="newsletter" className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--muted">
            <div className="brand__mark" />
            <span className="brand__text">NEONIX</span>
          </div>
          <p className="muted">Futuristic gear curated for the bold.</p>
          <div className="social">
            <a href="#" aria-label="Twitter" className="social__btn">𝕏</a>
            <a href="#" aria-label="Instagram" className="social__btn">◎</a>
            <a href="#" aria-label="YouTube" className="social__btn">▶</a>
          </div>
        </div>
        <div>
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer__title">Help</h4>
          <ul className="footer__links">
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer__title">Newsletter</h4>
          <form className="newsletter" onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}}>
            <input required type="email" placeholder="you@futuremail.com"/>
            <button className="btn btn--primary">Subscribe</button>
          </form>
          <p className="tiny muted">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} NEONIX. All rights reserved.</div>
    </footer>
  )
}

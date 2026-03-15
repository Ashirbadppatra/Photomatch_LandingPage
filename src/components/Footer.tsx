import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Photomatch</div>
            <p>AI-powered photo sharing for every event. Find your photos instantly.</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
            <a href="#blog">Blog</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Built with precision. Designed for moments.</p>
        </div>
      </div>
    </footer>
  )
}

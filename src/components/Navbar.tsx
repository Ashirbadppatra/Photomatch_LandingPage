import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo-wrapper">
            <div className="logo-3d">
              <span className="logo-text">Photomatch</span>
              <div className="logo-glow"></div>
            </div>
          </div>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>
              <span>Features</span>
            </a>
            <a href="#how-it-works" className="nav-link" onClick={() => setIsOpen(false)}>
              <span>How It Works</span>
            </a>
            <a href="#pricing" className="nav-link" onClick={() => setIsOpen(false)}>
              <span>Pricing</span>
            </a>
            <a href="/client" className="btn-primary nav-btn">
              Get Started
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={isOpen ? 'active' : ''}></span>
            <span className={isOpen ? 'active' : ''}></span>
            <span className={isOpen ? 'active' : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

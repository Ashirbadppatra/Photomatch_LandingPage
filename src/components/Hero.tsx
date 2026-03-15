import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="container">
        <div className="hero-content">
          <div className="badge-3d">
            <span className="badge-shine"></span>
            <span className="badge-text">AI-Powered Face Recognition</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line" style={{ animation: 'slideInRight 0.8s ease-out 0.1s both' }}>Every Guest.</span>
            <span className="title-line" style={{ animation: 'slideInRight 0.8s ease-out 0.2s both' }}>Every Photo.</span>
            <span className="title-gradient" style={{ animation: 'slideInLeft 0.8s ease-out 0.3s both' }}>Found Instantly.</span>
          </h1>

          <p className="hero-description" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            Revolutionary AI face recognition that delivers personalized photo galleries
            to your event guests in seconds. No apps, no searching, just pure magic.
          </p>

          <div className="hero-buttons" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}>
            <a href="/client" className="btn-primary btn-large">
              <span>Start Free Trial</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary btn-large">
              <span>See How It Works</span>
            </a>
          </div>

          <div className="hero-stats" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">&lt;1s</div>
                <div className="stat-label">Match Time</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <div className="stat-number">Zero</div>
                <div className="stat-label">App Required</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

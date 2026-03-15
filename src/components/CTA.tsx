export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card" style={{ animation: 'scaleIn 0.8s ease-out' }}>
          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>

          <div className="cta-content">
            <h2 className="cta-title" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              Ready to Transform Your
              <span className="gradient-text"> Event Photography?</span>
            </h2>
            <p className="cta-description" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
              Join thousands of photographers who've already switched to instant,
              AI-powered photo delivery. Start your free trial today.
            </p>

            <div className="cta-features" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>7-Day Free Trial</span>
              </div>
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>No Credit Card Required</span>
              </div>
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>

            <div className="cta-buttons" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <a href="/client" className="btn-primary btn-large">
                <span>Start Free Trial</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="mailto:Ashirbadprasad@gmail.com" className="btn-secondary btn-large">
                <span>Contact Sales</span>
              </a>
            </div>
          </div>

          <div className="cta-visual">
            <div className="floating-card card-1" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <div className="card-icon">⚡</div>
              <div className="card-text">Instant Matching</div>
            </div>
            <div className="floating-card card-2" style={{ animation: 'float 4s ease-in-out 0.3s infinite' }}>
              <div className="card-icon">🎯</div>
              <div className="card-text">99.9% Accuracy</div>
            </div>
            <div className="floating-card card-3" style={{ animation: 'float 4s ease-in-out 0.6s infinite' }}>
              <div className="card-icon">💎</div>
              <div className="card-text">Lifetime Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

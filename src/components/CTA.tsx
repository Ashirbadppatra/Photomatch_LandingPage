export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>

          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your
              <span className="gradient-text"> Event Photography?</span>
            </h2>
            <p className="cta-description">
              Join thousands of photographers who've already switched to instant,
              AI-powered photo delivery. Start your free trial today.
            </p>

            <div className="cta-features">
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

            <div className="cta-buttons">
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
            <div className="floating-card card-1">
              <div className="card-icon">⚡</div>
              <div className="card-text">Instant Matching</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🎯</div>
              <div className="card-text">99.9% Accuracy</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💎</div>
              <div className="card-text">Lifetime Access</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">Photomatch</div>
              <p>AI-powered photo sharing for events</p>
            </div>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="mailto:Ashirbadprasad@gmail.com">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Photomatch. Crafted with ❤️</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

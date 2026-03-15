import { useState } from 'react'

const features = [
  {
    icon: '🎯',
    title: 'Instant Face Recognition',
    description: 'Guests take a selfie and instantly see all their photos. Powered by state-of-the-art AI matching in under 1 second.',
    color: '#6366f1',
    illustration: 'https://cdn.storyset.com/illustrations/mobile-security-xl.webp'
  },
  {
    icon: '💎',
    title: 'Lifetime Account',
    description: 'Pay once, own forever. No monthly subscriptions, no recurring fees. Your account and storage are lifetime.',
    color: '#8b5cf6',
    illustration: 'https://cdn.storyset.com/illustrations/savings-xl.webp'
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Selfies are processed in real-time and permanently deleted after matching. We never store guest photos.',
    color: '#ec4899',
    illustration: 'https://cdn.storyset.com/illustrations/data-protection-xl.webp'
  },
  {
    icon: '⚡',
    title: 'Zero Compression',
    description: 'Upload full-resolution images without quality loss. Your photos stay pristine, exactly as you shot them.',
    color: '#f59e0b',
    illustration: 'https://cdn.storyset.com/illustrations/photo-frames-xl.webp'
  },
  {
    icon: '🎨',
    title: 'Transparent Pricing',
    description: 'Simple coin system for archiving: 1.5 coins per GB per month. No hidden fees, no surprises.',
    color: '#10b981',
    illustration: 'https://cdn.storyset.com/illustrations/wallet-xl.webp'
  },
  {
    icon: '🎁',
    title: 'Bonus Days System',
    description: 'Archive early? Unused validity days convert to free bonus archive time automatically.',
    color: '#06b6d4',
    illustration: 'https://cdn.storyset.com/illustrations/celebration-xl.webp'
  }
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <span className="section-badge">Revolutionary Features</span>
          <h2 className="section-title">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="section-description">
            Features that no other platform offers. Built specifically for event photographers.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${hoveredIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="feature-illustration">
                <img src={feature.illustration} alt={feature.title} loading="lazy" />
                <div className="illustration-border"></div>
              </div>

              <div className="feature-glow" style={{ background: `${feature.color}20` }}></div>
              <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}>
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

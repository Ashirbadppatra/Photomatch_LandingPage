const plans = [
  {
    name: 'Trial',
    storage: '1 GB',
    price: 'Free',
    period: '7 Days',
    badge: 'Try It Free',
    features: [
      'AI Face Recognition',
      'QR Code Access',
      'Private Event Links',
      'Full Platform Access',
      'Zero Compression'
    ],
    color: '#10b981',
    popular: false
  },
  {
    name: 'Starter',
    storage: '50 GB',
    price: '₹499',
    period: 'Lifetime',
    badge: 'Best Value',
    features: [
      'Lifetime Storage',
      '180 Days Validity',
      'AI Face Recognition',
      'Smart Analytics',
      'Zero Compression',
      'Priority Support'
    ],
    color: '#6366f1',
    popular: true
  },
  {
    name: 'Pro',
    storage: '120 GB',
    price: '₹799',
    period: 'Lifetime',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Custom Branding',
      'Advanced Analytics',
      'Dedicated Support',
      'API Access',
      'White Label Options'
    ],
    color: '#8b5cf6',
    popular: true
  },
  {
    name: 'Studio',
    storage: '500 GB',
    price: '₹2,199',
    period: 'Lifetime',
    badge: 'Professional',
    features: [
      'Everything in Pro',
      'Account Manager',
      'Custom Integration',
      'Bulk Operations',
      'Team Collaboration',
      'SLA Guarantee'
    ],
    color: '#ec4899',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple Pricing</span>
          <h2 className="section-title">
            Pay Once, <span className="gradient-text">Own Forever</span>
          </h2>
          <p className="section-description">
            No monthly fees. No subscriptions. Just lifetime storage and unlimited AI matching.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{
                '--plan-color': plan.color,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              } as React.CSSProperties}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="pricing-header">
                <div className="plan-icon" style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` }}>
                  {plan.storage}
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/client" className="btn-pricing" style={{ background: plan.color }}>
                Get Started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <div className="pricing-glow" style={{ background: `${plan.color}30` }}></div>
            </div>
          ))}
        </div>

        <div className="archive-info">
          <div className="info-card" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <div className="info-icon">💰</div>
            <div className="info-content">
              <h4>Archive Pricing</h4>
              <p>Extend event life with our simple coin system: <strong>1.5 coins/GB/month</strong>. Archive only when needed!</p>
            </div>
          </div>
          <div className="info-card" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
            <div className="info-icon">🎁</div>
            <div className="info-content">
              <h4>Bonus Days</h4>
              <p>Archive early and unused validity days convert to <strong>free bonus archive time</strong> automatically!</p>
            </div>
          </div>
          <div className="info-card" style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}>
            <div className="info-icon">💸</div>
            <div className="info-content">
              <h4>Pro-Rata Refunds</h4>
              <p>Delete archived events early and get <strong>unused coins refunded</strong> instantly. Fair and transparent!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

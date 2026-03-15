import { useState, useEffect } from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload Photos',
    description: 'Drag and drop your event photos using our lightning-fast desktop uploader or web interface. Handle thousands of images effortlessly.',
    icon: '📤',
    color: '#6366f1',
    illustration: 'https://cdn.storyset.com/illustrations/uploading-xl.webp'
  },
  {
    number: '02',
    title: 'AI Detects Faces',
    description: 'Our powerful AI instantly analyzes every photo and detects all faces. Completely automated, zero manual tagging required.',
    icon: '🤖',
    color: '#8b5cf6',
    illustration: 'https://cdn.storyset.com/illustrations/ai-xl.webp'
  },
  {
    number: '03',
    title: 'Share Event Link',
    description: 'Generate a QR code or private link for your event. Guests access it instantly without downloading any app.',
    icon: '🔗',
    color: '#ec4899',
    illustration: 'https://cdn.storyset.com/illustrations/sharing-xl.webp'
  },
  {
    number: '04',
    title: 'Guests Find Photos',
    description: 'Guests take a quick selfie and instantly receive all photos they appear in. Magic delivered in under 1 second.',
    icon: '✨',
    color: '#10b981',
    illustration: 'https://cdn.storyset.com/illustrations/selfie-xl.webp'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-description">
            Four simple steps from upload to delivery. Setup in minutes, delight for a lifetime.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-item ${activeStep === index ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-connector"></div>
                <div className="step-circle" style={{ borderColor: step.color }}>
                  <span className="step-icon">{step.icon}</span>
                  <div className="step-pulse" style={{ background: step.color }}></div>
                </div>
                <div className="step-content">
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="steps-visual">
            <div className="visual-decoration visual-decoration-1"></div>
            <div className="visual-decoration visual-decoration-2"></div>
            <div className="visual-card">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`visual-content ${activeStep === index ? 'active' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)` }}
                >
                  <img src={step.illustration} alt={step.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

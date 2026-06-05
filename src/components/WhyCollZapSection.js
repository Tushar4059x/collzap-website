import { X, Check } from 'lucide-react';

export default function WhyCollZapSection() {
  const competitors = [
    {
      name: 'WhatsApp',
      color: '#25D366',
      points: ['Random groups', 'No matching', 'No seriousness filtering', 'Groups become inactive']
    },
    {
      name: 'Instagram',
      color: '#E1306C',
      points: ['Endless scrolling', 'Entertainment focused', 'Difficult to find local like-minded students']
    },
    {
      name: 'LinkedIn',
      color: '#0A66C2',
      points: ['Professional networking only', 'Not designed for campus communities', 'Limited student discovery']
    }
  ];

  const collzapFeatures = [
    'College-Specific Matching',
    'Interest-Based Circles',
    'Seriousness Assessment',
    'Private & Trusted Campus Network',
    '1-on-1, Groups, Societies & Communities',
    'Designed Exclusively for Students'
  ];

  return (
    <section className="section-container" style={{ marginTop: '80px', textAlign: 'center' }}>
      <span className="section-eyebrow">WHY COLLZAP?</span>
      <h2 className="section-title">
        Not Another Social Network.
      </h2>
      <p className="section-subtitle" style={{ margin: '0 auto 64px auto' }}>
        Most platforms help you consume content. <br/>
        <strong className="blue-text" style={{ fontSize: '1.5rem', fontWeight: '600' }}>CollZap helps you find the right people.</strong>
      </p>

      <div className="mobile-flex-col" style={{ display: 'flex', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
        {/* Competitors Side */}
        <div style={{ flex: '1', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {competitors.map((comp, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'left', borderLeft: `4px solid ${comp.color}` }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: comp.color }}>{comp.name}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {comp.points.map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', color: 'var(--text-secondary)' }}>
                    <X size={16} color="#ef4444" style={{ flexShrink: 0 }} /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Arrow Divider */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', border: '2px solid var(--primary-blue)', color: 'var(--primary-blue)', flexShrink: 0 }}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>

        {/* CollZap Side */}
        <div style={{ flex: '1', width: '100%', maxWidth: '500px' }}>
          <div className="glass-card pulse-anim" style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(30,58,138,0.4) 100%)', border: '2px solid var(--primary-blue)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>CollZap</h2>
            </div>
            
            <div className="mobile-flex-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {collzapFeatures.map((feature, idx) => (
                <div key={idx} style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={18} className="blue-text" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '64px', fontSize: '1.5rem', fontWeight: '600' }}>
        We don&apos;t help students collect followers.<br/>
        <span className="blue-text" style={{ fontSize: '2.5rem', display: 'block', marginTop: '8px' }}>We help students find their circle.</span>
      </div>
    </section>
  );
}

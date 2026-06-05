import { ShieldCheck, Target, Users, Lock } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Verify Your College', desc: 'Sign in using your college identity so every connection is relevant to your campus.' },
    { num: '02', title: 'Choose Your Growth Interests', desc: 'Select the areas where you genuinely want to grow.' },
    { num: '03', title: 'Take The Seriousness Assessment', desc: 'A short assessment helps us understand your current level and commitment.' },
    { num: '04', title: 'Choose Your Circle Type', desc: 'Decide how you want to connect (1-on-1, Small Group, Community).' },
    { num: '05', title: 'Get Matched Automatically', desc: 'Our matching system connects you with students who share similar interests.' }
  ];

  return (
    <section className="section-container" style={{ marginTop: '80px', textAlign: 'center' }}>
      <span className="section-eyebrow">HOW COLLZAP WORKS</span>
      <h2 className="section-title">
        Find The Right People. <span className="blue-text">Not Just More People.</span>
      </h2>
      <p className="section-subtitle" style={{ margin: '0 auto 64px auto' }}>
        CollZap uses identity, interests, and intent to help students build meaningful circles inside their own college.
      </p>

      {/* Steps Flow */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        gap: '24px',
        overflowX: 'auto',
        paddingBottom: '24px',
        textAlign: 'left'
      }}>
        {steps.map((step, idx) => (
          <div key={idx} className="glass-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
            <div style={{ 
              background: 'rgba(59, 130, 246, 0.2)', 
              color: 'var(--primary-blue)', 
              width: '40px', height: '40px', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', marginBottom: '16px',
              border: '1px solid var(--primary-blue)'
            }}>
              {step.num}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px' }}>{step.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="glass-card" style={{ 
        marginTop: '64px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        gap: '32px',
        textAlign: 'left'
      }}>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Right College.</h3>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Right Interests.</h3>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Right People.</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flex: '1', minWidth: '200px' }}>
          <ShieldCheck className="blue-text" size={32} />
          <div>
            <h4 style={{ fontWeight: '600' }}>Only your college</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Connections stay within your campus.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flex: '1', minWidth: '200px' }}>
          <Lock className="blue-text" size={32} />
          <div>
            <h4 style={{ fontWeight: '600' }}>100% Confidential</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Your data and conversations are private.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flex: '1', minWidth: '200px' }}>
          <Target className="blue-text" size={32} />
          <div>
            <h4 style={{ fontWeight: '600' }}>Intent-Based Matching</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Matched on interests and goals, not just randomly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

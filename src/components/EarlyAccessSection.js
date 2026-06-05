import { Send, Zap, Target, Users, Bell } from 'lucide-react';

export default function EarlyAccessSection() {
  const benefits = [
    { icon: <Zap className="blue-text" size={24} />, title: "Early Access", desc: "Get access before public launch." },
    { icon: <Target className="blue-text" size={24} />, title: "Better Matches", desc: "Early members help shape the matching experience." },
    { icon: <Users className="blue-text" size={24} />, title: "Founding Community", desc: "Become part of the first generation of CollZap students." },
    { icon: <Bell className="blue-text" size={24} />, title: "Campus Launch Updates", desc: "Receive launch announcements for your college." }
  ];

  return (
    <section className="section-container" style={{ marginTop: '80px', textAlign: 'center', paddingBottom: '120px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', padding: '8px 16px', borderRadius: '24px', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '24px', color: 'var(--primary-blue)', fontWeight: '600' }}>
        <Zap size={18} /> EARLY ACCESS
      </div>
      <h2 className="section-title">
        Be Among The First Students <br/>
        To Build <span className="blue-text">Better College Connections.</span>
      </h2>
      <p className="section-subtitle" style={{ margin: '0 auto 48px auto' }}>
        Join the waitlist today and get priority access when CollZap launches in your campus.
      </p>

      {/* Simplified Map / Dashboard Graphic representation */}
      <div className="glass-card" style={{ 
        maxWidth: '800px', 
        margin: '0 auto 64px auto', 
        padding: '40px',
        background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,58,138,0.2) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="mobile-flex-col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', zIndex: 2, position: 'relative', gap: '32px' }}>
           <div>
             <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Early Community</h3>
             <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--primary-blue)', lineHeight: '1.1' }}>12,458</div>
             <div style={{ color: 'var(--success-green)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
               2,348 this week
             </div>
           </div>

           <div style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', minWidth: '250px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--success-green)', fontWeight: '600' }}>
                 <div style={{ width: '8px', height: '8px', background: 'var(--success-green)', borderRadius: '50%', animation: 'pulse-glow 2s infinite' }}></div>
                 Live Activity
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                    <div>
                       <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Aarav</div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Joined from IIT Bombay</div>
                    </div>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>M</div>
                    <div>
                       <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Mehak</div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Joined from Christ University</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
        {benefits.map((benefit, idx) => (
          <div key={idx} className="glass-card" style={{ textAlign: 'left', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              {benefit.icon}
              <h4 style={{ fontWeight: 'bold', margin: 0 }}>{benefit.title}</h4>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{benefit.desc}</p>
          </div>
        ))}
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8TPRmonb-4GRnHrz4VjngqbHTeSjVXZwCv0zrMZ_pye0t9A/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.25rem', borderRadius: '12px', boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}>
        <Send size={24} /> Join The Waitlist
      </a>
      <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
        No spam. No unnecessary emails. Only important updates.
      </p>
    </section>
  );
}

import { Rocket, Code, Camera, BookOpen, Dumbbell, Users } from 'lucide-react';

export default function WhoIsItForSection() {
  const roles = [
    {
      icon: <Rocket size={32} color="#06b6d4" />,
      title: "Founders",
      desc: "Find co-founders and builders.",
      borderColor: "rgba(6, 182, 212, 0.4)"
    },
    {
      icon: <Code size={32} color="#3b82f6" />,
      title: "Developers",
      desc: "Meet coding partners and teammates.",
      borderColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: <Camera size={32} color="#8b5cf6" />,
      title: "Creators",
      desc: "Connect with designers and content creators.",
      borderColor: "rgba(139, 92, 246, 0.4)"
    },
    {
      icon: <BookOpen size={32} color="#10b981" />,
      title: "Learners",
      desc: "Join focused study circles.",
      borderColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      icon: <Dumbbell size={32} color="#f97316" />,
      title: "Growth Seekers",
      desc: "Build habits and grow together.",
      borderColor: "rgba(249, 115, 22, 0.4)"
    },
    {
      icon: <Users size={32} color="#ec4899" />,
      title: "Community Builders",
      desc: "Lead, organize, and create impact.",
      borderColor: "rgba(236, 72, 153, 0.4)"
    }
  ];

  return (
    <section className="section-container" style={{ marginTop: '80px', textAlign: 'center' }}>
      <span className="section-eyebrow">WHO IS COLLZAP FOR?</span>
      <h2 className="section-title">
        Built For Students <br/>
        Who Want <span className="blue-text">More From College.</span>
      </h2>
      <p className="section-subtitle" style={{ margin: '0 auto 64px auto' }}>
        Find people who share your interests, goals, and ambitions.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {roles.map((role, idx) => (
          <div key={idx} className="glass-card" style={{ 
            borderTop: `4px solid ${role.borderColor}`, 
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '180px',
            background: 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(2,6,23,0.9) 100%)'
          }}>
            <div style={{ marginBottom: '16px' }}>{role.icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>{role.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{role.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '64px', fontSize: '1.5rem', fontWeight: '500' }}>
        Your interests are different. <br/>
        <strong className="blue-text" style={{ fontSize: '2rem' }}>Your circle should be too.</strong>
      </div>
    </section>
  );
}

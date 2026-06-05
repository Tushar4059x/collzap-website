import { Rocket, Code, BookOpen, Users } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Rocket className="blue-text" size={24} />,
      title: "Looking for startup-minded students?",
      description: "Finding future co-founders and builders on campus is mostly luck."
    },
    {
      icon: <Code className="blue-text" size={24} />,
      title: "Want to build projects together?",
      description: "Most talented students never discover each other."
    },
    {
      icon: <BookOpen className="blue-text" size={24} />,
      title: "Need a study circle that actually studies?",
      description: "WhatsApp groups often become inactive and noisy."
    },
    {
      icon: <Users className="blue-text" size={24} />,
      title: "Searching for creators and like-minded people?",
      description: "Shared interests rarely turn into meaningful connections."
    }
  ];

  return (
    <section className="section-container" style={{ marginTop: '80px' }}>
      <span className="section-eyebrow">THE PROBLEM</span>
      <h2 className="section-title" style={{ maxWidth: '800px' }}>
        You&apos;re Surrounded by Thousands of Students. <br/>
        <span className="blue-text">Finding The Right Ones Is The Hard Part.</span>
      </h2>
      <p className="section-subtitle">
        College campuses are full of opportunities, but most students never find the people who truly match their interests, ambitions, and goals.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
        {problems.map((prob, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(59, 130, 246, 0.1)', 
              padding: '12px', 
              borderRadius: '12px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              {prob.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>{prob.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{prob.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '64px', 
        padding: '32px', 
        background: 'linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(15,23,42,0.8) 100%)',
        borderLeft: '4px solid var(--primary-blue)',
        borderRadius: '0 16px 16px 0',
        display: 'inline-block'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '400' }}>
          The problem isn&apos;t a lack of people. <br/>
          <strong className="blue-text" style={{ fontSize: '1.8rem' }}>The problem is discovering the right people.</strong>
        </h3>
      </div>
    </section>
  );
}

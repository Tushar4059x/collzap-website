import { ArrowRight, BookOpen, Code, Dumbbell, Rocket, Users, Camera } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="section-container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: '120px',
      position: 'relative',
      minHeight: '80vh',
      zIndex: 1
    }}>
      <div className="mobile-text-center" style={{ width: '100%', maxWidth: '600px', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }} className="mobile-flex-center">
          <Image src="/logo.avif" alt="CollZap Icon" width={24} height={24} />
          <span style={{ fontWeight: '600', fontSize: '1.25rem' }}>CollZap</span>
        </div>
        
        <h1 className="section-title">
          Find Your Circle <br/>
          <span className="blue-text">Before College</span><br/>
          Passes You By.
        </h1>
        
        <p className="section-subtitle">
          CollZap helps students discover like-minded peers for friendships, projects, startups, learning, and growth inside their campus.
        </p>
        
        <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8TPRmonb-4GRnHrz4VjngqbHTeSjVXZwCv0zrMZ_pye0t9A/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Join the Early Access Waitlist <ArrowRight size={20} />
          </a>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '40px', color: 'var(--text-secondary)' }} className="mobile-flex-center">
          <div style={{ width: '24px', height: '24px', border: '1px solid currentColor', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏛️</div>
          <span>Launching first in selected <span className="blue-text">Indian colleges.</span></span>
        </div>
      </div>
      
      {/* Decorative Image and Floating Elements */}
      <div className="desktop-only" style={{ position: 'absolute', top: '10%', right: '0', width: '50%', height: '100%', zIndex: 1 }}>
        <div style={{ position: 'relative', width: '80%', margin: '0 auto', top: '10%' }}>
          <Image 
            src="/college_students.png" 
            alt="College Students Connect" 
            width={600} 
            height={600} 
            className="dynamic-image float-anim" 
            style={{ animationDuration: '8s' }}
          />
          
          <div className="float-anim" style={{ position: 'absolute', top: '-10%', right: '-10%', background: 'var(--card-bg)', backdropFilter: 'blur(8px)', padding: '12px 20px', borderRadius: '24px', border: '1px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>
             <Rocket size={18} className="blue-text"/> <span>Startups & Entrepreneurship</span>
          </div>
          
          <div className="float-anim" style={{ position: 'absolute', bottom: '10%', left: '-20%', animationDelay: '1.5s', background: 'var(--card-bg)', backdropFilter: 'blur(8px)', padding: '12px 20px', borderRadius: '24px', border: '1px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>
             <Code size={18} className="blue-text"/> <span>Coding & Development</span>
          </div>
          
          <div className="float-anim" style={{ position: 'absolute', top: '40%', right: '-25%', animationDelay: '2.5s', background: 'var(--card-bg)', backdropFilter: 'blur(8px)', padding: '12px 20px', borderRadius: '24px', border: '1px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>
             <BookOpen size={18} className="blue-text"/> <span>Learning & Study</span>
          </div>
        </div>
      </div>

      {/* For mobile, we display the image below the text inline */}
      <div style={{ width: '100%', marginTop: '48px', display: 'none' }} className="mobile-only-display">
         <Image 
            src="/college_students.png" 
            alt="College Students Connect" 
            width={400} 
            height={400} 
            className="dynamic-image"
          />
      </div>
      
      {/* Footer bar for Hero section */}
      <div className="mobile-stack" style={{ width: '100%', marginTop: '80px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '40px', flexWrap: 'wrap', gap: '24px', zIndex: 10 }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="glass-card mobile-flex-center">
            <Users className="blue-text" size={32} />
            <div>
              <h4 style={{ fontWeight: '600' }}>Meaningful</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Connections</p>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="glass-card mobile-flex-center">
            <div style={{ position: 'relative', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--primary-blue)', borderRadius: '50%' }}>
               <div style={{ width: '10px', height: '10px', background: 'var(--primary-blue)', borderRadius: '50%' }}></div>
            </div>
            <div>
              <h4 style={{ fontWeight: '600' }}>Shared Interests</h4>
              <p style={{ color: 'var(--text-secondary)' }}>& Goals</p>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="glass-card mobile-flex-center">
            <Rocket className="blue-text" size={32} />
            <div>
              <h4 style={{ fontWeight: '600' }}>Build Projects</h4>
              <p style={{ color: 'var(--text-secondary)' }}>& Startups</p>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="glass-card mobile-flex-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
            </svg>
            <div>
              <h4 style={{ fontWeight: '600' }}>Learn, Grow</h4>
              <p style={{ color: 'var(--text-secondary)' }}>& Succeed Together</p>
            </div>
         </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .mobile-flex-center {
            justify-content: center;
            text-align: center;
          }
          .mobile-only-display {
            display: block !important;
          }
        }
      `}} />
    </section>
  );
}

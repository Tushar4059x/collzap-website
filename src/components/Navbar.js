import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(2, 6, 23, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      zIndex: 1000,
      transition: 'padding 0.3s ease'
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Image src="/logo.avif" alt="CollZap Logo" width={40} height={40} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>CollZap</span>
      </Link>
      
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8TPRmonb-4GRnHrz4VjngqbHTeSjVXZwCv0zrMZ_pye0t9A/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
        Waitlist
      </a>
    </nav>
  );
}

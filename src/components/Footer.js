export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      color: 'var(--text-secondary)',
      marginTop: '80px'
    }}>
      <p>&copy; {new Date().getFullYear()} CollZap. All rights reserved.</p>
    </footer>
  );
}

import './Button.css';

export default function Button({ children, onClick, isDark }) {
  return (
    <button
      className={isDark ? 'Button Button--dark' : 'Button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

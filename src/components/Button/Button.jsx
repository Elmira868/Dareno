import './Button.css';

export default function Button({ className = '', children }) {
  return (
    <div>
      <a href="#" className={`btn ${className}`}>
        {children}
      </a>
    </div>
  );
}
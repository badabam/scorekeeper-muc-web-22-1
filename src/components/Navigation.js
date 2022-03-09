import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Play</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

import React, { useContext } from 'react';
import './Header.css';
import Logo from '../../../assets/logo.png';
import { EmployeeContext } from './EmployeeContext';

const Header = () => {
  const { employee } = useContext(EmployeeContext);

  return (
    <header className="header">
      {/* Left Side: Logo, Employee ID, and Gender */}
      <div className="header-left">
        {/* Logo */}
        <img src={Logo} alt="Portal Logo" className="header-logo" />
        {/* Employee Info */}
        <div className="employee-info">
          <span className="employee-id">Employee ID: {employee?.id || 'N/A'}</span>
          <span className="employee-gender">Gender: {employee?.gender || 'N/A'}</span>
        </div>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="header-nav">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Apply for Leave
        </a>
        <a href="https://mom-employee-portal.vercel.app/login" className="nav-link">
          Progress
        </a>
        <a href="#" className="nav-link logout">
          Logout
        </a>
      </nav>
    </header>
  );
};
export default Header;

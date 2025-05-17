import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SAheader.css';
import Logo from '../../../assets/logo.png';
// import { EmployeeContext } from './EmployeeContext';

const Header = () => {
//   const context = useContext(EmployeeContext);
//   const employee = context ? context.employee : null;
//   const logout = context ? context.logout : null;
//   const navigate = useNavigate();

//   if (!context) {
//     console.error('EmployeeContext is not available. Ensure Header is wrapped in EmployeeProvider.');
//     return <div>Error: Context not available</div>;
//   }

  const handleLogout = () => {
    if (logout) {
      logout();
      navigate('/');
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Portal Logo" className="header-logo" />
        <div className="employee-info">
          <span className="employee-id">Admin Name: {admin?.id || 'N/A'}</span>
          <span className="employee-gender">Gender: {admin?.gender || 'N/A'}</span>
        </div>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/apply-for-leave"  className="nav-link">Leave Requets</Link>
        <a href="https://mom-employee-portal.vercel.app/login" target='blank' className="nav-link">Employee Progress</a>
        <button onClick={handleLogout} className="nav-link logout">Logout</button>
      </nav>
    </header>
  );
};

export default SAheader;
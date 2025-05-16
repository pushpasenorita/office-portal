import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import './Body.css';

const Body = () => {
  const { employee } = useContext(EmployeeContext);

  const userDetails = {
    name: employee?.name || 'N/A',
    employeeId: employee?.id || 'N/A',
    role: employee?.role || 'N/A',
    phone: employee?.phone || 'N/A',
    email: employee?.email || 'N/A',
    startingDate: employee?.startingDate || 'N/A',
    endingDate: employee?.endingDate || 'N/A',
    healthComplaints: employee?.healthComplaints || 'N/A',
    bloodGroup: employee?.bloodGroup || 'N/A'
  };

  return (
    <div className="user-profile">
      <h2 className="section-title">User Profile</h2>
      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-label">Name:</span>
          <span className="detail-value">{userDetails.name}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Employee ID:</span>
          <span className="detail-value">{userDetails.employeeId}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Role:</span>
          <span className="detail-value">{userDetails.role}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Phone:</span>
          <span className="detail-value">{userDetails.phone}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{userDetails.email}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Starting Date:</span>
          <span className="detail-value">{userDetails.startingDate}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Ending Date:</span>
          <span className="detail-value">{userDetails.endingDate}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Health Complaints:</span>
          <span className="detail-value">{userDetails.healthComplaints}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Blood Group:</span>
          <span className="detail-value">{userDetails.bloodGroup}</span>
        </div>
      </div>
    </div>
  );
};

export default Body;
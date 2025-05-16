import React, { useState } from 'react';
import './Body.css';

const Body = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    type: '',
    reason: '',
    status: 'all',
  });

  const [leaveHistory, setLeaveHistory] = useState([
    // Sample data for leave history
    {
      from: '2025-05-01',
      to: '2025-05-03',
      type: 'Sick Leave',
      reason: 'Fever',
      status: 'Approved',
      date: '2025-04-25',
    },
    {
      from: '2025-04-15',
      to: '2025-04-16',
      type: 'Casual Leave',
      reason: 'Personal',
      status: 'Rejected',
      date: '2025-04-10',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new leave request to the history (mock submission)
    const newLeave = {
      from: formData.fromDate,
      to: formData.toDate,
      type: formData.type,
      reason: formData.reason,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0], // Current date
    };
    setLeaveHistory([newLeave, ...leaveHistory]);
    // Reset form
    setFormData({
      fromDate: '',
      toDate: '',
      type: '',
      reason: '',
      status: 'all',
    });
  };

  return (
    <div className="leave-container">
      {/* Apply for Leave Form */}
      <h2 className="section-title">Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Annual Leave">Annual Leave</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason for leave"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Status Section */}
      <div className="status-section">
        <h3>Status:</h3>
        <div className="status-options">
          <label>
            <input
              type="radio"
              name="status"
              value="all"
              checked={formData.status === 'all'}
              onChange={handleChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="pending"
              checked={formData.status === 'pending'}
              onChange={handleChange}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="approved"
              checked={formData.status === 'approved'}
              onChange={handleChange}
            />
            Approved
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="rejected"
              checked={formData.status === 'rejected'}
              onChange={handleChange}
            />
            Rejected
          </label>
        </div>
      </div>

      {/* Leave History Table */}
      <h2 className="section-title">Leave History</h2>
      <div className="leave-history">
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory
              .filter((leave) =>
                formData.status === 'all' ? true : leave.status.toLowerCase() === formData.status
              )
              .map((leave, index) => (
                <tr key={index}>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.type}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>{leave.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Note */}
      <p className="pagination-note">
        If there is pagination - [Prev] [1] [2] ...
      </p>
    </div>
  );
};

export default Body;
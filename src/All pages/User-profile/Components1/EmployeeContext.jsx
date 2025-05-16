import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState({
    id: 'EMP123456',
    gender: 'Female',
    name: 'Pushpa',
    role: 'Full Stack Developer Intern',
    phone: '+91 8673636457',
    email: 'pushpa@example.com',
    startingDate: '2025-05-05',
    endingDate: '2025-11-05',
    healthComplaints: 'None',
    bloodGroup: 'A+',
  });

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
import React from 'react';
import Header from '../All pages/User-profile/Components1/Header';
import Body from 'office-portal/src/All pages/User-profile/subPages-of-UP/Body.jsx';
import { EmployeeProvider } from '../All pages/User-profile/Components1/EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <div
        style={{
          fontFamily: 'DM Sans, Arial, sans-serif',
          backgroundColor: '#f0f4f8',
          minHeight: '100vh',
        }}
      >
        <Header />
        <main style={{ padding: '20px', textAlign: 'center' }}>
          {/* <h1 style={{ color: '#1a4d4d' }}>Leave Request</h1> */}
        </main>
        <Body />
      </div>
    </EmployeeProvider>
  );
}

export default App;
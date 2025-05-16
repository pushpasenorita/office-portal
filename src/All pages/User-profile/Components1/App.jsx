import React from 'react';
import Header from './Header';
import Body from './Body';
import { EmployeeProvider } from './EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <div
        style={{
          fontFamily: 'DMSans',
          backgroundColor:'aliceblue',
          minHeight: '100vh',
        //   backgroundImage: URL("backgroundimage.png");
        }}
      >
        <Header />
        <main style={{ padding: '20px', textAlign: 'center' }}>
          {/* <h1 style={{ color: '#1a4d4d' }}>Welcome to the Office Portal</h1>
          <p style={{ color: '#333' }}>User details.</p> */}
        </main>
        <Body />
      </div>
    </EmployeeProvider>
  );
}

export default App;
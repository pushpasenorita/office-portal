// // src/App.js
// import './App.css';
// import logo from './assets/logo.png';

// import { EmployeeProvider } from './All pages/User-profile/Components1/EmployeeContext';
// import Header from './All pages/User-profile/Components1/Header';
// import Body from './All pages/User-profile/Components1/Body';
// import LeaveBody from './All pages/User-profile/subPages-of-UP/LeaveBody';

// function App() {
//   return (
//     <EmployeeProvider>
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header> */}

//         {/* User Profile Section */}
//         <div
//           style={{
//             fontFamily: 'DM Sans',
//             backgroundColor: 'aliceblue',
//             minHeight: '100vh',
//           }}
//         >
//           <Header />
//           <main style={{ padding: '20px' }}>
//             <Body />
//           </main>


//         </div>

//         {/* Apply for Leave Section */}
//         <div
//           style={{
//             fontFamily: 'DM Sans',
//             backgroundColor: '#f0f4f8',
//             minHeight: '100vh',
//           }}
//         >
//           <Header />
//           <main style={{ padding: '20px' }}>
//              <Routes>
//             <Route path="/" element={<Body />} /> {/* Home/User Profile page */}
//             <Route path="/apply-for-leave" element={<LeaveBody />} /> {/* Apply for Leave page */}
//             <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect for unmatched routes */}
//           </Routes>
//           </main>
//         </div>
//       </div>
//     </EmployeeProvider>
//   );
// }

// export default App;





import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './All pages/User-profile/Components1/Header';
import Body from './All pages/User-profile/Components1/Body';
import LeaveBody from './All pages/User-profile/subPages-of-UP/LeaveBody';
import { EmployeeProvider } from './All pages/User-profile/Components1/EmployeeContext';
// import BackgroundImage from './assets/backgroundimage.png';

function App() {
  return (
    <EmployeeProvider>
      <div
        style={{
          fontFamily: "'DM Sans', Arial, sans-serif",
          minHeight: '100vh',
          // backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header /> {/* Header is a layout component, visible on all pages */}
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <Routes>
            <Route path="/" element={<Body />} /> {/* Home/User Profile page */}
            <Route path="/apply-for-leave" element={<LeaveBody />} /> {/* Apply for Leave page */}
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect for unmatched routes */}
          </Routes>
        </main>
      </div>
    </EmployeeProvider>
  );
}

export default App;
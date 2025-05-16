import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>


      {/* body user profile */}
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

      {/*  body apply for leave */}
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
    </div>
    
  );
}

export default App;

 
import logo from './logo.svg';
import './App.css';
import TopBar from './appbar/topbar';
import amcmain from './themes'
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={amcmain}>
      <div className="App">
        <TopBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </ThemeProvider>
    
  );
}

export default App;

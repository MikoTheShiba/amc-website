import logo from './logo.svg';
import './App.css';
import TopBar from './appbar/topbar';
import amcmain from './themes'
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { RouteData } from './RouteData';

function App() {
  return (
    <ThemeProvider theme={amcmain}>
      <div>
      <Router>
        <TopBar/>
        <Routes>
          {RouteData.map((sdata)=>(<Route path={sdata.path} exact element={sdata.page}/>))}
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
    
  );
}

export default App;

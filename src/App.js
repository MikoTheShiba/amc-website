import './App.css';
import TopBar from './appbar/topbar';
import amcmain from './themes'
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { RouteData } from './RouteData';
import { Toolbar } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={amcmain}>
      <Toolbar sx={{height:'5rem'}}/>
      <TopBar/>
      <div>
      <Router>
        <Routes>
          {RouteData.map((sdata)=>(<Route path={sdata.path} exact element={sdata.page}/>))}
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
    
  );
}

export default App;

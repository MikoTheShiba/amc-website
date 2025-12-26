import Home from './pages/home';
import Services from './pages/services';
import Doctors from './pages/doctors';
import Guide from './pages/guide';
import Careers from './pages/careers';
import Packages from './pages/packages';
import HMO from './pages/hmos';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export const RouteData = [
    {
        title: 'Home',
        path: '/',
        page: <Home/>
    },
    {
        title: 'Services',
        path: '/services',
        page: <Services/>
    },
    {
        title: 'Doctors',
        path: '/doctors',
        page: <Doctors/>
    },
    {
        title: 'Patient Guide',
        path: 'guide',
        page: <Guide/>
    },
    {
        title: 'About',
        path: 'Careers',
        page: <Careers/>
    },
    {
        title: 'Packages',
        path: '/packages',
        page: <Packages/>
    },
    {
        title: 'HMOs',
        path: '/hmos',
        page: <HMO/>
    },
]

//const pages = ['Home', 'Services', 'Doctors', 'Patient Guide', 'About', 'Careers', 'Packages', 'HMOs'];
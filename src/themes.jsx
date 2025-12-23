import { createTheme, ThemeProvider } from '@mui/material/styles';

const amcmain = createTheme({
    palette: {  
        primary: { main: '#0a8754'}, 
        secondary: { main: '#6fe058ff'},
        background: { default: '#f5f5f5', paper: '#ffffff'}, 
        text: { primary: '#333333',secondary: '#666666', }, },
})

export default amcmain;
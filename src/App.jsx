import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import ReactHookFormScreen from './ReactHookFormScreen';
import RTKScreen from './RTKScreen';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1, width: "100vw", height: "100vh", minWidth: "1000vh", minHeight: "100%"}}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
          <Box sx={{flexGrow: 1}}>
        
            <Item>xs=8</Item>
            <Item>
            <div>
              <Link to="/">root</Link>
              <br/>
              <Link to="/rtk">reacttoolkit</Link>
              <br/>
              <Link to="/reacthookform">reacthookform</Link>
            </div>
            </Item>
            </Box>
          </Grid>
          <Grid item xs={10}>
            hello

              <Routes>
                <Route path="/" element={<>hello</>} exact/>
                <Route path="/rtk" element={<RTKScreen/>} exact/>
                <Route path="/reacthookform" element={<ReactHookFormScreen/>} exact/>
              </Routes>

          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  )
}


export default App

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
import BudgetAddItemScreen from './BudgetAddItem';
import CreateProjectBudgetScreen from './CreateBudgetScreen';
import ViewProjectBudgetScreen from './ViewProjectBudgetScreen';

import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "./RTKMessageSlice";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [count, setCount] = useState(0);

  const projects = useSelector((state) => state.color.projects); //reading the state 

  return (
    <BrowserRouter>
      <Box sx={{ m: 0, width: "100vw", height: "100vh", minHeight: "100%"}}>
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
              <br/>
              Project list
              <br/>
              {JSON.stringify(projects)}
              <br/>
              { 
                projects.map(project => {

                  return <Link to={"/viewprojectbudgetscreen/" + project.projectId}>view project 1{project.projectId}</Link>

                })
              }
              <br/>
              Create a project budget
              <br/>
              <Link to="/budgetadditem">budgetadditem</Link>
              <br/>
              <Link to="/createprojectbudgetscreen">createprojectbudget</Link>
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
                <Route path="/budgetadditem" element={<BudgetAddItemScreen/>} exact/>
                <Route path="/createprojectbudgetscreen" element={<CreateProjectBudgetScreen/>} />
                <Route path="/viewprojectbudgetscreen/:projectId" element={<ViewProjectBudgetScreen/>} />
              </Routes>

          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  )
}


export default App

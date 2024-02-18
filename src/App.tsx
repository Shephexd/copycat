import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CopyCat
          </Typography>
        </Toolbar>
      </AppBar>      
      <Container maxWidth="lg" sx={{ paddingTop: "2vh"}}>
        <TextField fullWidth label="Imagine something" id="fullWidth" onKeyDown={(ev: any) => {
          if (ev.key === 'Enter') {
            setPrompt(ev.target.value);
            ev.target.value="";
            ev.preventDefault();
          }
        }}/>
        
        <Box sx={{ bgcolor: 'grey', height: "84vh" }}>
          <div>{prompt}</div>
        </Box>
      </Container>
    </div>
  );
}

export default App;

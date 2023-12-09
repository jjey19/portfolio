import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './App.css';
// App.jsx

const Header = () => {
  return (
    <Paper elevation={3} className="header">
      <Typography variant="h4">Whaley Photography</Typography>
      <Typography variant="subtitle1">Profesional Duplicator</Typography>
    </Paper>
  );
};

const AboutMe = () => {
  return (
    <Paper elevation={3} className="section" >
      <Typography variant="h5">About Me</Typography>
        <img src="whaley.png"  alt="" className="profile" />
      <Typography variant="body1" className="about">
        Hello! I'm a
      </Typography>
    </Paper>
  );
};

const Projects = () => {
  return (
    <Paper elevation={3} className="section">
      <Typography variant="h5">Projects</Typography>
      <div className="project">
        <Typography variant="body2">
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
          <img className="photo" src="samplei.png" alt="" />
        </Typography>
      </div>
      {/* Add more projects as needed */}
    </Paper>
  );
};

const Contact = () => {
  return (
    <Paper elevation={3} className="section">
      <Typography variant="h5">Contact</Typography>
      <a href=""><img src="" alt="" className="linkimg" /><Typography variant="h5">email@email.com</Typography></a>
      <a href=""><img src="" alt="" className="linkimg" /><Typography variant="h5">Instagram</Typography></a>
      <a href=""><img src="" alt="" className="linkimg" /><Typography variant="h5">Facebok</Typography></a>
    </Paper>
  );
};

const Footer = () => {
  return (
    <Paper elevation={3} className="footer">
      <Typography variant="body2">&copy; 2023 jjey</Typography>
    </Paper>
  );
};

const App = () => {
  return (
    <Container maxWidth="md" className="app container">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;

import { Box, Toolbar } from '@mui/material';
import './App.css';
import CustomAppBar from './Components/AppBar';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App() {
  return (
    <div>
        <CustomAppBar />
        <Box component="main">
          <Toolbar />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </Box>
    </div>
  );
}

export default App;

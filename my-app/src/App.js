
import './App.css';
import Profile from './PortFolio/Home/Profile';
import Contactme from './PortFolio/Contactme/Contactme';
import AboutMe from './PortFolio/AboutMe/AboutMe';
import Project from './PortFolio/Project/Project';
import Resume from './PortFolio/Resume/Resume';

import {BrowserRouter , Routes , Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Profile/>}/>
    <Route path = "/about" element = {<AboutMe/>}/>
    <Route path = "/contact" element = {<Contactme/>}/>
    <Route path = "/project" element = {<Project/>}/>
    <Route path = "/Resume" element = {<Resume/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;

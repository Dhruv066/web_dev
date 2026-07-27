import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/skill/Skill";
import Project from "./components/projects/Project";
import Resume from "./components/Resume/Resume";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Resume/>
      <Contact/>
    </>
  );
};

export default App;

import './App.css'
import Home from "./sections/home/Home";
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';
import Footer from "./sections/footer/Footer";
import Chatbot from "./sections/chatbot/Chatbot";



function App() {
  return <>
    <Chatbot/>
    <Home/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </>
}

export default App;
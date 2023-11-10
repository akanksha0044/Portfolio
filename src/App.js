
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Projects from './components/Project/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

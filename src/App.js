
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Projects from './components/Project/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <div className='App'>
     <Intro/>
     <Skill/>
     <Projects/>
     <Contact/>
     </div>
     
     <Footer/>
    </>
  );
}

export default App;

import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Resume from './Component/Resume/Resume';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App">
     <Home></Home>
     <About></About>
     <Resume></Resume>
     <Skills></Skills>
     <Contact></Contact>
     <Footer />
    </div>
  );
}

export default App;

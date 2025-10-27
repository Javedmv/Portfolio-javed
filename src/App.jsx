import './App.css'
// import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

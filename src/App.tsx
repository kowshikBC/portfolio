import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

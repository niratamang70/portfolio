import './App.css';
import Home from './Views/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Views/AboutPage';
import Contact from './Views/Contact';
import Projects from './Views/Projects';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

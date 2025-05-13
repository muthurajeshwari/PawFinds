import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/home.jsx';
import About from './Components/About/about.jsx';
import Contact from './Components/Contact/contact.jsx';
import Pets from './Components/Pets/pets.jsx';
import Footer from './Components/Footer/footer.jsx';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /> <Footer/></>} />
        <Route path="/about" element={<><About /> <Footer/></>} />
        <Route path="/contact" element={<><Contact /> <Footer/></>} />
        <Route path="/pets" element={<><Pets /> <Footer/></>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

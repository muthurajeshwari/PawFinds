import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar.jsx';
import Home from './Components/Home/home.jsx';
import About from './Components/About/about.jsx';
import Contact from './Components/Contact/contact.jsx';
import Pets from './Components/Pets/pets.jsx';
import Footer from './Components/Footer/footer.jsx';
import Login from './Components/Login/login.jsx';
import Adoption from './Components/Adoption/adoption.jsx';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pets" element={<Pets />} />
         <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
              <Route path="/adoption" element={<Adoption />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
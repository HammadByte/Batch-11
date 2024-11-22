import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar.jsx/Navbar';
import Body from './Component/Body/Body';
import Ourportfolio from './Component/Ourportfolio/Ourportfolio';
import Pricing from './Component/Pricing/Pricing';
import Aboutus from './Component/Aboutus/Aboutus';
import Reviews from './Component/Reviews/Reviews';
import Contactus from './Component/Contactus/Contactus';








function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Body />} />
        <Route path="/Ourportfolio" element={<Ourportfolio />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contactus" element={<Contactus />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;

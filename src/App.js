import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './compo/Footer';
import Hero from './compo/Hero';
import Navbar from './compo/Navbar';
import { Service } from './compo/Service';
import { Error } from './compo/Error';
import { Contact } from './compo/Contact';
import { Why } from './compo/Why';
import { ContactUs } from './compo/ContactUs';
import { ServiceHero } from './compo/ServiceHero';
import { ComingSoon } from './compo/ComingSoon';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route index element={<Hero />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Why' element={<Why />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ContactUS' element={<ContactUs />} />
        <Route path='/Support' element={<ServiceHero />} />
        <Route path='/Course' element={<ComingSoon />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

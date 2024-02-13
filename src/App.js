
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './compo/About';
import Footer from './compo/Footer';
import Hero from './compo/Hero';
import Navbar from './compo/Navbar';
import { Service } from './compo/Service';
import { SideImg } from './compo/SideImg';
import { Space } from './compo/Space';
import { Error } from './compo/Error';
import { Contact } from './compo/Contact';
import { Why } from './compo/Why';
import { ContactUs } from './compo/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/home' element={<Hero />}></Route>
        <Route path='/Service' element={<Service />}></Route>
        <Route path='/Why' element={<Why />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/ContactUS' element={<ContactUs />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

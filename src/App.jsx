import { useState } from 'react';

import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header, { HeaderPhone } from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Experience />
      <Work/>
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;

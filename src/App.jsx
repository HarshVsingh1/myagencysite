import { useState, useEffect } from 'react';
import Hero from './component/Hero';
import Services from './component/Services';
import { NavbarDemo } from './component/Navbar';
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <NavbarDemo/>
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full z-20"
      >
        {darkMode ? <CiLight className='h-6 w-6' /> : <MdOutlineDarkMode className='h-5 w-5' />}
      </button>
      <Hero />
      <Services/>
    </div>
    </>
  );
}

export default App;

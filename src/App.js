import React, { useState } from 'react';
import Tracker from './components/Tracker';
import lightLogo from './svg/light.svg';
import darkLogo from './svg/dark.svg';


function App() {
  const DarkModeclsinit = true;
  const [isDark, setDarkModecls] = useState(DarkModeclsinit);


  const handleDarkMode = () => {
    setDarkModecls((prev) => !prev)
  }


  const cls = " w-full  p-10 sm:px-14 md:p-20";
  return (
    <div className={isDark ? "dark" : ""}>
      
      <div className="dark:bg-darkMode bg-white ">
        <button onClick={handleDarkMode} className="cursor-pointer focus:outline-none">
          <img src={isDark ? lightLogo : darkLogo} alt="light mode and dark mode icon" />
        </button> 
        <div className={cls}  >
          <Tracker handleDarkMode={handleDarkMode} />
        </div>
      </div>

    
    </div>
  );
}

export default App;

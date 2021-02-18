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


  const cls = " w-full clear-both px-8 py-12 sm:px-14 md:p-20 ";
  return (
    <div className={isDark ? "dark font-Roboto" : "font-Roboto"}>
      <div className="dark:bg-darkMode bg-white ">
       <header className="flex items-center justify-between w-full  float-right clear-both px-8 pt-8">
        <h1 className="text-gray-700 dark:text-gray-100 md:w-full w-auto font-semibold text-xl sm:text-3xl text-center antialiased " >
         <a href="http://localhost:3000/">
         COV-19<i class="fal fa-virus text-red-500 text-"></i>Tracker
         </a>
        </h1>
        <button onClick={handleDarkMode} className="cursor-pointer focus:outline-none">
          <img src={isDark ? lightLogo : darkLogo} className="w-7"  alt="light mode and dark mode icon" />
        </button> 
       </header>
        <div className={cls}  >
          <Tracker handleDarkMode={handleDarkMode} />
        </div>
      </div>

    
    </div>
  );
}

export default App;

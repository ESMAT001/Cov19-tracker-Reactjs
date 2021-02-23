import React, { useState } from 'react';
import Tracker from './components/Tracker';
import lightLogo from './svg/light.svg';
import darkLogo from './svg/dark.svg';

const DarkModeclsinit = true;

function App() {

  const [isDark, setDarkModecls] = useState(DarkModeclsinit);


  const handleDarkMode = () => {
    setDarkModecls((prev) => {
      return (!prev);
    })

  }


  const cls = " w-full clear-both px-8 pt-12 pb-4 sm:px-14 md:px-20 md:pt-20 ";

  document.getElementsByTagName("html")[0].className = !isDark ? "" : 'bg-darkMode';

  return (
    <div className={isDark ? "dark font-Roboto" : "font-Roboto"}>
      <div className="dark:bg-darkMode bg-white ">
        <header className="flex items-center justify-between w-full  float-right clear-both px-8 pt-8">
          <h1 className="text-gray-700 dark:text-gray-100 md:w-full w-auto font-semibold text-xl sm:text-3xl text-center antialiased " >
            <a href="http://localhost:3000/">
              COV-19<i className="fal fa-virus text-red-500 text-"></i>Tracker
         </a>
          </h1>
          <button onClick={handleDarkMode} className="cursor-pointer focus:outline-none">
            <img src={isDark ? lightLogo : darkLogo} className="w-7" alt="light mode and dark mode icon" />
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

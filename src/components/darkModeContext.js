import React from 'react';


const DarkModeContext = React.createContext();


const DarkModeProvider=DarkModeContext.Provider;
const DarkModeConsumer=DarkModeContext.Consumer


export {DarkModeConsumer,DarkModeProvider}
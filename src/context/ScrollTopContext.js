import React from 'react';

export const ScrollTopContext = React.createContext({});

export const ScrollTopProvider = ({ children }) => {

  const scrollToTop = () => {
    
  window.scrollTo(0, 0);
  }

    

    return (
        <ScrollTopContext.Provider value={{scrollToTop}}>
            {children}
        </ScrollTopContext.Provider>
    )
}

export default ScrollTopProvider;
import React, {useState} from 'react';

export const DarkContext = React.createContext({});

export const DarkProvider = ({ defaultValue = false, children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleDark = () => {
        setIsDark(!isDark);
        console.log(isDark);

        const body = document.querySelector('body');
        if (isDark) {
            body.classList.add('body-white');
        } else {
            body.classList.remove('body-white');
        }
    }

    // useEffect(() => {
    //     const body = document.querySelector('body');
    //     if (!isDark) {
    //         body.classList.add('body-white');
    //     } else {
    //         body.classList.remove('body-white');
    //     }
    // }, [isDark]);

    

    return (
        <DarkContext.Provider value={{toggleDark, isDark}}>
            {children}
        </DarkContext.Provider>
    )
}
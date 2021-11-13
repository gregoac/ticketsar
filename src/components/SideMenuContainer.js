import { useState } from "react";
import SideMenu from "./SideMenu"
import MenuIcon from "./MenuIcon";
import { DarkContext } from "../context/DarkContext";
import { useContext } from "react";

const SideMenuContainer = () => {

    const {isDark, toggleDark} = useContext(DarkContext);

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MenuIcon toggleMenu={toggleMenu} isDark={isDark} />
            <SideMenu toggleMenu={toggleMenu} toggleDark={toggleDark} isDark={isDark} isOpen={isOpen} />
        </>
    )

}

export default SideMenuContainer;
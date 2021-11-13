import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ScrollTopContext } from "../context/ScrollTopContext";

const MenuIcon = ({toggleMenu, isDark}) => {

  const {scrollToTop} = useContext(ScrollTopContext);

  return (
    <div className={`bar ${!isDark ? 'bar-white' : ''}`}>
      <Link  onClick={() => scrollToTop()} to="/">
      <h1>TICKETSAR</h1></Link>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} />
      </div>
    </div>
  );    
}

export default MenuIcon;
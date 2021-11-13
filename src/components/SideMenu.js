import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIcons} from '@fortawesome/free-solid-svg-icons';
// import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import logoBlanco from '../assets/logo.png';
import logoNegro from '../assets/logo-negro.png';
import { ScrollTopContext } from '../context/ScrollTopContext';
import { useContext } from 'react';

const SideMenu = ({toggleMenu, isOpen, isDark, toggleDark}) => {

    const {scrollToTop} = useContext(ScrollTopContext);

    const clickEvent = () => {
        toggleMenu();
        scrollToTop();
    }


    return (


        <div className={`side-menu ${isOpen ? 'open' : ''} ${!isDark ? 'white' : ''}`} id="side-menu">
            <div className="close-menu-container">
                <FontAwesomeIcon icon={faTimes} onClick={() => toggleMenu()} className="close-menu"/>
            </div>
            <div className="menu-title-container">
                <h3>
                    <img src={isDark ? logoBlanco : logoNegro} alt="logo" className="logo-menu"/>
                </h3>
            </div>
            <nav>
                <Link  onClick={() => clickEvent()} to="/eventos"><FontAwesomeIcon icon={faCalendarDay}/>Eventos</Link>
            </nav>
            <div className="dark-mode-toggle" onClick={toggleDark}>
                <div>{isDark ? <p><FontAwesomeIcon icon={faSun}/>Light mode</p> : <p><FontAwesomeIcon icon={faMoon}/>Dark mode</p>}</div>
            </div>
        </div>
    )
}

export default SideMenu;
import { DarkContext } from "../context/DarkContext";
import NewsLetter from "./NewsLetter";
import { useContext } from "react";

const Footer = () => {

    const {isDark} = useContext(DarkContext)


    return(
        <>
        <footer className={`footer ${!isDark ? 'footer-white' : ''}`}>
            <NewsLetter />
        </footer>
        <hr/>
        <div className={`promo ${!isDark ? 'promo-white' : ''}`}>
            <p>Powered and developed by <strong>NotNull&copy;</strong></p>
        </div>
        </>
    )
}

export default Footer;
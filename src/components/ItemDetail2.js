import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import flyer2 from "../assets/flyer2.jpeg";
import { DarkContext } from "../context/DarkContext";
import { useContext } from "react";

const ItemDetail2 = () => {

    const { isDark } = useContext(DarkContext);
    
  return (

    <div className={`detail-container width-90 ${!isDark ? 'detail-container-white' : ''}`}>
            <div className="lineup-container">
            <h5>BKN BEATS & SENTIDOS PRODS PRESENTAN: </h5>
                <p className="first">RIGGZ&nbsp;&#8722;&nbsp;</p>
                <p className="second">GREES&nbsp;&#8722;&nbsp;</p>
                <p className="third">FER FURLAN B2B FACU GONZALEZ&nbsp;&#8722;&nbsp;</p>
                <p className="fourth">SANTI DE JESUS B2B SANTI MOSTTO</p>
            </div>
            <div className="fecha-container">
                <p className="fecha">Domingo 21 de Noviembre 2021 - 21:00hs</p>
            </div>
            <div className="location-container">
                <p className="location"><FontAwesomeIcon icon={faMapPin}/> BKN CLUB - GUALEGUAYCHÚ - ARGENTINA</p>
            </div>
            <div className="detail-image">
                <img src={flyer2} alt="flyer"/>
            </div>
            <div className="rrpp-container">
                <h4 className="detail-description">PUNTOS DE VENTA</h4>
                <div className="rrpp-grid">
                <div className="rrpp">
                    <p className="rrpp-name">Sofía Huck</p>
                    <p className="rrpp-phone">+54 9 3445 41-7416</p>
                    <a href="https://www.instagram.com/sofi_huck/" rel="noreferrer" target="_blank" className="rrpp-social">@sofi_huck</a>
                    <p className="rrpp-location">Basavilbaso</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Andrés Jesús Moreno</p>
                    <p className="rrpp-phone">+54 9 3446 37-2519</p>
                    <a href="https://www.instagram.com/andres_cardi/" rel="noreferrer" target="_blank"  className="rrpp-social">@andres_cardi</a>
                    <p className="rrpp-location">Urdinarrain</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Pizza & Love</p>
                    <p className="rrpp-phone">+54 9 3442 40-6112</p>
                    <a href="https://www.instagram.com/pizzalove_by_maxi_bonus/" rel="noreferrer" target="_blank"  className="rrpp-social">@pizzalove_by_maxi_bonus</a>
                    <p className="rrpp-location">Concepción del Uruguay</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Facundo Asin</p>
                    <p className="rrpp-phone">+54 9 3442 49-8443</p>
                    <a href="https://www.instagram.com/facu_asin/" rel="noreferrer" target="_blank"  className="rrpp-social">@facu_asin</a>
                    <p className="rrpp-location">Concepción del Uruguay</p>
                </div>
                
                <div className="rrpp">
                    <p className="rrpp-name">Florencia Bouvet</p>
                    <p className="rrpp-phone">+54 9 3447 64-3398</p>
                    <a href="https://www.instagram.com/negritaflo_/" rel="noreferrer" target="_blank"  className="rrpp-social">@negritaflo_</a>
                    <p className="rrpp-location">Concepción del Uruguay</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Suarez federico</p>
                    <p className="rrpp-phone">+54 9 3445 62-3705</p>
                    <a href="https://www.instagram.com/suarezfederico54/" rel="noreferrer" target="_blank"  className="rrpp-social">@suarezfederico54</a>
                    <p className="rrpp-location">Rosario del Tala</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Leandro Carruccio</p>
                    <p className="rrpp-phone">+54 9 3446 56-3064</p>
                    <a href="https://www.instagram.com/leancarruccio/" rel="noreferrer" target="_blank"  className="rrpp-social">@leancarruccio</a>
                    <p className="rrpp-location">Urdinarrain</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Schmer Emmanuel</p>
                    <p className="rrpp-phone">+54 9 3446 54-8380</p>
                    <a href="https://www.instagram.com/emmaschmer/" rel="noreferrer" target="_blank"  className="rrpp-social">@emmaschmer</a>
                    <p className="rrpp-location">Urdinarrain</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Magali Rodríguez</p>
                    <p className="rrpp-phone">+54 9 3445 45-8460</p>
                    <a href="https://www.instagram.com/magarodriguez/" rel="noreferrer" target="_blank"  className="rrpp-social">@magarodriguez</a>
                    <p className="rrpp-location">Rosario, Santa Fe</p>
                </div>
                <div className="rrpp">
                    <p className="rrpp-name">Matias Ramirez</p>
                    <p className="rrpp-phone">+54 9 3445 53-3620</p>
                    <a href="https://www.instagram.com/matiasramirez.1/" rel="noreferrer" target="_blank"  className="rrpp-social">@matiasramirez.1</a>
                    <p className="rrpp-location">Basavilbaso</p>
                </div>
                </div>
            </div>
        </div>
    
  )

  }

  export default ItemDetail2;
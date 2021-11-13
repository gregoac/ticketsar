// import { useState } from "react";
import flyer from '../assets/flyer.jpeg'
import flyer2 from '../assets/flyer2.jpeg'
import { Link } from 'react-router-dom'
import { DarkContext } from '../context/DarkContext'
import { useContext } from 'react'
import { ScrollTopContext } from '../context/ScrollTopContext'

const EventItem = () => {

    const { isDark } = useContext(DarkContext)

    const {scrollToTop} = useContext(ScrollTopContext)

    return (
        <>
        <Link onClick={() => scrollToTop()} to={`item/1`}>
        <div className={`card ${!isDark ? 'card-white' : ''}`}>
            <div className="card-image">
                <img src={flyer} alt="flyer" />
            </div>
            <div className="card-content">
                <div className={`card-content-new ${!isDark ? 'card-content-white' : ''}`}>
                    <h5>BKN BEATS & SENTIDOS PRODS PRESENTAN:</h5>
                    <p className="card-title">NICOLAS MING B2B<br/>TOMAS BRIGNOLO</p>
                    <p className="card-date">Sabado 21 Noviembre 2021 - 21:00hs</p>
                </div>
                <div className="card-action">
                    <p>Más Información</p>
                </div>
            </div>
        </div>
        </Link>

        <Link onClick={() => scrollToTop()} to={`item/2`}>
            <div className={`card ${!isDark ? 'card-white' : ''}`}>
                <div className="card-image">
                    <img src={flyer2} alt="flyer2" />
                </div>
                <div className="card-content">
                <div className={`card-content-new ${!isDark ? 'card-content-white' : ''}`}>
                    <h5>BKN BEATS & SENTIDOS PRODS PRESENTAN:</h5>
                    <p className="card-title">RIGZZ&nbsp;&#8722;&nbsp;GREES<br/><span style={{"opacity": "0"}}>s</span></p>
                    <p className="card-date">Domingo 21 Noviembre 2021 - 20:00hs</p>
                </div>
                <div className="card-action">
                    <p>Más Información</p>
                </div>
            </div>
            </div>
        </Link>
        </>
    )

}

export default EventItem;
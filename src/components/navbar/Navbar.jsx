// Import React
import React, { useState } from 'react'
// Import Icons
import MenuIcon from '/public/menuIcon.png'
import OptionsIcon from '/public/optionsIcon.png'
import ScoreboardIcon from '/public/scoreboardIcon.png'


// Import CSS
import './Navbar.scss'

export default function Navbar() {
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ showScoreboard, setShowScoreboard ] = useState(false)
    const [ showOptions, setShowOptions ] = useState(false)

    const menu = [
        {
            title: "May I",
            navigation: ""
        },
        {
            title: "Remi",
            navigation: ""
        },
        {
            title: "Yahtzee",
            navigation: ""
        },
    ]

    function handleMenu () {
        setMenuOpen(prev => !prev)
        if ( menuOpen === false ) {
            if ( showScoreboard === true ) setShowScoreboard(false)
            if ( showOptions === true ) setShowOptions(false)
        }
    }

    function handleScoreboard () {
        setShowScoreboard(prev => !prev)
        if ( showScoreboard === false ) {
            if ( menuOpen === true ) setMenuOpen(false)
            if ( showOptions === true ) setShowOptions(false)
        }
    }

    function handleOptions () {
        setShowOptions(prev => !prev)
        if ( showOptions === false ) {
            if ( menuOpen === true ) setMenuOpen(false)
            if ( showScoreboard === true ) setShowScoreboard(false)
        }
    }

    console.log(`${showScoreboard}, ${showOptions}, ${menuOpen}`)


    return (
        <div className='navbar-container'>
            <div className='navbar-title'>Scoreboards</div>
            <div className='navbar-subcontainer'>
                <div 
                    className='navbar-icon-container'
                    onClick={handleScoreboard}
                >
                    <img 
                        src={ScoreboardIcon}
                        alt="Scoreboard" 
                        className='Icon'
                        loading="lazy" 
                    /> 
                </div>
                <div 
                    className='navbar-icon-container'
                    onClick={handleOptions}
                >
                    <img 
                        src={OptionsIcon}
                        alt="Options" 
                        className='Icon'
                        loading="lazy" 
                    /> 
                </div>
                <div 
                    className='navbar-icon-container'
                    onClick={handleMenu}
                >
                    <img 
                        src={MenuIcon}
                        alt="Menu" 
                        className='Icon'
                        loading="lazy" 
                    /> 
                </div>
                
            </div>
        </div>
    )
}

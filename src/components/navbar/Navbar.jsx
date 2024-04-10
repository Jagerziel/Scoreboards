// Import React
import React, { useState } from 'react'
// Import Icons
import MenuIcon from '/public/menuIcon.png'
import OptionsIcon from '/public/optionsIcon.png'
import ScoreboardIcon from '/public/scoreboardIcon.png'
// Import Components
import NavbarScoreboard from './NavbarScoreboard.jsx'
import NavbarOptions from './NavbarOptions.jsx'
import NavbarMenu from './NavbarMenu.jsx'
// Import CSS
import './Navbar.scss'

export default function Navbar( { playerCount, setPlayerCount } ) {
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ showScoreboard, setShowScoreboard ] = useState(false)
    const [ showOptions, setShowOptions ] = useState(false)

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

    return (
        <div className='navbar-container-main'>
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
                <div
                    className='navbar-navbaroptions-container'
                    style={{
                        display: showOptions ? 'block' : 'none'
                    }}
                >
                    <NavbarOptions playerCount={ playerCount } setPlayerCount={ setPlayerCount } />
                </div>
                <div 
                    className='navbar-navbarmenu-container'
                    style={{
                        display: menuOpen ? 'block' : 'none'
                    }}
                >
                    <NavbarMenu setMenuOpen={setMenuOpen}/>
                </div>
            </div>
            <div
                className='navbar-navbarscoreboard-container'
                style={{
                    display: showScoreboard ? 'block' : 'none'
                }}
            >
                <NavbarScoreboard />
            </div>
        </div>
    )
}

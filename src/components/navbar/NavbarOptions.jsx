// Import React
import React from 'react'

// Import SCSS
import './Navbar.scss'

export default function NavbarOptions( {setPlayerCount} ) {

    function handlePlayerOpt ( value ) {
        setPlayerCount(prev => prev + value)
    }

    const options = [
        "Add Player",
        "Remove Player"
    ]

    return (
        <div
            className='navbaroptions-container'
        >
            <div className='navbaroptions-subcontainer'>

            NavbarOptions
            </div>
        
        </div>
    )
}

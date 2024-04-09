// Import React
import React, { useState } from 'react'
// Import Components
import Navbar from '../components/navbar/Navbar.jsx'

// Import SCSS
import './MayI.scss'

export default function MayI() {
    // Navbar UseStates
    const [ playerCount, setPlayerCount ] = useState(2)



    console.log(playerCount)

    return (
        <>
            <Navbar setPlayerCount={ setPlayerCount } />
            <div className='MayI-container'>
                <div className='MayI-title'>
                    MayI
                </div>

            </div>
        </>
    )
}

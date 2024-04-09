// Import React
import React from 'react'

// Import SCSS
import './Navbar.scss'

export default function NavbarOptions( { playerCount, setPlayerCount } ) {

    function handlePlayerOpt ( value ) {
        let newVal = playerCount + value
        
        if ( newVal >= 2 && newVal <= 10) {
            setPlayerCount(newVal)
        }

    }

    const options = [
        {
            title: "Add Player",
            value: 1
        },
        {
            title: "Remove Player",
            value: -1
        },
    ]

    return (
        <div
            className='navbaroptions-container'
        >
            <div 
                className='navbaroptions-subcontainer'

            >
                {
                    options.map((item, index) => (
                        <div 
                            key={index}
                            className='navbaroptions-btn-container'
                            style={{
                                marginRight: index === options.length - 1 ? 0 : '5px'
                            }}
                            onClick={() => handlePlayerOpt(item.value)}
                        >
                            <div>
                                {item.title}
                            </div>
                        </div>
                    ))
                }
            </div>
        
        </div>
    )
}

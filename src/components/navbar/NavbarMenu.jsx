// Import React
import React from "react";
import { useNavigate } from 'react-router'

export default function NavbarMenu( { setMenuOpen } ) {
    const navigate = useNavigate()
    const menu = [
        {
        title: "May I",
        navigation: "/MayI",
        },
        {
        title: "Remi",
        navigation: "/Remi",
        },
        {
        title: "Yahtzee",
        navigation: "/Yahtzee",
        },
    ];

    function handleNavigate ( path ) {
        navigate(path)
        setMenuOpen(false)
    }

    return (
        <div className="navbarmenu-container">
            <div className="navbarmenu-title">Select a Game</div>
            <div className="navbarmenu-item-container">
                {menu.map((item, index) => {
                    return (
                        <div 
                            className="navbarmenu-item" 
                            key={index}
                            onClick={() => handleNavigate(item.navigation)}
                        >{item.title}</div>
                    )
                })}
            </div>
        </div>
    );
}

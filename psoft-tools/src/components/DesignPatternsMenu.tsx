
import { Link } from "react-router-dom";
import "./MenuStyles.css"

export default function DesignPatternsMenu() {

    return (
        <div className="menuContainer">
            <div className="menuItem">
                <Link to="/WhatPatterns/WhatPatterns">
                    What are design patterns?
                </Link>
            </div>
            <div className="menuItem">
                <Link to="/Creational/CreationalPatterns">
                    Creational design patterns
                </Link>
            </div>
            <div className="menuItem">
                <Link to="/Behavioral/BehavioralPatterns">
                    Behavioral design patterns
                </Link>
            </div >
            <div className="menuItem">
                <Link to="/Structural/StructuralPatterns">
                    Structural design patterns
                </Link>
            </div>

        </div>
    )
}
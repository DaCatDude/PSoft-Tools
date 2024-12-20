import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isImageHighlighted, setIsImageHighlighted] = useState(false);

    const handleMouseDown = () => {
        setIsImageHighlighted(true);
    };

    const handleMouseUp = () => {
        setIsImageHighlighted(false);
        window.location.href =
            "https://www.cs.rpi.edu/academics/courses/summer24/csci2600/";
    };

    return (
        <>
            <div
                className="navbar"
                style={{ width: "100%", margin: "auto" }}
            >
                <div className="logo_" >

                    <img

                        src="../Logo.png"
                        style={{
                            border: isImageHighlighted ? "1px solid white" : "none",
                            width: 46,
                            height: 46,

                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={() => setIsImageHighlighted(false)}
                    />
                </div>
                <div className="options">
                    <Link to="/index" className="link">
                        Dafny Verifier
                    </Link>
                    <Link to="/HoareTriple">
                        Hoare Triples
                    </Link>
                    <Link to="/ForwardReasoning">
                        Forward Reasoning
                    </Link>
                    <Link to="/BackwardReasoning">
                        Backward Reasoning
                    </Link>
                    <Link to="/DesignPatterns">
                        Design Patterns
                    </Link>
                    <Link to="/CFGCanvas">
                        CFG
                    </Link>

                </div>

            </div >
        </>
    );
}

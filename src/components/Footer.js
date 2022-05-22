import React from "react";

const date = new Date();


function Footer(){
    return(
        <div>
            <footer>
                <p>copyright © {date.getFullYear()} </p>
            </footer>
        </div>
    )
}

export default Footer;
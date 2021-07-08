import React from "react";
import Ball from "../../assets/Ball.svg";

const Header = () => {
    return(
    <div>
        <p id="dummy-heading">Dummy.</p>
        <h2 id="greeting">Hello,</h2>
        <h1 id="person-text">Person! <img id="ball" src={Ball} alt="Ball"></img></h1>
    </div>
    );
};

export default Header;

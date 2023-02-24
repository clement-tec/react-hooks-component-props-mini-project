import React from "react";

function Header(props) {

    return (
        <header>
            <h1 id = "name">{props.name}</h1>
        </header>
    )
}
export default Header
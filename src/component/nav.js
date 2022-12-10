import React from "react";
// import "./nav.css";

function nav(props){
    return(
        <div className="nav-container">
            <h1 style={{fontSize:"60px"}}>My {props.name}</h1>
            <p style={{color:'black'}}>I'm Nav and I'm a Programmer.!!!</p>
        </div>
    )
};

export default nav;
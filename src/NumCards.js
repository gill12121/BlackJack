import React from "react";
import "./styles.css"
import {cards} from "./Game";

var ReactDOM = require('react-dom');


export function NumCards(){
    return(
        <nav className={"nav-nc"}>

            <p className={"num2"} id={"n2"}>(32)</p>
            <p className={"num3"} id={"n3"}>(32)</p>
            <p className={"num4"} id={"n4"}>(32)</p>
            <p className={"num5"} id={"n5"}>(32)</p>
            <p className={"num6"} id={"n6"}>(32)</p>
            <p className={"num7"} id={"n7"}>(32)</p>
            <p className={"num8"} id={"n8"}>(32)</p>
            <p className={"num9"} id={"n9"}>(32)</p>
            <p className={"num10"} id={"n10"}>(128)</p>
            <p className={"numA"} id={"nA"}>(32)</p>
        </nav>

    )
}
export function SetNum(){
    document.getElementById('n2').innerHTML = "(" + cards[2] +")"
    document.getElementById('n3').innerHTML = "(" + cards[3] +")"
    document.getElementById('n4').innerHTML = "(" + cards[4] +")"
    document.getElementById('n5').innerHTML = "(" + cards[5] +")"
    document.getElementById('n6').innerHTML = "(" + cards[6] +")"
    document.getElementById('n7').innerHTML = "(" + cards[7] +")"
    document.getElementById('n8').innerHTML = "(" + cards[8] +")"
    document.getElementById('n9').innerHTML = "(" + cards[9] +")"
    document.getElementById('n10').innerHTML = "(" + cards[10] +")"
    document.getElementById('nA').innerHTML = "(" + cards["a"] +")"
}
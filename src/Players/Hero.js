import React from "react"
import "../styles.css"
import {turn, Turn2} from "../index"
import {Dealer} from "./Dealer";
import {Other} from "./Other";

var ReactDOM = require('react-dom');


export function Hero(){
    return(
        <button className={"hero"} type="button" onClick={Turn2} >My turn</button>
    )
}


import React from "react"
import "../styles.css"
import {turn, Turn1} from "../index"
var ReactDOM = require('react-dom');


export function Dealer(){
    return(
        <button className={"dealer"} type="button" onClick={Turn1}>Dealer</button>
    )
}


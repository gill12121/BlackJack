import React from "react"
import "../styles.css"
import {turn, Turn0} from "../index"
var ReactDOM = require('react-dom');


export function Other(){
    return(
        <button className={"other"} type="button" onClick={Turn0}>Other</button>
    )
}


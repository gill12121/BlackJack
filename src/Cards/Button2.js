import Card2 from "../images/2.jpg"
import React from "react"
import "../styles.css"
import {AddMH, cards, ChangeD, Oldp, Olds, SubHMC, SetA, cal, AddHMC, ace, myHand} from "../Game";
import {DH, MyH, turn} from "../index";
import Card3 from "../images/3.jpg";
import Card4 from "../images/4.jpg";
import Card5 from "../images/5.jpg";
import Card6 from "../images/6.jpg";
import Card7 from "../images/7.jpg";
import Card8 from "../images/8.jpg";
import Card9 from "../images/9.jpg";
import Card10 from "../images/10.jpg";
import CardA from "../images/a.jpg";
import {SetNum} from "../NumCards";
var ReactDOM = require('react-dom');
var saveO = []




export default function Button2() {
        return (
            <nav className={"nav-button"}>
                <button className={"B2"} onClick={() => {OSub(2)}}><img src={Card2} width={60} alt={"2"}/></button>
                <button className={"B3"} onClick={() => {OSub(3)}}><img src={Card3} width={60} alt={"3"}/></button>
                <button className={"B4"} onClick={() => {OSub(4)}}><img src={Card4} width={62} alt={"4"}/></button>
                <button className={"B5"} onClick={() => {OSub(5)}}><img src={Card5} width={60} alt={"5"}/></button>
                <button className={"B6"} onClick={() => {OSub(6)}}><img src={Card6} width={60} alt={"6"}/></button>
                <button className={"B7"} onClick={() => {OSub(7)}}><img src={Card7} width={62} alt={"7"}/></button>
                <button className={"B8"} onClick={() => {OSub(8)}}><img src={Card8} width={62} alt={"8"}/></button>
                <button className={"B9"} onClick={() => {OSub(9)}}><img src={Card9} width={55} alt={"9"}/></button>
                <button className={"B10"} onClick={() => {OSub(10)}}><img src={Card10} width={58} alt={"10"}/></button>
                <button className={"BA"} onClick={() => {OSub("a")}}><img src={CardA} width={60} alt={"A"}/></button>
            </nav>
        )

}

export function OSub(x){
    if (x < 7){
        Oldp()
    }else if(x == 10 ||x == "a" ){
        Olds()
    }
    if (turn === 0) {
        if (x== "a"){
            saveO.push(11)
        }else {
            saveO.push(x);
        }
        cards[x]--
        SubHMC();
        console.log(cards)
    }else if (turn == 1){
       /* if(x == "a"){
            Insurance()
        }*/
        ChangeD(x)
        cards[x]--
        SubHMC();
        DH()
        console.log(cards)

    }else if (turn ==2){
        AddMH(x);
        cards[x]--
        SubHMC();
        MyH()
        console.log(cards)

    }
    SetNum()
}
export function BackSpace(){
    var save = 0

     if (turn ==2 && ace != 2 && cal(myHand) > 0){
        save = myHand.pop()
        if (save == 11) {
            cards["a"]++
            SetA(0);
        }else if (save == 1){
            cards["a"]++

        } else {
            cards[save]++
        }
        AddHMC()
        MyH()
        SetNum()


    }else if (turn == 2 && ace == 2 ){
        save = myHand.pop()
        if (cal(myHand) + 10 <= 21 && myHand[0] == -10){
            myHand.shift();
            SetA(1)
        }
          if (save == 1){
             cards["a"]++

         } else {
             cards[save]++
         }
         AddHMC()
         MyH()
         SetNum()
    }else if (turn == 0 && cal(saveO) > 0){
        save = saveO.pop()

        if (save == 11){
            cards["a"]++
        }else {
            cards[save]++
        }
        AddHMC()
        SetNum()

    }

}
document.addEventListener('keydown', function(event) {
        if (event.key == 2){
            OSub(2)
        }else if (event.key == 3){
            OSub(3)
        }else if (event.key == 4){
            OSub(4)
        }else if (event.key == 4){
            OSub(4)
        }else if (event.key == 5){
            OSub(5)
        }else if (event.key == 6){
            OSub(6)
        }else if (event.key == 7){
            OSub(7)
        }else if (event.key == 8){
            OSub(8)
        }else if (event.key == 9){
            OSub(9)
        }else if (event.key == 0){
            OSub(10)
        }else if (event.key == 1){
            OSub("a")
        }
    })


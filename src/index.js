import Button2, {BackSpace} from "./Cards/Button2"
import {Other} from "./Players/Other";
import {Hero} from "./Players/Hero";
import {Dealer} from "./Players/Dealer";
import {CalcD, CalcH} from "./Players/Calcu";
import React from "react"
import "./styles.css"
import {ace, aceD, cal, cards, Clear, dealerHand, howManyCards, myHand, OldCC, resoultB,} from "./Game";
import {Calcu} from "./Players/Calcu";
import {NextHand} from "./Players/NextHand";
import {NumCards, SetNum} from "./NumCards";
import {
    SetWin,
    resoultWin,
    SetStand,
    resoultLose,
    resoultPush,
    SetSplit,
    resoultSplit,
    SetSplitBust,
    fCards, ResetRSB, SetWinBust
} from "./Win";
import {SetWin2, resoultWin2, SetSplit2} from "./Win2";
var ReactDOM = require('react-dom');
export var turn = 0;
/*<Other/>
<Hero/>
<Dealer/>
<Calcu/>
<NextHand/>
 */
function CreateButtons(){
    return(
        <div >
            <header>
                <h1>BlackJack counting cards</h1>
                <p>Cards left: </p>
                <Button2/>
                <NumCards/>

            </header>

            <main className={"main-OHD"}>

                <p id={"turn"} className={"turn"}>Other's turn</p>
                <nav className={"tt"}>
                    <p>My hand: </p><p id={"myh"} >0</p>
                </nav>
                <nav className={"tt2"}>
                    <p>Dealer's hand: </p><p id={"dh"} >0</p>
                </nav>
                <nav className={"wtd"}>
                    <p className={"wtd2"}>What to do: </p>

                    <p id={"hit"} className={"hit"}>Hit</p>
                    <p id={"stand"} className={"stand"}>Stand</p>
                    <p id={"double"} className={"double"}>Double</p>
                    <p id={"split"} className={"split"}>Split</p>

                </nav>
            </main>
            <footer className={"foot-t"}>

                <table className={"table"}>
                    <thead>
                        <tr>
                            <th className={"mp"}>My percentages</th>
                        </tr>
                    </thead>
                    <tbody className={"tb"}>
                    <tr>
                        <th>number</th>
                        <th>percentage</th>
                    </tr>
                    <tr className={"numbers1"}>
                        <td>Bust:</td><td id={"pbust"}>0</td>
                    </tr>
                    <tr className={"numbers2"}>
                        <td>21:</td><td id={"p21"}>0</td>
                    </tr>
                    <tr className={"numbers3"}>
                        <td>20:</td><td id={"p20"}>0</td>
                    </tr>
                    <tr className={"numbers4"}>
                        <td>19:</td><td id={"p19"}>0</td>
                    </tr>
                    <tr className={"numbers5"}>
                        <td>18:</td><td id={"p18"}>0</td>
                    </tr>
                    <tr className={"numbers6"}>
                        <td>17:</td><td id={"p17"}>0</td>
                    </tr>
                    </tbody>
                </table>





                <table className={"table2"}>
                    <thead>
                        <tr>
                            <th className={"dp"}>Dealer's percentages</th>
                        </tr>
                    </thead>
                    <tbody className={"tb2"}>
                    <tr>
                        <th>number</th>
                        <th>percentage</th>
                    </tr>
                    <tr className={"numbers1d"}>
                        <td>Bust:</td><td id={"pbustd"}>0</td>
                    </tr>
                    <tr className={"numbers2d"}>
                        <td>21:</td><td id={"p21d"}>0</td>
                    </tr>
                    <tr className={"numbers3d"}>
                        <td>20:</td><td id={"p20d"}>0</td>
                    </tr>
                    <tr className={"numbers4d"}>
                        <td>19:</td><td id={"p19d"}>0</td>
                    </tr>
                    <tr className={"numbers5d"}>
                        <td>18:</td><td id={"p18d"}>0</td>
                    </tr>
                    <tr className={"numbers6d"}>
                        <td>17:</td><td id={"p17d"}>0</td>
                    </tr>
                    </tbody>
                </table>


            </footer>

        </div>
    )
}
export function Turn0(){
    turn =0;
    document.getElementById('turn').innerHTML = "Other's turn"
}
export function Turn1(){
    turn =1;
    document.getElementById('turn').innerHTML = "Dealer's turn"
}
export function Turn2(){
    turn =2;
    document.getElementById('turn').innerHTML = "My turn"
}
export function MyH(){

    document.getElementById('myh').innerHTML = cal(myHand)
}
export function DH(){

    document.getElementById('dh').innerHTML = cal(dealerHand)
}
export function Clear2(){
    Clear()
    document.getElementById('dh').innerHTML = cal(dealerHand)
    document.getElementById('myh').innerHTML = cal(myHand)
    turn =0;
    document.getElementById('turn').innerHTML = "Other's turn"
    document.getElementById('pbust').innerHTML = "0"
    document.getElementById('p21').innerHTML = "0"
    document.getElementById('p20').innerHTML = "0"
    document.getElementById('p19').innerHTML = "0"
    document.getElementById('p18').innerHTML = "0"
    document.getElementById('p17').innerHTML = "0"
    document.getElementById('pbustd').innerHTML = "0"
    document.getElementById('p21d').innerHTML = "0"
    document.getElementById('p20d').innerHTML = "0"
    document.getElementById('p19d').innerHTML = "0"
    document.getElementById('p18d').innerHTML = "0"
    document.getElementById('p17d').innerHTML = "0"
    document.getElementById('stand').style.opacity = "0.6"
    document.getElementById('hit').style.opacity = "0.6"
    document.getElementById('double').style.opacity = "0.6"

    alert(OldCC)
}
export function Calc(){
    HitOrStand()
    SetWin2(myHand, ace, dealerHand, aceD)
    console.log("setwin2: "+ resoultWin2)
    CalcH()
    CalcD()

}

function HitOrStand(){
    var splitW
    var splitBW
    var standRW
    var hitRW
    var hitBW

    if (myHand[0] == myHand[1] && myHand.length == 2 && myHand[0] != 11){

        SetSplit(myHand, ace, dealerHand, aceD)
        splitW = parseInt(resoultWin * 100)


    }else if (myHand[0] == "11" && myHand[1] == "1" && myHand.length == 2){
        SetSplit(myHand, ace, dealerHand, aceD)
        splitW = parseInt(resoultWin * 100)
        splitBW = 0
    }else{
        splitW = 0
        splitBW = 0
    }

    if (cal(myHand) > 0 && cal(dealerHand) > 0) {
        SetStand(myHand, ace, dealerHand, aceD, cards)
        standRW = parseInt(resoultWin * 100 )
        SetWin(myHand, ace, dealerHand, aceD, cards)
        hitRW = parseInt(resoultWin * 100 )

        if (splitW>standRW && splitW>hitRW ||splitW==standRW && splitW>hitRW){
            document.getElementById('stand').style.opacity = "0.6"
            document.getElementById('hit').style.opacity = "0.6"
            document.getElementById('double').style.opacity = "0.6"
            document.getElementById('split').style.opacity = "1"
        }else if (standRW>hitRW){
            document.getElementById('stand').style.opacity = "1"
            document.getElementById('hit').style.opacity = "0.6"
            document.getElementById('double').style.opacity = "0.6"
            document.getElementById('split').style.opacity = "0.6"

        }else if (standRW<hitRW || standRW==hitRW) {
            if (hitRW > 50) {
                document.getElementById('stand').style.opacity = "0.6"
                document.getElementById('hit').style.opacity = "0.6"
                document.getElementById('double').style.opacity = "1"
                document.getElementById('split').style.opacity = "0.6"
            } else {

                document.getElementById('stand').style.opacity = "0.6"
                document.getElementById('hit').style.opacity = "1"
                document.getElementById('double').style.opacity = "0.6"
                document.getElementById('split').style.opacity = "0.6"
            }

        }
        if (standRW>hitRW && hitRW > 50 && standRW < 60){
            document.getElementById('stand').style.opacity = "1"
            document.getElementById('hit').style.opacity = "0.6"
            document.getElementById('double').style.opacity = "1"
            document.getElementById('split').style.opacity = "0.6"
        }

    }
    console.log("Stand win: " + standRW)
    console.log("Hit win: " + hitRW)
    console.log("Split win: " + splitW)
}



document.addEventListener('keydown', function(event) {
    if(event.key === "z"){
        Turn0()
    }else if(event.key === "x"){
        Turn2()
    }else if(event.key === "c"){
        Turn1()
    }
    if (event.key === 'Enter') {
        Calc()
    }
    if(event.key === "Backspace"){
        BackSpace()
    }
    if(event.key === "w"){
        Clear2()
    }
})


ReactDOM.render(<CreateButtons /> ,document.getElementById('root'))
import React from "react"
import "../styles.css"
import {Calc} from "../index"
import {
    ace,
    aceD,
    cal,
    dealerHand, isAce,
    myHand,
    resoult17,
    resoult18,
    resoult19,
    resoult20,
    resoult21,
    resoultB,
    setBust
} from "../Game";
var ReactDOM = require('react-dom');


export function Calcu(){
    return(
        <button className={"cal"} type="button" onClick={Calc}>calculate</button>
    )
}
export function CalcD(){
    if (dealerHand ==0){

    }else {
        setBust(dealerHand, aceD)
        var BB = resoultB
        var B21 = resoult21
        var B20 = resoult20
        var B19 = resoult19
        var B18 = resoult18
        var B17 = resoult17
        if (cal(dealerHand) == 10) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 21.24).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 11.18).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 34.06).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 11.18).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 11.16).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 11.18).toFixed(2) + ")"
        } else if (cal(dealerHand) == 11) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 16.69).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 7.75).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 18.93).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 18.89).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 18.92).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 18.83).toFixed(2) + ")"
        } else if (cal(dealerHand) == 9) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 22.90).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 6.09).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 12.03).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 35.16).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 11.80).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 12.02).toFixed(2) + ")"
        } else if (cal(dealerHand) == 8) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 24.40).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 6.95).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 6.93).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 12.87).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 35.98).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 12.88).toFixed(2) + ")"
        } else if (cal(dealerHand) == 7) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 26.20).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 7.39).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 7.87).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 7.85).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 13.79).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 36.90).toFixed(2) + ")"
        } else if (cal(dealerHand) == 6) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 42.29).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 9.72).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 10.16).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 10.64).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 10.62).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 16.56).toFixed(2) + ")"
        } else if (cal(dealerHand) == 5) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 41.79).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 10.80).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 11.21).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 11.76).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 12.24).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 12.19).toFixed(2) + ")"
        } else if (cal(dealerHand) == 4) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 39.55).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 11.17).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 11.65).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 12.13).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 12.45).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 13.05).toFixed(2) + ")"
        } else if (cal(dealerHand) == 3) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 37.41).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 11.49).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 12.07).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 12.53).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 13.05).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 13.45).toFixed(2) + ")"
        } else if (cal(dealerHand) == 2) {
            document.getElementById('pbustd').innerHTML = BB + "%  " + "(" + (BB - 35.35).toFixed(2) + ")"
            document.getElementById('p21d').innerHTML = B21 + "%  " + "(" + (B21 - 11.83).toFixed(2) + ")"
            document.getElementById('p20d').innerHTML = B20 + "%  " + "(" + (B20 - 12.40).toFixed(2) + ")"
            document.getElementById('p19d').innerHTML = B19 + "%  " + "(" + (B19 - 12.99).toFixed(2) + ")"
            document.getElementById('p18d').innerHTML = B18 + "%  " + "(" + (B18 - 13.45).toFixed(2) + ")"
            document.getElementById('p17d').innerHTML = B17 + "%  " + "(" + (B17 - 13.97).toFixed(2) + ")"
        }
    }
}
export function CalcH(){
    if (myHand == 0 || cal(myHand) == 1|| cal(myHand) == 2|| cal(myHand) == 3 || cal(myHand) == 21){
        document.getElementById('pbust').innerHTML = 0
        document.getElementById('p21').innerHTML = 0
        document.getElementById('p20').innerHTML = 0
        document.getElementById('p19').innerHTML = 0
        document.getElementById('p18').innerHTML = 0
        document.getElementById('p17').innerHTML = 0
    }else {
        setBust(myHand, ace)
        var BB = resoultB
        var B21 = resoult21
        var B20 = resoult20
        var B19 = resoult19
        var B18 = resoult18
        var B17 = resoult17
        if (cal(myHand) == 4) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 39.46).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 11.17).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.67).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 12.18).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 12.55).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 12.98).toFixed(2) + ")"
        }else if (cal(myHand) == 5) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 41.86).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 10.87).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.38).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 11.76).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 12.08).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 12.05).toFixed(2) + ")"
        }else if (cal(myHand) == 6) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 42.52).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 9.77).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 10.05).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 10.64).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 10.47).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 16.54).toFixed(2) + ")"
        }else if (cal(myHand) == 7) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 26.35).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.35).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 7.80).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 7.81).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 13.76).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 36.93).toFixed(2) + ")"
        }else if (cal(myHand) == 8) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 24.51).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 6.88).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 6.92).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 12.84).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 36.01).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 12.84).toFixed(2) + ")"
        }else if (cal(myHand) == 9) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 22.83).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 6.06).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.99).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 35.16).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 11.99).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 11.97).toFixed(2) + ")"
        }else if (cal(myHand) == 10) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.14).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 11.16).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 34.30).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 11.13).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 11.12).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 11.12).toFixed(2) + ")"
        }else if (cal(myHand) == 11) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.30).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 34.33).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.16).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 11.14).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 11.16).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 10.92).toFixed(2) + ")"
        }else if (cal(myHand) == 12) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 48.58).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 10.37).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 10.36).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 10.15).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 10.37).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 10.17).toFixed(2) + ")"
        }
        // with an ace
        else if (cal(myHand) == 13 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 27.26).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 14.57).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 14.59).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 14.56).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 14.54).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 14.48).toFixed(2) + ")"
        }else if (cal(myHand) == 14 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 30.12).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 14.07).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 14.05).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 14.04).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 14.01).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 13.71).toFixed(2) + ")"
        }else if (cal(myHand) == 15 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 32.88).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 13.51).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 13.49).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 13.18).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 13.50).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 13.44).toFixed(2) + ")"
        }else if (cal(myHand) == 16 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 35.71).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 12.69).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 12.97).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 12.99).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 12.97).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 12.67).toFixed(2) + ")"
        }else if (cal(myHand) == 17 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.26).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 11.15).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.17).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 11.15).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 10.93).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 34.34).toFixed(2) + ")"
        }else if (cal(myHand) == 18 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.21).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 11.17).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 11.15).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 10.93).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 34.36).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 11.17).toFixed(2) + ")"
        }else if (cal(myHand) == 19 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.35).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 11.18).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 10.95).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 34.38).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 11.21).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 10.93).toFixed(2) + ")"
        }else if (cal(myHand) == 20 && ace == 1) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 21.32).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 10.95).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 34.38).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 10.97).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 11.19).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 11.18).toFixed(2) + ")"
        }
        // without an ace
        else if (cal(myHand) == 13) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 52.25).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 9.63).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 9.41).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 9.41).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 9.66).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 9.65).toFixed(2) + ")"
        }else if (cal(myHand) == 14) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 55.42).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 8.95).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 8.73).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 8.97).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 8.95).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 8.97).toFixed(2) + ")"
        }else if (cal(myHand) == 15) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 58.64).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 8.31).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 8.09).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 8.33).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 8.33).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 8.31).toFixed(2) + ")"
        }else if (cal(myHand) == 16) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 61.35).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.73).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 7.73).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 7.73).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 7.73).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 7.73).toFixed(2) + ")"
        }else if (cal(myHand) == 17) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 69.08).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.73).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 7.73).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 7.73).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 7.73).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 0).toFixed(2) + ")"
        }else if (cal(myHand) == 18) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 76.81).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.73).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 7.73).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 7.73).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 0).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 0).toFixed(2) + ")"
        }else if (cal(myHand) == 19) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 84.54).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.73).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 7.73).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 0).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 0).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 0).toFixed(2) + ")"
        }else if (cal(myHand) == 20) {
            document.getElementById('pbust').innerHTML = BB + "%  " + "(" + (BB - 92.27).toFixed(2) + ")"
            document.getElementById('p21').innerHTML = B21 + "%  " + "(" + (B21 - 7.73).toFixed(2) + ")"
            document.getElementById('p20').innerHTML = B20 + "%  " + "(" + (B20 - 0).toFixed(2) + ")"
            document.getElementById('p19').innerHTML = B19 + "%  " + "(" + (B19 - 0).toFixed(2) + ")"
            document.getElementById('p18').innerHTML = B18 + "%  " + "(" + (B18 - 0).toFixed(2) + ")"
            document.getElementById('p17').innerHTML = B17 + "%  " + "(" + (B17 - 0).toFixed(2) + ")"
        }
    }
}
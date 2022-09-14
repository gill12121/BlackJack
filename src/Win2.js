import React from "react";
import {
    AddHMC,
    cal,
    cards, dealerHand,
    howManyCards, SubHMC,
} from "./Game";
import {resoultWin, SetStand, SetWin} from "./Win";



var res
var FakeMyHand = []
var FakeDealerHand = []
var fCards
var fHMC;
var skip
var fAceH
var fAceD
var press
var order
var cc
export var resoultWin2
export var resoultLose2
export var resoultPush2
fCards = {
    2 : 4,
    3 : 4,
    4 : 4,
    5 : 4,
    6 : 4,
    7 : 4,
    8: 4,
    9 : 4,
    10 : 4,
    "a" : 4,
};


function WinH2(){
    for (let i = 0; i < 10; i++) { // loop on every card

        if (cal(FakeMyHand) + 10 <= 21 && FakeMyHand[0] == "-10"){ //check if the ace is using 11 or 1
            FakeMyHand.shift();
            fAceH = 1;
        }
        if (fCards[order[i]] == 0 && order[i] == "a") { // if there is no Aces in the deck need to move to the next card and go back a card
            cc = FakeMyHand.pop();
            fHMC++;
            fCards[cc]++;
            press = press / parseInt(fCards[cc]) * fHMC;
        }else if(fCards[order[i]] == 0) { // if there are no cards exept A need to continue to the next card

        }else {
            if (order[i] == "a" && cal(FakeMyHand) < 11) { // if the card is A and the calculate is under 11 add 11
                FakeMyHand.push(11);
                fAceH = 1;
            } else if (order[i] == "a" && cal(FakeMyHand) >= 11) { // if the card is A and the calculate is over 11 add 1
                FakeMyHand.push(1);
            } else {
                FakeMyHand.push(order[i]);
            }
            press = press * parseInt(fCards[order[i]]) / fHMC; // decreace the chances of that senario to happen
            fHMC--;
            fCards[order[i]]--;


            if (cal(FakeMyHand) < 17) { // if the calculate is under 17 need to take another card
                HS()
                if (res == 0){

                    WinD2()
                    if (FakeMyHand[FakeMyHand.length - 1] == "1" || FakeMyHand[FakeMyHand.length - 1] == "11") {
                        popAce1(FakeMyHand);
                    }
                    cc = pop2(FakeMyHand);
                    fHMC++;
                    fCards[cc]++;

                    press = press / parseInt(fCards[cc]) * fHMC;
                }else if (res == 1){

                    WinH2(); // do the loop again

                }


            } else if (cal(FakeMyHand) > 21 && fAceH == 2) { // need to go back and try another card
                resoultLose2 = resoultLose2 + press
                cc = FakeMyHand.pop();
                fHMC++;
                fCards[cc]++;
                press = press / parseInt(fCards[cc]) * fHMC;
            } else if (cal(FakeMyHand) > 21 && fAceH == 0) { // need to go back and try another card
                resoultLose2 = resoultLose2 + press
                cc = FakeMyHand.pop();
                fHMC++;
                fCards[cc]++;
                press = press / parseInt(fCards[cc]) * fHMC;
            } else if (cal(FakeMyHand) > 21 && fAceH == 1) { // if the is an Ace in the dealer hand it need to substruct 10 from the dealer hand
                fAceH = 2;
                FakeMyHand.unshift(-10);
                HS()
                if (res == 0){

                    WinD2()
                    if (FakeMyHand[FakeMyHand.length - 1] == "1" || FakeMyHand[FakeMyHand.length - 1] == "11") {
                        popAce1(FakeMyHand);
                    }
                    cc = pop2(FakeMyHand);
                    fHMC++;
                    fCards[cc]++;

                    press = press / parseInt(fCards[cc]) * fHMC;
                }else if (res == 1){

                    WinH2(); // do the loop again

                }

            } else if (cal(FakeMyHand) <= 21 && cal(FakeMyHand) >= 17) {
                HS()
                if (res == 0){

                    WinD2()

                }

                if (FakeMyHand[FakeMyHand.length - 1] == "1" || FakeMyHand[FakeMyHand.length - 1] == "11") {
                    popAce1(FakeMyHand);
                }

                cc = pop2(FakeMyHand);
                fHMC++;
                fCards[cc]++;

                press = press / parseInt(fCards[cc]) * fHMC;
            }
            if (checkAce1(FakeMyHand) == 0) { // check if there are no Aces in the dealers hand
                fAceH = 0;
            }



        }
    }

}
export function WinD2(){
    for (let i = 0; i < 10; i++) { // loop on every card
        if (skip == 1){
            i++;
            skip = 0
        }
        if (cal(FakeDealerHand) + 10 <= 21 && FakeDealerHand[0] == "-10"){ //check if the ace is using 11 or 1
            FakeDealerHand.shift();
            fAceD = 1;
        }
        if (fCards[order[i]] == 0 && order[i] == "a") { // if there is no Aces in the deck need to move to the next card and go back a card
            cc = FakeDealerHand.pop();
            fHMC++;
            fCards[cc]++;
            press = press / parseInt(fCards[cc]) * fHMC;
        }else if(fCards[order[i]] == 0) { // if there are no cards exept A need to continue to the next card

        }else {
            if (order[i] == "a" && cal(FakeDealerHand) < 11) { // if the card is A and the calculate is under 11 add 11
                FakeDealerHand.push(11);
                fAceD = 1;
            } else if (order[i] == "a" && cal(FakeDealerHand) >= 11) { // if the card is A and the calculate is over 11 add 1
                FakeDealerHand.push(1);
            } else {
                FakeDealerHand.push(order[i]);
            }
            if(FakeDealerHand.length == 2 && FakeDealerHand[0] == "11"){
                press = press * parseInt(fCards[order[i]]) / (fHMC - fCards[10]);
            }else{
                press = press * parseInt(fCards[order[i]]) / fHMC; // decreace the chances of that senario to happen
            }
            fHMC--;
            fCards[order[i]]--;

            if (cal(FakeDealerHand) < 17) { // if the calculate is under 17 need to take another card
                WinD2(); // do the loop again
            } else if (cal(FakeDealerHand) > 21 && fAceD == 2) { // need to go back and try another card
                resoultWin2 = resoultWin2 + press ;
                cc = FakeDealerHand.pop();
                fHMC++;
                fCards[cc]++;
                press = press / parseInt(fCards[cc]) * fHMC;
            } else if (cal(FakeDealerHand) > 21 && fAceD == 0) { // need to go back and try another card
                resoultWin2 = resoultWin2 + press ;
                cc = FakeDealerHand.pop();
                fHMC++;
                fCards[cc]++;
                press = press / parseInt(fCards[cc]) * fHMC;
            } else if (cal(FakeDealerHand) > 21 && fAceD == 1) { // if the is an Ace in the dealer hand it need to substruct 10 from the dealer hand
                fAceD = 2;
                FakeDealerHand.unshift(-10);

                WinD2();

            } else if (cal(FakeDealerHand) <= 21 && cal(FakeDealerHand) >= 17) {
                if (cal(FakeDealerHand) > cal(FakeMyHand)){
                    resoultLose2 = resoultLose2 + press
                }else if (cal(FakeDealerHand) == cal(FakeMyHand)){
                    resoultPush2 = resoultPush2 + press
                }else if (cal(FakeDealerHand) < cal(FakeMyHand)){
                    resoultWin2 = resoultWin2 + press
                }
                if (FakeDealerHand.length == 2 && FakeDealerHand[1] == "11") {
                    cc = FakeDealerHand.pop();
                    fHMC++;
                    fCards["a"]++;
                    press = press / parseInt(fCards["a"]) * fHMC;
                } else {
                    if (FakeDealerHand[FakeDealerHand.length - 1] == "1" || FakeDealerHand[FakeDealerHand.length - 1] == "11") {
                        popAce1(FakeDealerHand);
                    }
                    if(FakeDealerHand[0] == "11" && FakeDealerHand[1] == 9 && FakeDealerHand.length == 2){
                        skip = 1
                    }
                    cc = pop2(FakeDealerHand);
                    fHMC++;
                    fCards[cc]++;
                    if (FakeDealerHand.length == 1 && FakeDealerHand[0] == 11){
                        press = press / parseInt(fCards[cc]) * (fHMC - fCards[10]);
                    }else {
                        press = press / parseInt(fCards[cc]) * fHMC;
                    }
                }

            }
            if (checkAce1(FakeDealerHand) == 0) { // check if there are no Aces in the dealers hand
                fAceD = 0;
            }



        }
    }

}

export function SetWin2(MyHand,aceH,DealerHand,aceD){
    order = [2, 3, 4, 5, 6, 7, 8, 9, 10, "a"];
    fCards[2] = cards[2];
    fCards[3] = cards[3];
    fCards[4] = cards[4];
    fCards[5] = cards[5];
    fCards[6] = cards[6];
    fCards[7] = cards[7];
    fCards[8] = cards[8];
    fCards[9] = cards[9];
    fCards[10] = cards[10];
    fCards["a"] = cards["a"];
    resoultWin2 = 0
    resoultLose2 = 0
    resoultPush2 = 0
    press = 1
    fAceH = aceH
    fAceD = aceD
    skip = 0
    fHMC = howManyCards
    for (let i = 0; i < MyHand.length; i++) {
        FakeMyHand[i] = MyHand[i]
    }
    for (let i = 0; i < DealerHand.length; i++) {
        FakeDealerHand[i] = DealerHand[i]
    }
    WinH2()
    FakeMyHand = []
    FakeDealerHand = []
}
export function SetSplit2(MyHand,aceH,DealerHand,aceD){
    order = [2, 3, 4, 5, 6, 7, 8, 9, 10, "a"];
    fCards[2] = cards[2];
    fCards[3] = cards[3];
    fCards[4] = cards[4];
    fCards[5] = cards[5];
    fCards[6] = cards[6];
    fCards[7] = cards[7];
    fCards[8] = cards[8];
    fCards[9] = cards[9];
    fCards[10] = cards[10];
    fCards["a"] = cards["a"];
    resoultWin2 = 0
    resoultLose2 = 0
    resoultPush2 = 0

    press = 1
    fAceH = aceH
    fAceD = aceD
    skip = 0
    fHMC = howManyCards
    FakeMyHand[0] = MyHand[0]
    for (let i = 0; i < DealerHand.length; i++) {
        FakeDealerHand[i] = DealerHand[i]
    }
    WinH2()
    FakeMyHand = []
    FakeDealerHand = []

}


function HS(){
    var stand
    var hit

    SetStand(FakeMyHand,fAceH,FakeDealerHand,fAceD,fCards )
    stand = resoultWin
    SetWin(FakeMyHand,fAceH,FakeDealerHand,fAceD,fCards )
    hit = resoultWin
    if (stand > hit){
        res = 0
    }else{
        res = 1
    }

}






function checkAce1(Hand){
    for (let i = 0; i < Hand.length; i++){
        if(Hand[i] == "11"){
            return 1;
        }

    }
    return 0;
}
function popAce1(Hand){ // function to pop all the Aces from the dealer hand
    while(Hand[Hand.length - 1] == "1" || Hand[Hand.length - 1] == "11"){
        if(Hand[Hand.length - 1] == "1" || Hand[Hand.length - 1] == "11"){
            if (Hand.length == 2 && Hand[1] == "11") {
                return;
            }
            if(Hand.length == 2 && Hand[1] == "1"){
                if (Hand[0] == "11"){
                    return;
                }
            }

            Hand.pop();
            fHMC++;
            fCards["a"]++;
            press = press / parseInt(fCards["a"]) * fHMC;
        }else{
            return;
        }
    }
}
function pop2(Hand){
    cc = Hand.pop()
    if (cc === 11 || cc === 1){
        return "a";
    }else{
        return cc;
    }
}
import {SetNum} from "./NumCards";

export var dealerHand = [];
export var myHand = [];
export var howManyCards = 260;
export var ace = 0;
export var OldCC = 0;
// all the vars to the dealer bust
export var aceD = 0
export var isAce = 0;
var order = [2,3,4,5,6,7,8,9,10,"a"];
export var resoult17;
export var resoult18;
export var resoult19;
export var resoult20;
export var resoult21;
export var resoultB;
var bustP = 1;
var fakeHMC = howManyCards;
var cc;
var dealFakeHand = [];
var fakeCards ;
var skip;

export var cards = {
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
fakeCards = {
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

// setting how many decks are in the game and multiplying the cards

cards[2] = 4 * 8;
cards[3] = 4 * 8;
cards[4] = 4 * 8;
cards[5] = 4 * 8;
cards[6] = 4 * 8;
cards[7] = 4 * 8;
cards[8] = 4 * 8;
cards[9] = 4 * 8;
cards[10] = 4 * 8 * 4;
cards["a"] = 4 * 8;
howManyCards = 52 * 8;
// Code below is the better odds for every card.
function odds(num){
    return parseInt(cards[num]) / howManyCards * 100;
}

// chances to bust
export function chanceBust(Hand){

     if(Hand == 21){
            return 100
    }else if(Hand == 20){
        return 100 - odds("a")
    }else if(Hand == 19){
        return 100 - (odds("a") + odds(2))
    }else if(Hand == 18){
        return 100 - (odds("a") + odds(2) + odds(3))
    }else if(Hand == 17){
        return odds(10) + odds(9) + odds(8) + odds(7) + odds(6) + odds(5)
    }else if (Hand == 16){
        return odds(10) + odds(9) + odds(8) + odds(7) + odds(6)
    }else if (Hand == 15){
        return odds(10) + odds(9) + odds(8) + odds(7)
    }else if (Hand == 14){
        return odds(10) + odds(9) + odds(8)
    }else if (Hand == 13){
        return odds(10) + odds(9)
    }else if (Hand == 12){
        return odds(10)
     }else if (Hand <= 11) {
        return 0;
    }
}
// chance to hit 17 or higher
export function chanceHit(Hand){
    if (Hand <= 5){
        return 0;
    }else if (Hand == 6){
        return odds("a");
    }else if (Hand == 7){
        return odds("a") + odds(10)
    }else if (Hand == 8){
        return odds("a") + odds(10) + odds(9)
    }else if (Hand == 9){
        return odds("a") + odds(10) + odds(9) + odds(8)
    }else if (Hand == 10){
        return odds("a") + odds(10) + odds(9) + odds(8) + odds(7)
    }else if (Hand == 11){
        return odds(10) + odds(9) + odds(8) + odds(7) + odds(6)
    }else if (Hand == 12){
        return odds(9) + odds(8) + odds(7) + odds(6) + odds(5)
    }else if (Hand == 13){
        return odds(8) + odds(7) + odds(6) + odds(5) + odds(4)
    }else if (Hand == 14){
        return odds(7) + odds(6) + odds(5) + odds(4) + odds(3)
    }else if (Hand == 15){
        return odds(6) + odds(5) + odds(4) + odds(3) + odds(2)
    }else if (Hand == 16){
        return odds(5) + odds(4) + odds(3) + odds(2) + odds("a")
    }else if (Hand == 17){
        return odds(4) + odds(3) + odds(2) + odds("a")
    }else if (Hand == 18){
        return odds(3) + odds(2) + odds("a")
    }else if (Hand == 19){
        return odds(2) + odds("a")
    }else if (Hand == 20){
        return odds("a")
    }else if (Hand == 21){
        return 0;















    }
}
// chance to hit 16 or lower
export function chanceHitSmall(Hand){
    if(Hand >= 16 && Hand <= 21){
        return 0;
    }else if (Hand == 15){
        return odds("a")
    }else if (Hand == 14){
        return odds(2) + odds("a")
    }else if (Hand == 13){
        return odds(3) + odds(2) + odds("a")
    }else if (Hand == 12){
        return odds(4) + odds(3) + odds(2) + odds("a")
    }else if (Hand == 11){
        return odds(5) + odds(4) + odds(3) + odds(2) + odds("a")
    }else if (Hand == 10){
        return odds(6) + odds(5) + odds(4) + odds(3) + odds(2)
    }else if (Hand == 9){
        return odds(7) + odds(6) + odds(5) + odds(4) + odds(3) + odds(2)
    }else if (Hand == 8){
        return 100 - (odds("a") + odds(10) + odds(9))
    }else if (Hand == 7){
        return  100 - (odds("a") + odds(10))
    }else if (Hand == 6){
        return 100 - odds("a")
    }else if (Hand <= 5){
        return 100;
    }
}
// Dealer bust
function Bust(dealFakeHand){
    for (let i = 0; i < 10; i++) { // loop on every card
        if (skip == 1){
            i++;
            skip = 0
        }
        if (cal(dealFakeHand) + 10 <= 21 && dealFakeHand[0] == "-10"){ //check if the ace is using 11 or 1
            dealFakeHand.shift();
            isAce = 1;
        }
        if (fakeCards[order[i]] == 0 && order[i] == "a") { // if there is no Aces in the deck need to move to the next card and go back a card
            cc = dealFakeHand.pop();
            fakeHMC++;
            fakeCards[cc]++;
            bustP = bustP / parseInt(fakeCards[cc]) * fakeHMC;
        }else if(fakeCards[order[i]] == 0) { // if there are no cards exept A need to continue to the next card

        }else {
            if (order[i] == "a" && cal(dealFakeHand) < 11) { // if the card is A and the calculate is under 11 add 11
                dealFakeHand.push(11);
                isAce = 1;
            } else if (order[i] == "a" && cal(dealFakeHand) >= 11) { // if the card is A and the calculate is over 11 add 1
                dealFakeHand.push(1);
            } else {
                dealFakeHand.push(order[i]);
            }
            if(dealFakeHand.length == 2 && dealFakeHand[0] == "11"){
                bustP = bustP * parseInt(fakeCards[order[i]]) / (fakeHMC - fakeCards[10])
            }else{
                bustP = bustP * parseInt(fakeCards[order[i]]) / fakeHMC; // decreace the chances of that senario to happen
            }

            fakeHMC--;
            fakeCards[order[i]]--;

            if (cal(dealFakeHand) < 17) { // if the calculate is under 17 need to take another card
                Bust(dealFakeHand); // do the loop again
            } else if (cal(dealFakeHand) > 21 && isAce == 2) { // need to go back and try another card
                resoultB = resoultB + bustP;
                cc = dealFakeHand.pop();
                fakeHMC++;
                fakeCards[cc]++;
                bustP = bustP / parseInt(fakeCards[cc]) * fakeHMC;
            } else if (cal(dealFakeHand) > 21 && isAce == 0) { // need to go back and try another card
                resoultB = resoultB + bustP;
                cc = dealFakeHand.pop();
                fakeHMC++;
                fakeCards[cc]++;
                bustP = bustP / parseInt(fakeCards[cc]) * fakeHMC;
            } else if (cal(dealFakeHand) > 21 && isAce == 1) { // if the is an Ace in the dealer hand it need to substruct 10 from the dealer hand
                isAce = 2;
                dealFakeHand.unshift(-10);
                if (cal(dealFakeHand) <= 21 && cal(dealFakeHand) >= 17) {
                    if (cal(dealFakeHand) == 17) {
                        resoult17 = resoult17 + bustP
                    } else if (cal(dealFakeHand) == 18) {
                        resoult18 = resoult18 + bustP
                    } else if (cal(dealFakeHand) == 19) {
                        resoult19 = resoult19 + bustP
                    } else if (cal(dealFakeHand) == 20) {
                        resoult20 = resoult20 + bustP
                    } else if (cal(dealFakeHand) == 21) {
                        resoult21 = resoult21 + bustP
                    }
                    if (dealFakeHand[dealFakeHand.length - 1] == "1" || dealFakeHand[dealFakeHand.length - 1] == "11") {
                        popAce();
                    }

                    cc = dealFakeHand.pop();
                    fakeHMC++;
                    fakeCards[cc]++;

                    bustP = bustP / parseInt(fakeCards[cc]) * fakeHMC;
                } else {

                    Bust(dealFakeHand);
                }
            } else if (cal(dealFakeHand) <= 21 && cal(dealFakeHand) >= 17) {
                if (cal(dealFakeHand) == 17) {
                    resoult17 = resoult17 + bustP
                } else if (cal(dealFakeHand) == 18) {
                    resoult18 = resoult18 + bustP
                } else if (cal(dealFakeHand) == 19) {
                    resoult19 = resoult19 + bustP
                } else if (cal(dealFakeHand) == 20) {
                    resoult20 = resoult20 + bustP
                } else if (cal(dealFakeHand) == 21) {
                    resoult21 = resoult21 + bustP
                }
                if (dealFakeHand.length == 2 && dealFakeHand[1] == "11") {
                    cc = dealFakeHand.pop();
                    fakeHMC++;
                    fakeCards["a"]++;
                    bustP = bustP / parseInt(fakeCards["a"]) * fakeHMC;
                } else {
                    if (dealFakeHand[dealFakeHand.length - 1] == "1" || dealFakeHand[dealFakeHand.length - 1] == "11") {
                        popAce();
                    }
                    if(dealFakeHand[0] == "11" && dealFakeHand[1] == 9 && dealFakeHand.length == 2){
                        skip = 1
                    }
                    cc = dealFakeHand.pop();
                    fakeHMC++;
                    fakeCards[cc]++;
                    if (dealFakeHand.length == 1 && dealFakeHand[0] == 11){
                        bustP = bustP / parseInt(fakeCards[cc]) * (fakeHMC-fakeCards[10])
                    }else {
                        bustP = bustP / parseInt(fakeCards[cc]) * fakeHMC;
                    }
                }
            }
            if (checkAce() == 0) { // check if there are no Aces in the dealers hand
                isAce = 0;
            }



        }
    }

}
//checks if there is ace in the hand
export function checkAce(){
    for (let i = 0; i < dealFakeHand.length; i++){
        if(dealFakeHand[i] == "11"){
            return 1;
        }

    }
    return 0;
}
// pops all the aces in the hand
export function popAce(){ // function to pop all the Aces from the dealer hand
    while(dealFakeHand[dealFakeHand.length - 1] == "1" || dealFakeHand[dealFakeHand.length - 1] == "11"){
        if(dealFakeHand[dealFakeHand.length - 1] == "1" || dealFakeHand[dealFakeHand.length - 1] == "11"){
            dealFakeHand.pop();
            fakeHMC++;
            fakeCards["a"]++;
            bustP = bustP / parseInt(fakeCards["a"]) * fakeHMC;
        }else{
            return;
        }
    }
}
// calculate the hand because it is an array
export function cal(Hand2){ // function to calculate the dealer's hand
    var index = 0;
    for (let i = 0; i < Hand2.length ; i++){
            index += Hand2[i];

    }
    return index;
}
//setting al the parameters for the bust
export function setBust(Hand, a) { // sets some vars for the dealer's Bust

    order = [2, 3, 4, 5, 6, 7, 8, 9, 10, "a"];
    fakeCards[2] = cards[2];
    fakeCards[3] = cards[3];
    fakeCards[4] = cards[4];
    fakeCards[5] = cards[5];
    fakeCards[6] = cards[6];
    fakeCards[7] = cards[7];
    fakeCards[8] = cards[8];
    fakeCards[9] = cards[9];
    fakeCards[10] = cards[10];
    fakeCards["a"] = cards["a"];
    resoultB = 0;
    resoult17 = 0;
    resoult18 = 0;
    resoult19 = 0;
    resoult20 = 0;
    resoult21 = 0;
    bustP = 1;
    fakeHMC = howManyCards;
    isAce = a
    skip = 0
    for (let i = 0; i < Hand.length; i++) {
        dealFakeHand[i] = Hand[i]
    }
    Bust(dealFakeHand)
    resoultB = (resoultB * 100).toFixed(2)
    resoult17 = (resoult17 * 100).toFixed(2)
    resoult18 = (resoult18 * 100).toFixed(2)
    resoult19 = (resoult19 * 100).toFixed(2)
    resoult20 = (resoult20 * 100).toFixed(2)
    resoult21 = (resoult21 * 100).toFixed(2)
    dealFakeHand = []
}


export function SubHMC(){
    howManyCards--;
}
export function AddHMC(){
    howManyCards++;
}

//every click of number it will add to my hand
export function AddMH(x){

    if (x == "a" && cal(myHand) < 11 && ace == 0){
        myHand.push(11)
        ace = 1;
    }else if (x == "a" && cal(myHand) >= 11){
        myHand.push(1)
    }else{
        myHand.push(x)
    }
    if(cal(myHand) > 21 && ace == 1){
        myHand.unshift(-10)
        ace = 2
    }

}
//setting if ace is there
export function SetA(x){
    ace = x;
}
//every click of number it will change dealer's hand
export function ChangeD(x){
    var gg
    if(cal(dealerHand) > 0){
       gg = dealerHand.pop()
        if (gg == 11){
            cards["a"]++
            aceD =1
        }else {
            cards[gg]++
            aceD =0
        }
        howManyCards++
    }
    if (x == "a"){
        aceD = 1;
        dealerHand.push(11)
    }else{
        dealerHand.push(x)
        aceD =0
    }

}
export function Oldp(){
    OldCC++;
}
export function Olds(){
    OldCC--;
}

//clearing the vars
export function Clear(){
    myHand = []
    dealerHand = []
    ace =0
    aceD = 0
}
export function Insurance(){
    var c = cards[10] + cards["j"] + cards["q"] + cards["k"] // all the 10s
    var v = howManyCards - c // all the none 10s
    if (c > v){ // there are more 10s then other cards
        alert("yes")
    }else if (v > c){
        alert("no")
    }
}

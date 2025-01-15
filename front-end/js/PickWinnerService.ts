import { Participant } from "./ParticipantClass.js"
import { participants } from "./InitializeData.js"
import { participantsForSpecialCase } from "./InitializeData.js"
import { winnerArray } from "./reserve1.js"



function pickWinner1(){
    //random
    const index:number=Math.floor(Math.random()*(66-0)+0)
    const winner:Participant=participants[index]
    //checkcondition
    if(winner.condition=="LOW"&&winner.status!=false&&!winnerArray.includes(winner)){
        winner.number=winner.number-1
        return winner
    }
    return pickWinner1()
}

function pickWinner2(){
    const index:number=Math.floor(Math.random()*(66-0)+0)
    const winner:Participant=participants[index]
    if(winner.condition=="MID"&&winner.status!=false){
        winner.number=winner.number-1
        return winner
    }
    return pickWinner2()
}

function pickWinner3(){
    const index:number=Math.floor(Math.random()*(66-0)+0)
    const winner:Participant=participants[index]
    if(winner.condition=="HIGH"&&winner.status!=false){
        winner.number=winner.number-1
        return winner
    }
    return pickWinner3()
}

export function totalPickWinner(low:number,mid:number,high:number){
    if(low!=0){
    for(let i=0;i<low;i++){
        winnerArray.push(pickWinner1())
    }
    }
    if(mid!=0){
    for(let i=0;i<mid;i++){
        winnerArray.push(pickWinner2())
    }
    }
    if(high!=0){
    for(let i=0;i<high;i++){
        winnerArray.push(pickWinner3())
    }
    }
}

export function pickWinnerforSpecialCase(){  
    const index:number=Math.floor(Math.random()*(26-0)+0)
    console.log(index)
    winnerArray.push(participantsForSpecialCase[index])
}
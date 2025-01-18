import { Participant } from "./ParticipantClass.js"
import { participants, participantsForSpecialCaseFE } from "./InitializeData.js"
import { participantsForSpecialCase } from "./InitializeData.js"
import { winnerArray, winnerPerCycle } from "./reserve1.js"

function pickWinner(participantArray:Participant[],condition:string){
    const index:number=Math.floor(Math.random()*(participants.length-0)+0)
    const winner:Participant=participantArray[index]
    if(winner.condition==condition&&winner.number>0&&!winnerArray.includes(winner)){
        winner.number=winner.number-1
        return winner
    }
    return pickWinner(participantArray,condition)
}

export function totalPickWinner(lowest:number,low:number,mid:number,high:number,highest:number){
    if(lowest!=0){
        for(let i=0;i<lowest;i++){
            let winner:Participant=pickWinner(participants,"LOWEST")
            winnerArray.push(winner)
            winnerPerCycle.push(winner)
        }
    }
    if(low!=0){
    for(let i=0;i<low;i++){
        let winner:Participant=pickWinner(participants,"LOW")
            winnerArray.push(winner)
            winnerPerCycle.push(winner)
    }
    }
    if(mid!=0){
    for(let i=0;i<mid;i++){
        let winner:Participant=pickWinner(participants,"MID")
            winnerArray.push(winner)
            winnerPerCycle.push(winner)
    }
    }
    if(high!=0){
    for(let i=0;i<high;i++){
        let winner:Participant=pickWinner(participants,"HIGH")
            winnerArray.push(winner)
            winnerPerCycle.push(winner)
    }
    }
    if(highest!=0){
    for(let i=0;i<highest;i++){
        let winner:Participant=pickWinner(participants,"HIGHEST")
        winnerArray.push(winner)
        winnerPerCycle.push(winner)
    }
    }
}

export function pickWinnerforSpecialCase(){  
    const index:number=Math.floor(Math.random()*(27-0)+0)
    if(index==7){
        pickWinnerforSpecialCase()
        return
    }
    console.log(index)
    const winner:Participant=participantsForSpecialCaseFE[index]
    winnerArray.push(winner)
    winnerPerCycle.push(winner)
}
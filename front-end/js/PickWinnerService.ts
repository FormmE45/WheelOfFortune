import { Participant } from "./ParticipantClass.js"
import { participants } from "./InitializeData.js"
import { participantsForSpecialCase } from "./InitializeData.js"
import { winnerArray } from "./reserve1.js"

function pickWinner(condition:string){
    const index:number=Math.floor(Math.random()*(67-0)+0)
    const winner:Participant=participants[index]
    if(winner.condition==condition&&winner.number>0&&!winnerArray.includes(winner)){
        winner.number=winner.number-1
        return winner
    }
    return pickWinner(condition)
}

export function totalPickWinner(lowest:number,low:number,mid:number,high:number,highest:number){
    if(lowest!=0){
        for(let i=0;i<lowest;i++){
            winnerArray.push(pickWinner("LOWEST"))
        }
    }
    if(low!=0){
    for(let i=0;i<low;i++){
        winnerArray.push(pickWinner("LOW"))
    }
    }
    if(mid!=0){
    for(let i=0;i<mid;i++){
        winnerArray.push(pickWinner("MID"))
    }
    }
    if(high!=0){
    for(let i=0;i<high;i++){
        winnerArray.push(pickWinner("HIGH"))
    }
    }
    if(highest!=0){
    for(let i=0;i<highest;i++){
         winnerArray.push(pickWinner("HIGHEST"))
    }
    }
}

export function pickWinnerforSpecialCase(){  
    const index:number=Math.floor(Math.random()*(27-0)+0)
    console.log(index)
    winnerArray.push(participantsForSpecialCase[index])
}
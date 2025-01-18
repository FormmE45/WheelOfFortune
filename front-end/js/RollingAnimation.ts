import { shuffleArray } from "./InitializeData.js"
import { participantElementArray } from "./InitToFE.js"
import { stop } from "./reserve1.js"
const colorChosen:string[]=["#89251B","#FA8D40"]


export function randomPick(numberOfPick:number){
    const time=250
    shuffleArray(participantElementArray)
    for(let i=0;i<numberOfPick;i++){
        changeParticipantColorToChosen(participantElementArray[i])
        setTimeout(()=>{
            changeParticipantColorToNormal(participantElementArray[i])
        },200)
    }
    if(!stop){
    setTimeout(()=>{
        randomPick(numberOfPick)
    },time)
}
}

function changeParticipantColorToNormal(participantElement: HTMLDivElement){
    participantElement.style.backgroundColor="#FEEEDF";
    participantElement.style.color="#DC392F";
}

function changeParticipantColorToChosen(participantElement: HTMLDivElement){
    participantElement.style.backgroundColor="#89251B";
    participantElement.style.color="#FA8D40";
}

export function participantChosen(participantElement: HTMLDivElement){
    participantElement.classList.add("participantChosen")
}
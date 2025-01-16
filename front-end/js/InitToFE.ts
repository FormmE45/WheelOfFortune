import { Participant } from "./ParticipantClass.js";
import { winnerArray } from "./reserve1.js";

export const participantContainer=document.querySelector(".participant-container")

export function initParticipantFE(participant:Participant){
    const participantDiv=document.createElement("div")
    const participantName=document.createElement("p")
    participantName.textContent=participant.name
    const participantNumber=document.createElement("p")
    participantNumber.textContent="Vote:" + participant.number
    participantDiv.appendChild(participantName)
    participantDiv.appendChild(participantNumber)
    participantDiv.className="participantDiv col-1"
    participantDiv.id=participant.name+participant.id
    if(participant.number==0){
        participantDiv.className= participantDiv.className+" "+"participantInactive"
    }else{
        participantDiv.className= participantDiv.className+" "+"participantActive"
    }
    participantContainer?.appendChild(participantDiv)
}

export function initParticipantOnArrayInput(participantsInput:Participant[]){
    if(participantContainer){
    participantContainer.innerHTML=""
    }
    participantsInput.forEach((participant)=>{
        initParticipantFE(participant)
    })
}

export function initWinnerToModal(){
    winnerArray
}


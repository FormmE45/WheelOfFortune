import { Participant } from "./ParticipantClass.js";
import { winnerArray } from "./reserve1.js";

export const participantContainer=document.querySelector(".participant-container")
export let participantElementArray: HTMLDivElement[]=[]

export function initParticipantFE(participant:Participant){
    const participantDiv=document.createElement("div")
    const participantName=document.createElement("p")
    participantName.textContent=participant.name
    const participantNumber=document.createElement("p")
    participantNumber.textContent="Vote:" + participant.number
    participantDiv.appendChild(participantName)
    participantDiv.appendChild(participantNumber)
    participantDiv.className="participantDiv col-1 fw-bold"
    participantDiv.id=participant.name+participant.id
    if(participant.number==0){
        participantDiv.classList.add("participantInactive")
    }else{
        participantDiv.classList.remove("participantInactive")
        participantDiv.classList.add("participantActive")
        participantElementArray.push(participantDiv)
        participant.div=participantDiv
    }
    participantContainer?.appendChild(participantDiv)
}

export function initParticipantOnArrayInput(participantsInput:Participant[]){
    participantElementArray=[]
    if(participantContainer){
    console.log("Clear inner html")
    participantContainer.innerHTML=""
    }
    participantsInput.forEach((participant)=>{
        initParticipantFE(participant)
    })
}

export function initWinnerToModal(){
    winnerArray
}


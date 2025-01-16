import { prizes,prizeButtons,participants,prizeKK,prize1,prize2,prize3,prize4,prizeDB, participantsForSpecialCase } from "./InitializeData.js"
import { Participant } from "./ParticipantClass.js"
import { Prize } from "./PrizeClass.js"
import { totalPickWinner } from "./PickWinnerService.js"
import { initParticipantOnArrayInput } from "./InitToFE.js"

export let winnerArray:Participant[]=[]
//Current prize
let current_prize:string
//Get div for side panel buttonPrizes
let buttonPrizes=document.querySelector("#buttonPrizes")
//Get start/stop button
const startButton: HTMLButtonElement | null=document.querySelector("#start")
const stopButton: HTMLButtonElement | null=document.querySelector("#stop")
// Initialize button
prizes.forEach((prize)=>{
    const button=document.createElement("button")
    button.className="buttonPrize btn btn-primary col-2"
    button.id=prize.id
    button.innerText=prize.name
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', '#prize'+prize.id)
    button.addEventListener("click",()=>{
        winnerArray=[]
        console.log(winnerArray)
        count=3
        current_prize=prize.id
    })
    prize.button=button
    prizeButtons.push(button)
    if(buttonPrizes!=null){
    buttonPrizes.appendChild(button)
    }
})
//Init participant
initParticipantOnArrayInput(participants)
export let winnerPerCycle: Participant[]=[]    
// function checkNumber(){
//         participants.forEach((item)=>{
//             if(item.number==0){
//                 item.status=false;
//                 console.log(item.id+" "+item.name)
//             }
//         })
// }
    
//Count for the number of roll (only KK and 4 prize)
let count=3
//Start and stop button handler
if(startButton&&stopButton){
startButton.addEventListener("click",()=>{
    console.log(current_prize)
    switch(current_prize){
        case "KK" : {
            winnerPerCycle=[]
            console.log(winnerPerCycle)
            
            if(count==1){
            totalPickWinner(0,6,0,0,5)
            }else{
            totalPickWinner(1,6,0,0,5)
            }
            if(count>0){
                count=count-1
            }else{
                return
            }
            initParticipantOnArrayInput(participants)
            break
        }
        case "4" : {
            winnerPerCycle=[]
            
            console.log(participants)
            if(count==1){
            totalPickWinner(0,3,2,0,5)
            }else{
            totalPickWinner(1,3,2,0,4)
            }
            if(count>0){
                count=count-1
            }else{
                return
            }
            initParticipantOnArrayInput(participants)
            console.log(count)
            break
        }
        case "3" : {
            winnerPerCycle=[]
            if(prize3.done){
                return
            }
            totalPickWinner(0,0,1,2,7)
            prize3.done=true
            initParticipantOnArrayInput(participants)
            break
        }
        case "2" : {
            winnerPerCycle=[]
            if(prize2.done){
                return
            }
            totalPickWinner(0,0,0,0,5)
            prize2.done=true
            initParticipantOnArrayInput(participants)
            break
        }
        case "1" : {
            winnerPerCycle=[]
            if(prize1.done){
                return
            }
            totalPickWinner(0,0,0,0,2)
            prize1.done=true
            initParticipantOnArrayInput(participants)
            break
        }
        case "ĐB" : {
            winnerPerCycle=[]
            if(prizeDB.done){
                return
            }
            totalPickWinner(0,0,0,0,1)
            prizeDB.done=true
            initParticipantOnArrayInput(participantsForSpecialCase)
            break
        }
    }
    startButton.disabled=true
    stopButton.disabled=false
})



}
//check Winner Array And Disable Button
function checkWinnerArrayAndDisableButton(prize: Prize){
    console.log(winnerArray.length)
    checkWinnerArray(prize)
    prize.disableButton()
}
//check Winner Array
function checkWinnerArray(prize:Prize){
    console.log(prize.name)
    winnerArray.forEach(item=>console.log(item.id + " " + item.name))
}

function initModalWinner(){
    const winnermodal=document.querySelector("#winnermodalbody")
    if(winnermodal)
    winnermodal.innerHTML=""
    winnerPerCycle.forEach(winner=>{
        const winnerDiv=document.createElement("div")
        winnerDiv.textContent=winner.name
        winnermodal?.appendChild(winnerDiv)
    })
}

if(startButton&&stopButton){
stopButton.addEventListener("click",()=>{
    switch(current_prize){
        case "KK":{
            initModalWinner()
            if(count==0){
                checkWinnerArrayAndDisableButton(prizeKK)
            }
            break
        }
        case "4":{

            if(count==0){
                checkWinnerArrayAndDisableButton(prize4)
            }
            break
        }
        case "3":{
                checkWinnerArray(prize3)
                prize3.disableButton()
            break
        }
        case "2":{
            checkWinnerArray(prize2)
                prize2.disableButton()
            break
        }
        case "1":{
            checkWinnerArray(prize1)
                prize1.disableButton()
            break
        }
        case "ĐB":{
            checkWinnerArray(prizeDB)
                prizeDB.disableButton()
            break
        }
    }
    startButton.disabled=false
    stopButton.disabled=true
})}

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
    button.className="buttonPrize"
    button.id=prize.id
    button.innerText=prize.name

    button.addEventListener("click",()=>{
        winnerArray=[]
        count=3
        current_prize=prize.id
    })
    prize.button=button
    prizeButtons.push(button)

    if(buttonPrizes!=null){
    buttonPrizes.appendChild(button)
    }
})

    
function checkNumber(){
        participants.forEach((item)=>{
            if(item.number==0){
                item.status=false;
                console.log(item.id+" "+item.name)
            }
        })
}
    
//Count for the number of roll (only KK and 4 prize)
let count=3
//Start and stop button handler
if(startButton&&stopButton){
startButton.addEventListener("click",()=>{
    switch(current_prize){
        case "KK" : {
            if(count==0){
                prizeKK.done=true
                const KKButton: HTMLButtonElement | null= document.querySelector("#KK")
                if(KKButton!=null){
                    KKButton.disabled=true
                }
                return
            }
            totalPickWinner(8,3,1)
            if(count==1){
            totalPickWinner(8,3,0)
            }
            count=count-1
            console.log(count)
            break
        }
        case "4" : {
            if(prize4.done){
                const ForthButton: HTMLButtonElement | null= document.querySelector("#4")
                if(ForthButton!=null){
                    ForthButton.disabled=true
                }
                return
            }
            if(count==0){
                prize4.done=true
                return
            }
            totalPickWinner(5,4,1)
            if(count==1){
            totalPickWinner(6,3,1)
            }
            count=count-1
            break
        }
        case "3" : {
            if(prize3.done){
                return
            }
            totalPickWinner(0,10,0)
            prize3.done=true
            break
        }
        case "2" : {
            if(prize2.done){
                return
            }
            totalPickWinner(0,1,4)
            prize2.done=true
            break
        }
        case "1" : {
            if(prize1.done){
                return
            }
            totalPickWinner(0,1,1)
            prize1.done=true
            break
        }
        case "DB" : {
            if(prizeDB.done){
                return
            }
            pickWinnerforSpecialCase()
            prizeDB.done=true
            break
        }
    }
    startButton.disabled=true
    stopButton.disabled=false
})
}
if(startButton&&stopButton){
stopButton.addEventListener("click",()=>{

    switch(current_prize){
        case "KK":{
            if(count==0){
                prizeKK.disableButton()
            }
            break
        }
        case "4":{
            if(count==0){
                prize4.disableButton()
            }
            break
        }
        case "3":{
                prize3.disableButton()
            break
        }
        case "2":{
                prize2.disableButton()
            break
        }
        case "1":{
                prize1.disableButton()
            break
        }
        case "DB":{
                prizeDB.disableButton()
            break
        }
    }
    startButton.disabled=false
    stopButton.disabled=true
})}
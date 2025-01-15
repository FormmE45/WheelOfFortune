export class Prize{
    id:string
    name:string
    status:string
    done:boolean
    numOfPrizes:number
    button?:HTMLButtonElement

    constructor(id:string,name:string,status:string,done:boolean,numOfPrizes:number){
        this.id=id
        this.name=name
        this.status=status
        this.done=done
        this.numOfPrizes=numOfPrizes
    }

    
    disableButton(){  
        if(this.button){
        this.button.disabled=true
        }
    }

    enableButton(){  
        if(this.button){
        this.button.disabled=false
        }
    }
}
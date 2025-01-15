export class Participant{
    id:number
    name:string
    number:number
    seniority:number
    condition:string
    status:boolean

    constructor(id:number,name:string,number:number,seniority:number,condition:string,status:boolean){
        this.id=id
        this.name=name;
        this.number=number;
        this.seniority=seniority;
        this.condition=condition;
        this.status=status;
    }
    
    minusNumber(){
        this.number=this.number-1;
    }

    checkStatus(){
        if(this.number==0){
            this.status=false
        }
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DPSCORTO';

  registerArray=[];
  clientes:any;
  name:string;
  dui:number;
  petName:string;
  medication:string;
  drug:string;
  cost:number;
  count:number;
  duis=[]
  c:number;
  desc:number;
   constructor() { }
   ngOnInit() {
   
   this.name='';
   this.dui=null;
   this.petName='';
   this.medication='';
   this.drug='';
   this.cost=null;
   this.count=0;
   this.c=1;
   this.desc=0;

   }
   registrar(){
   if(this.cost>0 ){

    for (let i = 0; i < this.duis.length; i++) {
      if (this.dui==this.duis[i]) {
        this.c++;
      } 
    }

    
   
    console.log(this.c);
    if (this.c>=2 && this.c<=4) {
      this.desc=this.cost*0.95
      this.clientes={"name":this.name,"dui":this.dui,"petName":this.petName,"medication":this.medication, "drug":this.drug,"cost":this.desc};
      this.registerArray.push(this.clientes);
      this.duis.push(this.dui);
      this.count++;
    } else if(this.c>4) {
      this.desc=this.cost*0.90
      this.clientes={"name":this.name,"dui":this.dui,"petName":this.petName,"medication":this.medication, "drug":this.drug,"cost":this.desc};
      this.registerArray.push(this.clientes);
      this.duis.push(this.dui);
      this.count++;
    }
    else{
      this.clientes={"name":this.name,"dui":this.dui,"petName":this.petName,"medication":this.medication, "drug":this.drug,"cost":this.cost};
      this.registerArray.push(this.clientes);
      this.duis.push(this.dui);
      this.count++;
    }
    this.c=1;

   }else{

  }

  }
}

//inheritance
class a{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    display():void{
        console.log(this.name);
    }
}

class b extends a{
    age:number;
    constructor(name:string,age:number){
        super(name);
        this.age=age;
    }
    display():void{
        super.display();
        console.log(this.age);
    } 
}
// let obj=new b("sachin",30);
// obj.display();


class c extends b{
    city:string;
    constructor(name:string,age:number,city:string){
        super(name,age);
        this.city=city;
    }
    display():void{
        super.display();
        console.log(this.city);
    }
}
let obj=new c("sachin",30,"mumbai");
obj.display();
 
// const person={
//     name:"Rahi",
//     walk(){
//         console.log(this)
//     },
    
// }
 
// person.walk()

// const walk = person.walk.bind(person);
// walk();


// const jobs=[
//     {id:1,isActive:true},
//     {id:2,isActive:false},
//     {id:3,isActive:true},
// ]
 
// const activeJobs = jobs.filter(job=> job.isActive)
// console.log(activeJobs)


//arrow function and this

// const person ={
//     talk(){
  
//         setTimeout(()=>{
//             console.log('this',this)
//         },1000)
//     }
// }

// person.talk()

// const colors =['red','green','blue']

// const items=colors.map(color=>`<li>${color}</li>`).join(" ");
// console.log(items)

// const address ={
//     street:'ff',
//     city:'',
//     country:''
// };

// const {street:st,city,country}=address;
// //destructuring alias street:st
// console.log(st)


// const first = [1,2,3]
// const second =[4,5,6]

// // const combined = first.concat(second)
// const combined = [...first,'a',...second,"b"] //spreed operator
// const test =[...first]
// console.log(first,test)

// const first={name:"most"}
// const second={job:"insidds"}
// const combined ={...first,...second,location:"austratlia"}

// const copy ={...first}
// console.log(copy)


//class 

export class Person{
    constructor(name){
        this.name=name;
    }

    walk(){
        console.log(this.name,"walk")
    }
}


import { Person } from "./person";

export default class Teacher extends Person{
    constructor(name,degree){
        super(name)
        this.degree=degree;
    }

    teach(){
        console.log(this.name,"teach student and he is a ",this.degree)
    }
}


const teacher = new Teacher("Nokib sir","BSC");
teacher.teach()
teacher.walk()
console.log("Rahi")
export {}

let message = 'hello';
console.log(message);

let total:number = 0
let name:string = 'Vishwas';
let sentence:string = `My ${name}
my blame`;
console.log(sentence);

let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:string = undefined;

let list1: number[] = [1, 2, 3];
//let list2:array[number] = [1, 2, 3];

let person1:[string, number] = ['Bhagyesh', 22];

enum Color {Red=4, Green, Blue}
let c: Color = Color.Green
console.log(c);

let myVariable:unknown = 10;
(myVariable as string).toUpperCase();

let multiType: number | boolean;
multiType = 20;

multiType = true;

let anyType:any;

function add(n1:number, n2:number = 10):number {
  if(n2)
    return n1 + n2;
  else
    return n1;
}
add(5, 9);
add(7);

interface Person {
  firstName: string;
  lastName: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: 'khali',
  lastName: 'bali'
}

fullName(p);




class Employee {
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Hi ${this.employeeName}`);
  }
}
class SalaryWala extends Employee {
  private salary: number;

  constructor(n: string) {
    super(n);
  }

  setSalary(s:number) {
    this.salary = s;
  }
}
let e = new Employee('patel');
e.greet();

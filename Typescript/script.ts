class Person {
  name: string;
  age: number;
  constructor(moiName: string, moiAge: number) {
    this.name = moiName;
    this.age = moiAge;
  }
  nameNumber() {
    console.log("my name is  " + this.name + " and my age is " + this.age);
  }
}
var obj = new Person("sugam", 19);

obj.nameNumber();

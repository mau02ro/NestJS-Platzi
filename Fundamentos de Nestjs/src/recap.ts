const myName = 'nicolas';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(8, 5);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(myAge, myName);

nicolas.getSummary();

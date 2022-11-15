// === Concept

// Last In First Out
// The last element to add, the last element to remove

// Operations
// Push - add to the end of the stack;
// Pop - remove from the end of the stack;
// Peek - select the last element in the stack;

// Examples
// Patrons of the gun

// Arrays
const arrayCars = ['Lancer Evo 9', 'Subaru Impreza WRX STI', 'Skyline R33', 'Honda Civic'];

console.log('initial array');
console.log(arrayCars);

console.log('pop');
arrayCars.pop();
console.log(arrayCars);

console.log('push');
arrayCars.push('Toyota Supra');
console.log(arrayCars);

console.log('peek');
console.log(arrayCars[arrayCars.length - 1]);

// Classes
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.storage[this.size] = value;
    this.size += 1;
    return this;
  }

  pop() {
    const deletedElement = this.storage[this.size];
    delete this.storage[this.size];
    this.size -= 1;
    return deletedElement;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stackCars = new Stack();

console.log('initial stack');
console.log(stackCars);

console.log('push');
stackCars.push('Toyota Supra');
console.log(stackCars);

console.log('pop');
stackCars.pop();
console.log(stackCars);

console.log('peek');
stackCars.peek();
console.log(stackCars.peek());

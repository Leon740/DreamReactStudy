// === Concept

// First In First Out
// The last element to add, the first element to remove

// Operations
// Enqueue - add to the queue;
// Dequeue - remove from the queue;

// Examples
// Line of people

// Arrays
const arrayCars = ['Lancer Evo 9', 'Subaru Impreza WRX STI', 'Honda Civic'];

console.log('initial array');
console.log(arrayCars);

console.log('push');
arrayCars.push('Toyota Supra');
console.log(arrayCars);

console.log('shift');
arrayCars.shift();
console.log(arrayCars);

// Classes
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail += 1;
    return this;
  }

  dequeue() {
    const deletedElement = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;
    return deletedElement;
  }
}

const queueCars = new Queue();

console.log('initial queue');
console.log(queueCars);

console.log('enqueue');
console.log(queueCars.enqueue('Toyota Supra'));

console.log('enqueue');
console.log(queueCars.enqueue('Lancer Evo'));

console.log('dequeue');
console.log(queueCars.dequeue());
console.log(queueCars);

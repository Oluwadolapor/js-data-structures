// Code Author: Amoo Olusola Simeon
// Twitter: @aosimeon
// Github: @aosimeon
// License: MIT

// Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  // Print Node data to the console and also return as a string
  toString() {
    console.log(this.data.toString());
    return this.data.toString;
  }
}

// Make head and tail Symbolic to prevent access from outsiders
const head = Symbol("head");
const tail = Symbol("tail");

// DoublyLinkedList Class
class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this[head] = null;
    this[tail] = null;
  }

  // Add data to list
  add(data) {
    let newNode = new Node(data);

    if (this[head] === null) {
      this[head] = newNode;
    } else {
      this[tail].next = newNode;
      newNode.prev = this[tail];
    }

    this[tail] = newNode;
    this.size++;
    console.log(`${data} Added!`);
  }

  // Remove data with its index
  removeWithIndex(index) {
    if (index < 0) {
      console.log("Index number can not be negative.");
      return;
    } else if (index === 0) {
      // If index is 0, then you're trying to remove the head node, just set the next node as the head node
      let current = this[head];
      this[head] = current.next;
      console.log(`Index ${index} with data ${current.data} has been removed`);
      return;
    }

    for (let current = this[head], i = 0; current !== null && i <= index; current = current.next, i++) {
      if (i === index) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        console.log(`Index ${i} with data ${current.data} has been removed`);
        this.size--;
        return;
      }
    }

    console.log(`Index ${index} not found`);
  }

  // Get data with its Index
  getWithIndex(index) {
    if (index < 0) {
      console.log("Index number can not be negative.");
      return;
    }

    for (let current = this[head], i = 0; current !== null && i <= index; current = current.next, i++) {
      if (i === index && current !== null) {
        console.log(`Value ${current.data} found at index ${i}`);
        return current.data;
      }
    }
    console.log(`Invalid index: ${index}`);
  }

  // Get size of the list
  getSize() {
    console.log(`Total amount of items in the list: ${this.size}`);
    return this.size;
  }

  // Print list data to the console
  toString() {
    let current = this[head];
    let i = 0;
    while (current !== null) {
      console.log(`Index: ${i} Value: ${current.data}`);
      current = current.next;
      i++;
    }
  }
}

let ages = new DoublyLinkedList();

// Demo
ages.add(5);
ages.add(3);
ages.add(2);
ages.toString();
ages.getSize();
ages.getWithIndex(0);
ages.getWithIndex(1);
ages.getWithIndex(2);
ages.removeWithIndex(0);
ages.toString();
ages.removeWithIndex(6);
ages.toString();
ages.getWithIndex(2);
ages.getWithIndex(1);
ages.getWithIndex(0);
ages.add(10);
ages.add(20);
ages.add(30);
ages.add(40);
ages.toString();
ages.removeWithIndex(3);
ages.toString();
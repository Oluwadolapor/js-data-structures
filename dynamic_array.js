// Code Author: Amoo Olusola Simeon
// Twitter: @aosimeon
// Github: @aosimeon
// License: MIT

// Dynamic array class
class dynamicArray {
    constructor(capacity) {
        this.capacity = capacity;
        if (typeof(this.capacity) !== 'number') {
            throw new Error("Capacity must be a number.");
        }
        this.arr = new Array(capacity);
        this.length = 0;
    }

    // Check array length
    size() {
        console.log(`The length of the array is ${this.length}`);
        return this.length;
    }

    // Check if array is empty
    isEmpty() {
        console.log(this.length == 0);
        return this.length == 0;
    }

    // Get value at a particular index in the array
    get(index) {
        if (index >= this.length || index < 0) {
            console.log("Index out of bounds");
            return -1;
        }
        console.log(`The value at index ${index} is ${this.arr[index]}`);
        return this.arr[index];
    }

    // Set value at a particular index
    set(index, value) {
        if (index > this.capacity - 1 || index < 0) {
            console.log('Index out of bounds');
            return -1;
        }
        this.arr[index] = value;
        console.log(this.arr);
    }

    // Clear out the whole array
    clear() {
        this.capacity = 1;
        this.length = 0;
        this.arr = new Array(this.capacity);
        console.log(this.arr);
    }

    // Add a value to the array
    add(value) {
        if ((this.length + 1) > this.capacity) {
            this.capacity *= 2;
            let tempArray = new Array(this.capacity);
            for (let i = 0; i < this.length; i++) {
                tempArray[i] = this.arr[i]; 
            }
            this.arr = tempArray;
        }
        this.arr[this.length++] = value;
        console.log(this.arr);
    }

    // Remove value at a particular index
    removeAt(index) {
        if (index >= this.length || index < 0) {
            console.log('Index out of bounds');
            return -1;
        }
        let tempArray = new Array(this.capacity);
        for (let i = 0, j = 0; i < this.length; i++, j++) {
            if (i == index) { j--; continue; }
            tempArray[j] = this.arr[i];
        }
        this.length--;
        this.arr = tempArray;
        console.log(this.arr);
    }

    // Remove a particular value from the array
    removeValue(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === value) {
                this.removeAt(i);
                console.log(`${value} removed.`);
                return 0;
            }
        }
        console.log("Value not found");
    }

    // Check if the array contains a value
    contains(value) {
        console.log(this.arr.indexOf(value) !== -1)
        return this.arr.indexOf(value) !== -1;
    }

    // Print the array as a string
    toString() {
        let arr = ""
        for (let i = 0; i < this.length; i++) {
            arr += this.arr[i] + ', ';
        }
        console.log(arr);
    }
}

let myArr = new dynamicArray(2);
myArr.add(2);
myArr.add("shola");
myArr.add("simeon");
myArr.add("alabi");
myArr.add("8");
myArr.toString();
myArr.contains(4);
myArr.contains(2);
myArr.removeAt(5);
myArr.removeAt(4);
myArr.removeAt(1);
myArr.removeValue(2);
myArr.removeValue("love");
myArr.size();
myArr.add("love");
myArr.size();
myArr.get(5);
myArr.get(1);
myArr.set(20, 3);
myArr.set(3, 4);
myArr.isEmpty();
myArr.clear();
let myArr2 = new dynamicArray("not a number");
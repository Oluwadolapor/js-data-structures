// Code Author: Amoo Olusola Simeon
// Twitter: @aosimeon
// Github: @aosimeon
// License: MIT

/* Check index of value in an array
 * Return index if value found
 * Return -1 if value is not in the array 
 */
function findIndex(value, arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == value) {
            console.log(`value: ${value} is located at index: ${mid}, in the array: ${arr}`);
            return mid;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else if (arr[mid] > value) {
            high = mid - 1;
        }

        console.log(`Low: ${low}, High: ${high}`);
    }
    console.log(`Value ${value} not found.`);
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

findIndex(1, arr);
findIndex(5, arr);
findIndex(7, arr);
findIndex(10, arr);
// The bubble sort makes multiple passes through a list. 

// It compares adjacent items and exchanges those that are out of order.
// Each pass through the list places the next largest value in its proper place. 

// ------------------------------------
// I made this file when i was learning js; will convert it to a function later

const arr = [15, 1, 53, 5, 56, 32, 25, 919, 85, 6];
let isChanged = true; // flag is used to stop if the array is already sorted ; no need to go till the end of array

while (isChanged) {
    isChanged = false
    for ( let i = 0; i <= arr.length; i++) {
        for ( let j = 0; j < (arr.length - 1 - i); j++) { // a sorted number is no more sorted
            if (arr[j] > arr[j+1]) {
                const tempStock = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tempStock;
                isChanged = true;
            }
        console.log("array in progress -> " + arr);
        }
    }
}
console.log("final array sorted -> " + arr)

// 2019/04/26
// BELLOC Boris

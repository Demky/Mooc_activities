// Test at an IT startup in France; Avignon(84)
// 2019/04/26

// This solution use bubble sort

const arr = [5, 1, 8, 7, 5, 10];
let isChanged = true; // flag is used to stop if the array is already sorted ; no need to go till the end of array

while (isChanged) {
  isChanged = false
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= (arr.length - 1 - i); j++) { // a sorted number is no more sorted
      if (arr[j] > arr[j + 1]) {
        const tempStock = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempStock;
        isChanged = true;
        console.log("array in progress -> " + arr);
      }
    }
  }
}
console.log("final array sorted -> " + arr)
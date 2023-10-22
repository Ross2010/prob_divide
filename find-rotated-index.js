function findRotatedIndex(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (target === midVal) {
      return midIdx;
    }

    if (arr[leftIdx] <= midVal) {
      if (target >= arr[leftIdx] && target < midVal) {
        rightIdx = midIdx - 1;
      } else {
        leftIdx = midIdx + 1;
      }
    } else {
      if (target > midVal && target <= arr[rightIdx]) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  return -1; 
}

module.exports = findRotatedIndex


/*function findRotatedIndex(arr, target) {
  let length = arr.length / 2;

  function findside(arr, target) {
    let side = [];
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];
    if (target <= midVal && target <= leftVal) {
    return side = arr[midIdx + 1, rightIdx];
    }
    else if (target >= midVal && target >= rightVal) {
    return side = arr[leftIdx, midIdx + 1];
    }
}


function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length + 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      let midVal = arr[midIdx];
      let leftVal = arr[leftIdx];
      let rightVal = arr[rightIdx];
  
      if (target === midVal) {
        return midIdx;
      } else if (target < midVal && target < leftIdx) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  
    return -1; 
  }
  
module.exports = findRotatedIndex

//[6, 7, 8, 9, 1, 2, 3, 4], 3.toBe(6)
               */
function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let result = 0; 

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal === 0 && (midIdx === 0 || arr[midIdx - 1] !== 0)) {
      
      result = arr.length - midIdx;
      return result;
    }
     else if (midVal !== 0) {
      leftIdx = midIdx + 1;
    }
     else {
      rightIdx = midIdx - 1;
    }
  }

  return -1;
}

module.exports = countZeroes;

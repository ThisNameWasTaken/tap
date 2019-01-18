const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];

function findMedian(arr) {
  return arr.length % 2
    ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    : arr[arr.length / 2];
}

function findCommonMedian(arr1, arr2) {
  let median1 = findMedian(arr1);
  let median2 = findMedian(arr2);

  if (median1 === median2) {
    return median1;
  }

  if (median1 > median1) {
    // return arr1.length % 2
    //  ?
  } else {

  }
}
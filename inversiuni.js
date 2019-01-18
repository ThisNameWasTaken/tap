let arr = [2, 4, 1, 3, 5];
let temp = [];

function countInversions(left, right) {
  let inversions = 0;

  if (right > left) {
    const middle = (right + left) / 2;

    inversions += countInversions(left, middle);
    inversions += countInversions(middle + 1, right);

    inversions += merge(left, right);
  }

  return inversions;
}

function merge(left, right) {
  const middle = (right + left) / 2;

  let inversions = 0;

  let i = left;
  let j = middle;
  let k = right;

  while (i < middle && j < right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
      inversions += (middle - i);
    }
  }

  while (i < mid) {
    temp[k++] = arr[i++];
  }

  while (j < right) {
    temp[k++] = arr[j++];
  }

  for (let i = left; i < right; i++) {
    arr[i] = temp[i];
  }

  return inversions;
}

(() => {
  console.log(countInversions([1, 10, 6, 4, 5]));
})()
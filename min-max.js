const arr = [7, 9, 1, 6, 5, 6, 11, 3, 10, 4, 8];

function minMax(stanga = 0, dreapta = arr.length - 1) {
  if (dreapta - stanga <= 1) {
    return [
      Math.min(arr[stanga], arr[dreapta]),
      Math.max(arr[stanga], arr[dreapta])
    ];
  } else {
    const mijloc = Math.floor((stanga + dreapta) / 2);
    const [minStanga, maxStanga] = minMax(stanga, mijloc);
    const [minDreapta, maxDreapta] = minMax(mijloc + 1, dreapta);

    return [
      Math.min(minStanga, minDreapta),
      Math.max(maxStanga, maxDreapta)
    ]
  }
}

console.log(minMax());

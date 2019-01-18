const arr = [0, 2, 3, 4, 10, 40, 44];

function cautareBinara(arr, x, stanga = 0, dreapta = arr.length - 1) {
  while (stanga <= dreapta) {
    const mijloc = (stanga + dreapta) / 2;

    if (arr[mijloc] === x) { // am gasit numarul
      return mijloc;
    }

    return arr[mijloc] < x
      ? cautareBinara(arr, x, mijloc + 1, dreapta) // cauta in dreapta
      : cautareBinara(arr, x, stanga, mijloc - 1); // cauta in stanga
  }

  return -1; // nu am gasit numarul
}

console.log(cautareBinara(arr, 5));
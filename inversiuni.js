let arr = [6, 10, 3, 2, 9, 7, 1, 4, 8, 5];

/**
 * @param {number[]} arr 
 * @param {number} stanga 
 * @param {number} dreapta 
 */
function numaraInversiuni(arr, stanga = 0, dreapta = arr.length - 1) {
  if (stanga === dreapta) {
    return 0;
  }

  const mijloc = Math.floor((stanga + dreapta) / 2);

  const inversiuniStanga = numaraInversiuni(arr, stanga, mijloc);
  const inversiuniDreapta = numaraInversiuni(arr, mijloc + 1, dreapta);

  const arrStanga = arr.slice(stanga, mijloc + 1);
  const arrDreapta = arr.slice(mijloc + 1, dreapta + 1);

  let inversiuni = 0;
  let arrSortat = []; // vectorul sortat (descrecator) de la stanga la dreapta + 1

  let i = 0, j = 0;
  while (i < arrStanga.length && j < arrDreapta.length) {
    if (arrDreapta[j] < arrStanga[i]) { // daca un element din dreapta e mai mic decat unul din stanga
      // avem inversiune
      arrSortat.push(arrStanga[i]);
      inversiuni += j; // numarul de valori din vectorul drept mai mici decat din vectorul stang
      i++;
    } else {
      arrSortat.push(arrDreapta[j]);
      j++;
    }
  }

  while (i < arrStanga.length) {
    arrSortat.push(arrStanga[i]);
    inversiuni += j; // numarul de valori din vectorul drept mai mici decat din vectorul stang
    i++;
  }

  while (j < arrDreapta.length) {
    arrSortat.push(arrDreapta[j]);
    j++;
  }

  for (let i = stanga; i <= dreapta; i++) { // ordonam (descrescator) elementele in vector
    arr[i] = arrSortat[i - stanga];
  }

  return inversiuni + inversiuniStanga + inversiuniDreapta;
}

console.log(numaraInversiuni(arr));
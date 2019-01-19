const arr = [6, 3, 5, 10, 12, 2, 9, 15, 14, 7, 4, 8, 13];
let lungimeSir = arr.map(elem => 1);
let succesor = arr.map(elem => arr.length);

let indexSirMaxim = arr.length - 1;

// parcurge vectorul de la final spre inceput
for (let i = arr.length - 2; i >= 0; i--) {
  // mergi spre finalul vectorului
  for (let j = i + 1; j < arr.length; j++) {
    // daca pot adauga elementul curent intr-un sir mai lung
    if (arr[i] < arr[j] && lungimeSir[j] + 1 > lungimeSir[i]) {
      // adauga elementul curent in sir
      lungimeSir[i] = lungimeSir[j] + 1;
      succesor[i] = j;
    }

    // daca sirul curent este mai lung decat sirul maxim
    if (lungimeSir[i] > lungimeSir[indexSirMaxim]) {
      // sirul curent devine sirul maxim
      indexSirMaxim = i;
    }
  }
}

let sirMaxim = [];
for (let i = indexSirMaxim; i < arr.length; i = succesor[i]) {
  sirMaxim.push(arr[i]);
}
console.log(sirMaxim);


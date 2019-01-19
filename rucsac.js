class Obiect {
  constructor(valueoare, greutate) {
    this.valueoare = valueoare;
    this.greutate = greutate;
  }
}

let obiecte = [
  new Obiect(60, 10),
  new Obiect(100, 20),
  new Obiect(120, 30),
];

(() => {
  const greutateMaxima = 50;
  let greutateCurenta = 0;
  let valueoareCurenta = 0;

  // sortez obiectele dupa raportul valueoare / greutate
  obiecte.sort((a, b) => a.valueoare / a.greutate - b.valueoare / b.greutate);

  // adaug obiectele pana am umplut rucsacul
  // sau pana nu mai am obiecte de adaugat
  for (let i = 0; greutateCurenta < greutateMaxima && i < obiecte.length; i++) {
    const obiectCurent = obiecte[i];

    // daca mai am loc adaug obiectul in sac 
    if (greutateCurenta + obiectCurent.greutate < greutateMaxima) {
      greutateCurenta += obiectCurent.greutate;
      valueoareCurenta += obiectCurent.valueoare;
    } else {
      // altfel il tai si adaug bucata taiata in sac
      const greutateRamasa = greutateMaxima - greutateCurenta;
      const fractieObiectCurent = greutateRamasa / obiectCurent.greutate;
      valueoareCurenta += obiectCurent.valueoare * fractieObiectCurent;
      greutateCurenta = greutateMaxima;
    }
  }
})();

knapSack(weight[], value[], n)
{
  let i, w;
  let K[n + 1][maxWeight + 1];

  // Build table K[][] in bottom up manner 
  for (i = 0; i <= n; i++) {
    for (w = 0; w <= maxWeight; w++) {
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      } else if (weight[i - 1] <= w) { // weight of the last item is less than the current weight / capacity of the snapsack
        K[i][w] = max(
          value[i - 1] + K[i - 1][w - weight[i - 1]], // item inicluded
          K[i - 1][w] // item NOT included
        );
      } else { // it's too heavy; do not add it
        K[i][w] = K[i - 1][w];
      }
    }
  }

  return K[n][maxWeight];
} 
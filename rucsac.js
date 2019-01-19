class Obiect {
  constructor(valoare, greutate) {
    this.valoare = valoare;
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
  let valoareCurenta = 0;

  // sortez obiectele dupa raportul valoare / greutate
  obiecte.sort((a, b) => a.valoare / a.greutate - b.valoare / b.greutate);

  // adaug obiectele pana am umplut rucsacul
  // sau pana nu mai am obiecte de adaugat
  for (let i = 0; greutateCurenta < greutateMaxima && i < obiecte.length; i++) {
    const obiectCurent = obiecte[i];

    // daca mai am loc adaug obiectul in sac 
    if (greutateCurenta + obiectCurent.greutate < greutateMaxima) {
      greutateCurenta += obiectCurent.greutate;
      valoareCurenta += obiectCurent.valoare;
    } else {
      // altfel il tai si adaug bucata taiata in sac
      const greutateRamasa = greutateMaxima - greutateCurenta;
      const fractieObiectCurent = greutateRamasa / obiectCurent.greutate;
      valoareCurenta += obiectCurent.valoare * fractieObiectCurent;
      greutateCurenta = greutateMaxima;
    }
  }
})();

knapSack(W, wt[], val[], n)
{
  let i, w;
  let K[n + 1][W + 1];

  // Build table K[][] in bottom up manner 
  for (i = 0; i <= n; i++) {
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0)
        K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else
        K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
} 
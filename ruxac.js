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
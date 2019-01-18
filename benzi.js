let texte = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipisicing',
];

let benzi = [
  [],
  [],
  [],
];

(() => {
  // se sorteaza crescator textele dupa lungime
  texte.sort((a, b) => a.length - b.length);

  // cat timp mai avem texte de adaugat
  while (texte[0]) {
    // primele `benzi.length` texte se adauga pe cate o banda
    for (let i = 0; texte[0] && i < benzi.length; i++) {
      benzi[i].push(texte.shift());
    }
  }

  console.log(benzi);
})();
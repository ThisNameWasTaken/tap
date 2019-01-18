import Heap from 'heap';

(() => {
  const arr = [7, 10, 4, 3, 20, 15]
  const k = 3;

  // retine toate elementele intr-un min-heap
  let heap = new Heap();
  arr.forEach(elem => heap.push(elem));

  // scoate minimul de k-ori
  for (let i = 1; i < k; i++) {
    heap.pop();
  }
  console.log(heap.pop());
})();
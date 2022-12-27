import Heap from '4_algorithms/9_heap/heap';

// === O(log(n))

export default function fnHeapSort(arr = [2, 8, 5, 3, 9, 1]) {
  const array = arr;
  const arrResult = [];

  // 1) create max-heap from array
  const heap = new Heap();

  for (let i = 0; i < array.length; i += 1) {
    heap.push(array[i]);
  }

  while (heap.size() > 0) {
    // 2) poll (delete heap root) until (heap) is empty
    const max = heap.poll();

    console.log(max);

    // 3) push (heap root) to (result array)
    arrResult.unshift(max);

    console.log('heap');
    console.log(heap);
    console.log('arrResult');
    console.log(arrResult);
    console.log('\n');
  }

  return arrResult;
}

const resHeapSort = fnHeapSort();
console.log(resHeapSort);

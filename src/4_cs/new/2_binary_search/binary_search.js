export function binarySearch(array = [1, 2, 3, 4, 5], target = 1) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = array[Math.floor((end - start) / 2 + start)];

    if (target < array[middle]) {
      end = middle - 1;
    } else if (target > array[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

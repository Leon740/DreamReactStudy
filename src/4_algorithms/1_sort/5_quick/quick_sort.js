function fnConcat(array1 = [1, 2, 3], array2 = [4, 5]) {
  const newArray = [...array1, ...array2];
  console.log(newArray);
  return newArray;
}
fnConcat();

function fnPush(array1 = [1, 2, 3], array2 = [4, 5]) {
  const newArray = fnConcat(array1, array2);
  const result = newArray.length;
  console.log(result);
  return result;
}
fnPush();

function fnPop(array = [1, 2, 3]) {
  const newArray = [...array];
  // eslint-disable-next-line operator-assignment
  newArray.length = newArray.length - 1;
  const result = array[array.length - 1];
  console.log(result);
  return result;
}
fnPop();

function fnFilter(array = [1, 2, 3], func = () => {}) {
  const newArray = [];

  for (let k = 0; k < array.length; k += 1) {
    if (func(array[k], k)) {
      newArray.push(array[k]);
    }
  }

  console.log(newArray);
  return newArray;
}
fnFilter([1, 2, 3], (_, index) => { console.log(index); return index > 0; });

function fnShift(array = [1, 2, 3]) {
  const newArray = fnFilter(array, (_, index) => index > 0);
  const result = fnFilter(array, (_, index) => index === 0);
  console.log(newArray);
  console.log(result);
  return result;
}
fnShift();

const contacts = new Map();
console.log(contacts);

const setFn = (map, key, value) => {
  if (map.has(key)) {
    map.get(key).push(value);
  } else {
    map.set(key, [value]);
  }

  return map;
};

console.log(setFn(contacts, 'Leonid', '215-987-7259'));
console.log(setFn(contacts, 'Leonid', '774-420-9593'));
console.log(contacts.get('Leonid'));
console.log(setFn(contacts, 'Roman', '215-602-1636'));
console.log(contacts.get('Roman'));
console.log(contacts.delete('Name'));

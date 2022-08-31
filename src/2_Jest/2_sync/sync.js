class Lodash {
  compact(array) {
    return array.filter((value) => !!value);
  }
}

module.exports = Lodash;

const objectConverter = {
  arrayToMap(array) {
    const arrayMap = new Map([]);
    array.forEach((el, i) => arrayMap.set(i, el));
    return arrayMap;
  },
  arrayToSet(array) {
    return new Set(array);
  },
  setToMap(set) {
    const setMap = new Map([]);
    Array.from(set).forEach((el, i) => setMap.set(i, el));
    return setMap;
  },
  setToArray(set) {
    return Array.from(set);
  },
  mapToArray(map) {
    const mapArray = [];
    map.forEach((values, keys) => mapArray.push(values));
    return mapArray;
  },
  mapToSet(map) {
    const setArray = [];
    map.forEach((values, keys) => setArray.push(values));
    return new Set(setArray);
  },
};

export default objectConverter;

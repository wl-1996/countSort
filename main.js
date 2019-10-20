//计数排序
let countSort = arr => {
  let hashTable = {},
    max = 0,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    //遍历数组
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1;
    } else {
      hashTable[arr[i]] += 1;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j <= max; j++) {
    //遍历哈希表
    if (j in hashTable) {
      for (let i = 0; i < hashTable[j]; j++) {
        result.push(j);
      }
    }
  }
  return result;
};

countSort([7, 9, 8, 5, 6, 4, 7, 8, 9, 22, 44, 88, 99, 55, 66, 22, 11, 33]);

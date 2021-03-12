// --------------------- Функция ищет уникальные numbers в полученном массиве и возвразаект новый массив уникальных значений --------------------------------
export type uniqueItemsInArrTSType = (arr: Array<number>) => Array<number>


const uniqueItemsInArr: uniqueItemsInArrTSType = (arr) => {                          // вернем массив с не повторяющимися значениями
  let result: Array<number> = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

export default uniqueItemsInArr;
// --------------------- Функция ищет уникальные numbers в полученном массиве и возвразаект новый массив уникальных значений --------------------------------

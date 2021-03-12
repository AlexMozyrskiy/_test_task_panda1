// ---------------------------------------------- Функция ищет подстроку в строке и возвращает объект ---------------------------------------
export type findASubstringInStringReturnedObjTStype = { isSearchValueFinded: boolean, startFoundIndexes: Array<number>, endFoundIndexes: Array<number> }
export type findASubstringInStringTSType = (str: string, searchValue:string) => findASubstringInStringReturnedObjTStype

const findASubstringInString: findASubstringInStringTSType = (str, searchValue) => {            // параметры: str - строка где будм искать, searchValue - подстрока которую будем искать
    const splitedStr = str.split("");                 // спитнем взодящую строку где будем искать
    const splitedSearchValue = searchValue.split(""); // сплитнем строку которую будем искать

    let returnedObj: findASubstringInStringReturnedObjTStype = {                               // объект который будем возвращать
        isSearchValueFinded: false,                     // если нашли искомую подстроку изменим на true
        startFoundIndexes: [],                          // индексы начальной будквы найденной подстроки в переданном массиве
        endFoundIndexes: []                              // индексы конечной будквы найденной подстроки в переданном массиве, будем использовать для подсветки найденного текста в UI
    };

    splitedStr.forEach((element, i) => {
        let slicedArr = splitedStr.slice(i, (splitedSearchValue.length + i));  // применим слайс для каждого элемента, чтобы получить массив такой же длины как и ищем, чтобы сравнить слайснутый массив и массив который ищем. первый аргумент в слыйс индекс цикла, чтобы слайсить начиная с каждого элемента массива, второй аргумент длина строки для поиска
        let joinedSlicedArr = slicedArr.length === 1 ? slicedArr : slicedArr.join("");                     // соединим слайснутый массив в строку для его сравнения со строкой которую ищем, если длина слайснутого массива == 1, то есть только начали цикл, вернем массив из 1 элемента , то есть 1 букву, если длина > 1 применим join

        if (joinedSlicedArr === searchValue) {                                                              // если строка слепленная из массива вырезанного из входящей строки длинной равной длине строки для поиска равно стрке поиска, то есть мы нашли нужную нам подсроку
            returnedObj = {                                                                                 // внесем в возвращаемый объект
                ...returnedObj,                                                                             // копию обекта, может там уже есть информация нужная нам, не перезаписываем имеющийся объект
                isSearchValueFinded: true,                                                                  // подстрока найдена. Если true уже записана перезаписывать не будем
                startFoundIndexes: [...returnedObj.startFoundIndexes, i],                                   // массив индексов начальной будквы найденной построки в переданном массиве
                endFoundIndexes: [...returnedObj.endFoundIndexes, (i + splitedSearchValue.length - 1)]      // массив индексов конечной будквы найденной построки в переданном массиве, будем использовать для подсветки найденного текста в UI
            }
        }
    });

    return returnedObj;
}

export default findASubstringInString;
// ---------------------------------------------- / Функция ищет подстроку в строке и возвращает объект -------------------------------------
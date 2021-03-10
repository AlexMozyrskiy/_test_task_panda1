// --------------------- Функция считает и количество квадратиков пагонации для отображения их на странице ----------------------
// возвращает массиа цифр для удобного из мапа на странице с пагонацией
export type GetPaginationSquaresArrayNumbersTSType = (
                                                commentsCount: number,                   // общее количество items в массиве комментариев
                                                itemsPerPage: number,                   // количество хаписчей на странице
                                                maxPaginationSquaresCount: number,      // максимальное количество квадратиков пагинации отображаемых на странице
                                                // currentPage: number,                    // текущая страница
                                                clickedPage: number,                    // кликнутая страница
                                                firstPaginationSquareNumber: number,    // цифра в первом квадратике пагинации отображенном на странице
                                                lastPaginationSquareNumber: number)     // цифра в последем квадратике пагинации отображенном на странице
                                                => Array<number>


const getPaginationSquaresArrayNumbers: GetPaginationSquaresArrayNumbersTSType = (
                                                                    commentsCount,
                                                                    itemsPerPage,
                                                                    maxPaginationSquaresCount,
                                                                    // currentPage,
                                                                    clickedPage,
                                                                    firstPaginationSquareNumber,
                                                                    lastPaginationSquareNumber) => {
    let paginationSquareArray: Array<number> = [];                                                         // массив из цифр который будем возвращать и мапить его настранице в квадратиках пагинации
    const totalCountPaginationSquares: number = Math.ceil(commentsCount / itemsPerPage);    // общее количество возможных отображаемых квадратиков

    if(clickedPage >= firstPaginationSquareNumber && clickedPage <= lastPaginationSquareNumber) {   //  если кликнутая странца находится в жиапазоне отображаемых квадратиков
        for(let i = firstPaginationSquareNumber; i <= lastPaginationSquareNumber; i++) {
            paginationSquareArray.push(i);
        }
    }

    if(clickedPage < firstPaginationSquareNumber) {                                                 //  если цифра в кликнутом квадратике меньше цифры в первом отображенном квадратике, первая цифра будет кликнутая, а последняя кликнутая плюс каунт максимального количества отобрадаемых квадратиков и минус 1
        for(let i = clickedPage; i <= (clickedPage + maxPaginationSquaresCount - 1); i++) {
            paginationSquareArray.push(i);
        }
    }

    if(clickedPage > lastPaginationSquareNumber) {                                                  //  если цифра в кликнутом квадратике больше цифры в последнем отображенном квадратике, первая цифра будет кликнутая минус каунт максимального количества отобрадаемых квадратиков и плюс 1, а последняя кликнутая
        for(let i = (clickedPage - maxPaginationSquaresCount + 1); i <= clickedPage; i++) {
            paginationSquareArray.push(i);
        }
    }

    if(clickedPage <= 0) {                                                                          // если цифра в кликнутом квадратике меньше 0
        for(let i = 0; i <= maxPaginationSquaresCount; i++) {
            paginationSquareArray.push(i);
        }
    }

    if(clickedPage > totalCountPaginationSquares) {                                                 // если цифра в кликнутом квадратике больше общего количества возможных квадратиков
        for(let i = (totalCountPaginationSquares - maxPaginationSquaresCount + 1); i <= totalCountPaginationSquares; i++) {
            paginationSquareArray.push(i);
        }
    }

    return paginationSquareArray;
}


export default getPaginationSquaresArrayNumbers;
// --------------------- / Функция считает и количество квадратиков пагонации для отображения их на странице --------------------
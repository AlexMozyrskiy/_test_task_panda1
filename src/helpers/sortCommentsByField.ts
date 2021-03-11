import { CommentTSType } from "../BLL/commonTSTypes"

// --------------------- Функция для сортировки массива объeктов по названию поля --------------------------------
type sortArrayOfObjectByFieldTSType = (arrayOfObjects: Array<CommentTSType>, sortByField: string, isSortAscending: boolean) => Array<CommentTSType>


const sortArrayOfObjectByFieldName: sortArrayOfObjectByFieldTSType = (arrayOfObjects, sortByField, isSortAscending) => {

    function byFieldAscending(field: string) {
        return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
    }

    function byFieldDescending(field: string) {
        return (a: any, b: any) => a[field] < b[field] ? 1 : -1;
    }

    let sortedArrayOfObject: Array<CommentTSType> =  isSortAscending ? arrayOfObjects.sort(byFieldAscending(sortByField)) : arrayOfObjects.sort(byFieldDescending(sortByField))

    return sortedArrayOfObject;
}
// --------------------- / Функция для сортировки массива объeктов по названию поля ------------------------------

export default sortArrayOfObjectByFieldName;

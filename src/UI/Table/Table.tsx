import React from "react";
import { PropsTSType } from "./TableTypeScriptTypes"
import { sortByEnum } from "./TableContainerTypeScriptTypes";


declare module "react" {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        border?: string
    }
}

const Table: React.FC<PropsTSType> = (props) => {

    return (
        <div className="container">

            <div className="users__pagination-wrapper">
                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем стрелку влево для пагинации на одну страницу назад */}
                {
                    props.currentPage === 1 ? null : <span className="users__pagination-single-span" onClick={() => props.onPaginationSquareClick(props.currentPage - 1)}>&larr;</span>
                }

                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем перед троеточием квадратик с цифрой 1 */}
                {
                    props.paginationSquareNumbers[0] === 1 ? null : <span className="users__pagination-single-span" onClick={() => props.onPaginationSquareClick(1)}>1</span>
                }

                { /* Если цифры в квадратиках пагинации начинаются не с 1 покажем троеточие */}
                {
                    props.paginationSquareNumbers[0] === 1 ? null : <span className="users__pagination-single-span">...</span>
                }

                { /* Мапим массив с цифрами для квадратиков */}
                {
                    props.paginationSquareNumbers.map(item => <span
                        key={item}
                        onClick={() => props.onPaginationSquareClick(item)}
                        className={`users__pagination-single-span ${item === props.currentPage ? "users__pagination-single-span_active" : null}`}>
                        {item}
                    </span>)
                }

                { /* Если это последний возможный квадратик покажем троеточие */}
                {
                    props.paginationSquareNumbers[(props.paginationSquareNumbers.length - 1)] === props.totalCountPaginationSquares ? null : <span className="users__pagination-single-span">...</span>
                }

                { /* Если это последний возможный квадратик покажем последний возможный квадратик для джампа на последнюю страницу */}
                {
                    props.paginationSquareNumbers[(props.paginationSquareNumbers.length - 1)] === props.totalCountPaginationSquares ? null : <span className="users__pagination-single-span" onClick={() => props.onPaginationSquareClick(props.totalCountPaginationSquares)}>{props.totalCountPaginationSquares}</span>
                }

                { /* Если это последний возможный квадратик стрелку вправо не покажем */}
                {
                    props.currentPage === props.totalCountPaginationSquares ? null : <span className="users__pagination-single-span" onClick={() => props.onPaginationSquareClick(props.currentPage + 1)}>&rarr;</span>
                }
            </div>

            <div className="filter">Поиск</div><input
                                                    value={props.searchFieldValue}
                                                    className="filter__input"
                                                    placeholder="Начните набирать чтобы искать"
                                                    onChange={(e) => props.onSearchFieldChange(e.target.value)}  
                                                />


            <table className="table" border="1">
                <caption>Fake comments. Кликните по заголовку колонки, чтобы отсортировать</caption>
                <tbody>
                    <tr>
                        <th onClick={() => props.onTableHeaderFieldСlick('postId')}>Post Id
                            {props.sortByField === "postId" ? props.getSortingArrowView(props.commentsSorted) : null}   { /* получим вид стрелки сортировки при клике на заголовок столбца */}
                        </th>
                        <th onClick={() => props.onTableHeaderFieldСlick('id')}>Comment Id
                            {props.sortByField === "id" ? props.getSortingArrowView(props.commentsSorted) : null}
                        </th>
                        <th onClick={() => props.onTableHeaderFieldСlick('name')}>Name
                            {props.sortByField === "name" ? props.getSortingArrowView(props.commentsSorted) : null}
                        </th>
                        <th onClick={() => props.onTableHeaderFieldСlick('email')}>Email
                            {props.sortByField === "email" ? props.getSortingArrowView(props.commentsSorted) : null}
                        </th>
                        <th onClick={() => props.onTableHeaderFieldСlick('body')}>Comment
                            {props.sortByField === "body" ? props.getSortingArrowView(props.commentsSorted) : null}
                        </th>
                    </tr>
                    {
                        props.currentPageComments.map(item => {
                            return <tr key={item.id}>
                                <td>{item.postId}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
import React from "react";
import { CommentTSType } from "../../BLL/commonTSTypes";
import { PropsTSType } from "./TableTypeScriptTypes"


declare module "react" {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        border?: string
    }
}

const Table: React.FC<PropsTSType> = (props) => {

    return (
        <div className="container">

            <div className="users__pagination-wrapper">
                <span className="users__pagination-single-span">&larr;</span>
                {/* <span className="users__pagination-single-span">...</span> */}
                {
                    props.paginationSquareNumbers.map( item => <span key={item} className={`users__pagination-single-span ${item === props.currentPage ? "users__pagination-single-span_active" : null}`}>{item}</span> )
                }
                {/* <span className="users__pagination-single-span">1</span> */}
                {/* <span className="users__pagination-single-span">2</span> */}
                <span className="users__pagination-single-span">&rarr;</span>
            </div>

            <div className="filter">Поиск</div><input className="filter__input" placeholder="Начните набирать чтобы искать" />


            <table className="table" border="1">
                <caption>Fake comments</caption>
                <tbody>
                    <tr>
                        <th>Post Id &#9650;</th>
                        <th>Comment Id &#9660;</th>
                        <th>Name &#9650;</th>
                        <th>Email &#9660;</th>
                        <th>Comment &#9660;</th>
                    </tr>
                    {
                        props.comments.map(item => {
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
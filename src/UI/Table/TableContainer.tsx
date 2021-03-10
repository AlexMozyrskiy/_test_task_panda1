import React, { useEffect } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType
} from "./TableContainerTypeScriptTypes";
import { RootStateTSType } from "../../BLL/redux/redux";
import { commentsThunkCreator } from "../../BLL/CommentsTable/thunkCreators";
import { connect } from "react-redux";
import { getCommentsSelector } from "../../BLL/CommentsTable/selectors";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, []);

    return <Table comments={props.comments} />
}


const mapStateToProps = (state: RootStateTSType) => {
    return {
        comments: getCommentsSelector(state)
    }
}

const mapDispatchToProps = {
    commentsThunkCreator
}

export default connect<MapStateToPropsTSType, MapDispatchToPropsTSType, OwnPropsTSType, RootStateTSType>(mapStateToProps, mapDispatchToProps)(TableContainer);;
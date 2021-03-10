import React, { useEffect } from "react";
import { connect } from "react-redux";
import './App.css';
import { commentsThunkCreator } from "./BLL/CommentsTable/thunkCreators";
// import { RootStateTSType } from "./BLL/redux/redux";

const App = (props) => {
  useEffect( () => {
    props.commentsThunkCreator()
  }, [] );
  
  return (
    <h1>Test</h1>
  );
}


const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {
  commentsThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
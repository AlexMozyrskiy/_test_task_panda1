import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import './App.css';
import { commentsThunkCreator } from "./BLL/CommentsTable/thunkCreators";
import Header from "./UI/Header/Header";
import TableContainer from "./UI/Table/TableContainer";
import TaskComments from "./UI/TaskComments/TaskComments";
import CV from "./UI/MyCV/CV";
import NotFound from "./UI/NotFound/NotFound";



const App = (props) => {
  useEffect( () => {
    props.commentsThunkCreator()
  }, [] );
  
  return (
  <>
    <Header />

    <Switch>
      <Route path='/task' render={() => <TableContainer />} />
      <Route path='/comments' render={() => <TaskComments />} />
      <Route path='/cv' render={() => <CV />} />
      <Route path='*' render={() => <NotFound />} />
    </Switch>

  </>);
}


const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {
  commentsThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
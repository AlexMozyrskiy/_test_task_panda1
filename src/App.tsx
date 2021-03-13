import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./UI/Header/Header";
import TableContainer from "./UI/Table/TableContainer";
import TaskComments from "./UI/TaskComments/TaskComments";
import CV from "./UI/MyCV/CV";
import NotFound from "./UI/NotFound/NotFound";



const App: React.FC = () => {
  
  return (
  <>
    <Header />

    <Switch>
      <Route exact path='/' render={() => <TableContainer />} />
      <Route path='/comments' render={() => <TaskComments />} />
      <Route path='/cv' render={() => <CV />} />
      <Route path='*' render={() => <NotFound />} />
    </Switch>

  </>);
}

export default App;
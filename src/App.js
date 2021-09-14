import React from "react";
import { Switch, Route } from "react-router-dom"

import Navigation from "./components/Navigation";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { TaskProvider } from "./context/TaskContext";

import "./tailwind.css";

function App() {
  return (
    <div  >

      <TaskProvider>
        <Navigation />
        <Switch>
          <Route path="/" component={TaskList} exact></Route>
          <Route path="/add" component={TaskForm}></Route>
          <Route path="/edit/:id" component={TaskForm}></Route>
        </Switch>
      </TaskProvider>

    </div>
  );
}

export default App;

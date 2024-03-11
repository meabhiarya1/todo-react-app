import React from "react";
import AllTodos from "../../Component/All Todos/AllTodos";
import CompletedTodos from "../../Component/Completed Todos/CompletedTodos";
import styles from "./Home.module.css";
import AddTodo from "../../Component/Add Todo/AddTodo";

const Home = () => {
  return (
    <>
      <div>
        <AddTodo />
      </div>
      <div className={styles.main}>
        <div>
          <AllTodos />
        </div>
        <div className={styles.completeTodos}>
          <CompletedTodos />
        </div>
      </div>
    </>
  );
};

export default Home;

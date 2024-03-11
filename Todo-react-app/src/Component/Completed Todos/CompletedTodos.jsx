import React, { useContext, useEffect } from "react";
import styles from "./CompletedTodos.module.css";
import ContextTodo from "../../Store/ContextTodo";
import CancelIcon from "@mui/icons-material/Cancel";
import { pink } from '@mui/material/colors';

const CompletedTodos = () => {
  const ctx = useContext(ContextTodo);

  const handleIcon = (id) => {
    ctx.notMarkCompleteData(id)
  };

  return (
    <div className={styles.parent}>
      <div className={styles.heading}>Todos Completed</div>
      {ctx.AllData.map((todo, index) => {
        if (todo.completed) {
          return (
            <div key={todo.id} className={styles.parentDiv}>
              <div className={styles.title}>
                {todo.id + 1}. {todo.title}
              </div>

              <div className={styles.inputDiv}>
                <CancelIcon onClick={() => handleIcon(todo.id)} sx={{ color: pink[500] }} className={styles.cancel} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CompletedTodos;

import React, { useContext, useEffect } from 'react';
import styles from "./CompletedTodos.module.css"
import ContextTodo from '../../Store/ContextTodo';

const CompletedTodos = () => {

  const ctx = useContext(ContextTodo);

  return (
    <div className={styles.parent}>
      <div className={styles.heading}>
        Todos Completed
      </div>
      {ctx.AllData.map((todo) => {
        if (todo.completed) {
          return (
          <div className={styles.parentDiv}>
            <div className={styles.title}>
              {todo.id}. {todo.title}
            </div>

            <div className={styles.inputDiv}>
              <input type='checkbox' onChange={() => { handleCheck(todo.id) }} name={todo.id} className={styles.todo__checkbox}>
              </input>
            </div>
          </div>
          )
        }
      })}
    </div>
  )
}

export default CompletedTodos

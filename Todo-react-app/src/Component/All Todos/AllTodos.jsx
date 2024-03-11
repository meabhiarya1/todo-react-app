import { useContext } from "react";
import ContextTodo from "../../Store/ContextTodo";
import styles from "./AllTodos.module.css";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AllTodos = () => {
  const ctx = useContext(ContextTodo);
    
  const handleCheck = (id) => {
    ctx.checkData(id);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>Todos</h4>
      {ctx.AllData.map((todo, index) => {
        if (!todo.completed) {
          return (
            <div key={todo.id} className={styles.todo}>
              <div className={styles.todoStart}>
                <span className={styles.todo__id}>{todo.id}.</span>
                <span className={styles.todo__title}>{todo.title}</span>
              </div>

              <div className={styles.todoDescription}>{todo.description}</div>

              <div className={styles.todoDate}>
                Deadline Date Task to be completed
              </div>
              <div className={styles.edit}>
                <EditIcon />
              </div>
              <div className={styles.todoEnd}>
                <CheckCircleIcon
                  onClick={() => {
                    handleCheck(todo.id);
                  }}
                  className={styles.todo__checkbox}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AllTodos;

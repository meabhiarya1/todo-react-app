import { useContext } from "react";
import ContextTodo from "../../Store/ContextTodo";
import styles from "./AllTodos.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import Modal from "../Modal/Modal";

const AllTodos = () => {
  const ctx = useContext(ContextTodo);

  const handleCheck = (id) => {
    ctx.markCompleteData(id);
  };

  const handleDelete = (id) => {
    ctx.deleteData(id);
  };

  const mappedData = ctx.AllData.map((todo, index) => {
    if (todo.completed === false) {
      return (
        <div key={todo.id} className={styles.todo}>
          <div className={styles.todoStart}>
            <span className={styles.todo__id}>{todo.id + 1}.</span>
            <span className={styles.todo__title}>{todo.title}</span>
          </div>

          <div className={styles.todoDescription}>{todo.description}</div>

          <div className={styles.todoDate}>{todo.date}</div>
          <div className={styles.allIcons}>
            <div className={styles.edit}>
<<<<<<< HEAD

=======
>>>>>>> 696aaa0ff082d00632c39e5fd9ea64749151cfab
              <Modal editTodoId={todo.id} />
            </div>
            <div className={styles.todoEnd}>
              <CheckCircleIcon
                onClick={() => {
                  handleCheck(todo.id);
                }}
                className={styles.todo__checkbox}
                color="success"
              />
            </div>
            <div className={styles.todoDelete}>
              <DeleteIcon
                sx={{ color: pink[500] }}
                onClick={() => {
                  handleDelete(todo.id);
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>Todos</h4>
      {ctx.AllData && mappedData}
    </div>
  );
};

export default AllTodos;

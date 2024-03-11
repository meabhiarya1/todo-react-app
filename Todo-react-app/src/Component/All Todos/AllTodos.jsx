import { useContext } from "react";
import ContextTodo from "../../Store/ContextTodo";
import styles from "./AllTodos.module.css";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

const AllTodos = () => {
  const ctx = useContext(ContextTodo);

  const handleCheck = (id) => {
    ctx.markCompleteData(id);
  };

  const handleEdit = (id) => {
    ctx.deleteData(id);
  };

  const handleDelete = (id) => {
    ctx.deleteData(id);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>Todos</h4>
      {console.log(ctx.AllData)}
      {ctx.AllData &&
        ctx.AllData.map((todo, index) => {
          if (!todo.completed) {
            return (
              <div key={todo.id} className={styles.todo}>
                <div className={styles.todoStart}>
                  <span className={styles.todo__id}>{todo.id}.</span>
                  <span className={styles.todo__title}>{todo.title}</span>
                </div>

                <div className={styles.todoDescription}>{todo.description}</div>

                <div className={styles.todoDate}>{todo.date}</div>
                <div className={styles.allIcons}>
                  <div className={styles.edit}>
                    <EditIcon
                      color="primary"
                      onClick={() => handleEdit(todo.id)}
                    />
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
        })}
    </div>
  );
};

export default AllTodos;

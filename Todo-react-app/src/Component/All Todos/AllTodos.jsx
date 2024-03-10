import { useContext } from 'react';
import ContextTodo from '../../Store/ContextTodo';
import styles from './AllTodos.module.css';

const AllTodos = () => {
    const ctx = useContext(ContextTodo);
    const handleCheck = (id) => {
        ctx.checkData(id);
    }

    return (
        <div className={styles.container}>
            <h4 className={styles.h4}>Todos</h4>
            {ctx.AllData.map((todo, index) => {
                return (
                    <div key={todo.id} className={styles.todo}>
                        <div className={styles.todoStart}>
                            <span className={styles.todo__id}>{todo.id}.</span>
                            <span className={styles.todo__title}>{todo.title}</span>
                        </div>

                        <div className={styles.todoDescription}>
                            {todo.description}
                        </div>

                        <div className={styles.todoDate}>
                            Deadline Date Task to be completed
                        </div>

                        <div className={styles.todoEnd}>
                            <span><input type='checkbox' onChange={() => { handleCheck(todo.id) }} name={todo.id} className={styles.todo__checkbox}></input>
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default AllTodos;

import React from 'react';
import AllTodos from '../../Component/All Todos/AllTodos';
import CompletedTodos from '../../Component/Completed Todos/CompletedTodos';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <AllTodos />
        </div>

        <div className={styles.completeTodos}>
          <CompletedTodos />
        </div>

        {/* <div>
            <input type='date'></input>
        </div> */}
      </div>
    </>
  );
}

export default Home;

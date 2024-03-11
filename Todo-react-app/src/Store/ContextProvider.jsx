import React, { useState } from "react";
import ContextTodo from "./ContextTodo";

const ContextProvider = (props) => {
  const initialData = [
    {
      id: 0,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruits",
      completed: false,
    },
    {
      id: 1,
      title: "Finish report",
      description:
        "Complete the sales report for Q1 Complete the sales report for Q1 Complete the sales report for Q1",
      completed: false,
    },
    {
      id: 2,
      title: "Call mom",
      description: "Wish her a happy birthday",
      completed: false,
    },
    {
      id: 3,
      title: "Go to the gym",
      description: "Do cardio and strength training",
      completed: false,
    },
  ];

  // const initialData = [];

  const [data, setData] = useState(initialData);

  const addData = (todo) => {
    setData((prev) => {
      return [...prev, todo];
    });
  };

  const markCompleteData = (id) => {
    let newData = [...data];
    newData.filter((todo, index) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return (todo.completed = true);
      }
    });
    setData(newData);
  };

  const notMarkCompleteData = (id) => {
    let newData = [...data];

    if (newData[id]) {
      newData[id].completed = false;
      console.log(newData)
      setData(newData);
    } else {
      const copyState=[]

      setData([initialData[id]]);
      
    }

    // if (newData.length > 0) {

    // } else {
    // newData[id].completed = false;
    // setData(newData);
    console.log(data);
    // }
    //
    // console.log(data);
  };

  const deleteData = (id) => {
    const newData = data.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setData(newData);
  };

  const createData = {
    AllData: data,
    addData: addData,
    deleteData: deleteData,
    markCompleteData: markCompleteData,
    notMarkCompleteData: notMarkCompleteData,
  };

  return (
    <ContextTodo.Provider value={createData}>
      {props.children}
    </ContextTodo.Provider>
  );
};

export default ContextProvider;

import React, { useState } from "react";
import ContextTodo from "./ContextTodo";
import EditModal from "../Component/Edit Modal/EditModal";

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

  const [data, setData] = useState(initialData);
  const [editTodo, setEditTodo] = useState([]);

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
    const index = newData.findIndex((item) => {
      return item.id === id;
    })
    if (newData[index]) {
      newData[index].completed = false;
      setData((prev) => {
        return prev = newData;
      });
    }
  };

  const deleteData = (id) => {
    const newData = data.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setData(newData);
  };

  const modifyDataHandler = (id, todo) => {
    const { title, desc } = todo;
    // console.log(id, todo);
    const copiedData = [...data];

    const index = copiedData.findIndex((item) => item.id === id);
    copiedData[index].title = title;
    copiedData[index].description = desc;
    setData(copiedData)

  }

  const createData = {
    AllData: data,
    addData: addData,
    deleteData: deleteData,
    markCompleteData: markCompleteData,
    notMarkCompleteData: notMarkCompleteData,
    modifyData: modifyDataHandler
  };

  return (
    <ContextTodo.Provider value={createData}>
      {props.children}
    </ContextTodo.Provider>
  );
};

export default ContextProvider;

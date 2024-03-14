import React, { useReducer, useState } from "react";
import ContextTodo from "./ContextTodo";


const initialState = [
  {
    id: 0,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruits",
    date: "",
    completed: false,
  },
  {
    id: 1,
    title: "Finish report",
    description:
      "Complete the sales report for Q1 Complete the sales report for Q1 Complete the sales report for Q1",
    date: "",
    completed: false,
  },
  {
    id: 2,
    title: "Call mom",
    description: "Wish her a happy birthday",
    date: "",
    completed: false,
  },
  {
    id: 3,
    title: "Go to the gym",
    description: "Do cardio and strength training",
    date: "",
    completed: false,
  },
];

const reducerFn = (state, action) => {

  if (action.type == "addTodo") {
    return [...state, action.payload];
  }

  if (action.type == "markComplete") {
    let newData = [...state];
    return newData.filter((todo, index) => {
      if (todo.id !== action.payload) {
        return todo;
      } else {
        return (todo.completed = true);
      }
    });
  }

  if (action.type == "notMarkComplete") {
    let newData = [...state];
    const index = newData.findIndex((item) => {
      return item.id === action.payload;
    });
    if (newData[index]) {
      newData[index].completed = false;
      return newData;
    }
  }

  if (action.type == "delete") {
    const newData = state.filter((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      }
    });
    return newData;
  }
}

const ContextProvider = (props) => {
  // const initialData = [
  //   {
  //     id: 0,
  //     title: "Buy groceries",
  //     description: "Milk, eggs, bread, and fruits",
  //     date: "",
  //     completed: false,
  //   },
  //   {
  //     id: 1,
  //     title: "Finish report",
  //     description:
  //       "Complete the sales report for Q1 Complete the sales report for Q1 Complete the sales report for Q1",
  //     date: "",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Call mom",
  //     description: "Wish her a happy birthday",
  //     date: "",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Go to the gym",
  //     description: "Do cardio and strength training",
  //     date: "",
  //     completed: false,
  //   },
  // ];

  const [CurrentState, dispatch] = useReducer(reducerFn, initialState);
  console.log(CurrentState)

  const addData = (todo) => {
    dispatch({ type: "addTodo", payload: todo })
  };

  const markCompleteData = (id) => {
    dispatch({ type: "markComplete", payload: id })
  };

  const notMarkCompleteData = (id) => {
    dispatch({ type: "notMarkComplete", payload: id })
  };

  const deleteData = (id) => {
    dispatch({ type: "delete", payload: id })
  };

  const modifyDataHandler = (id, todo) => {
    const { title, desc, date } = todo;
    // console.log(id, todo);
    const copiedData = [...data];

    const index = copiedData.findIndex((item) => item.id === id);
    copiedData[index].title = title;
    copiedData[index].description = desc;
    copiedData[index].date = date;
    setData(copiedData);
  };

  const createData = {
    AllData: CurrentState,
    addData: addData,
    deleteData: deleteData,
    markCompleteData: markCompleteData,
    notMarkCompleteData: notMarkCompleteData,
    modifyData: modifyDataHandler,
  };

  return (
    <ContextTodo.Provider value={createData}>
      {props.children}
    </ContextTodo.Provider>
  );
};

export default ContextProvider;

import { createContext } from "react";

const ContextTodo = createContext({
  AllData: [],
  addData: () => { },
  checkData: () => { },
  deleteData: () => { },
  markCompleteData: () => { },
  notMarkCompleteData: () => { },
  modifyData: () => { },
});

export default ContextTodo;

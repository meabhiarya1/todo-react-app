import { createContext } from "react";

const ContextTodo = createContext({
  AllData: [],
  addData: () => { },
  checkData: () => { },
  deleteData: () => { },
  markCompleteData: () => { },
  notMarkCompleteData: () => { },
  editData: () => { }
});

export default ContextTodo;

import { createContext } from "react";

const ContextTodo = createContext({
    AllData: [],
    addData: () => { },
    checkData: () => { }
})

export default ContextTodo;
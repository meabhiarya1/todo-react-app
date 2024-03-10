import React, { useState } from 'react'
import ContextTodo from './ContextTodo'

const ContextProvider = (props) => {

    const initialData = [
        {
            "id": 1,
            "title": "Buy groceries",
            "description": "Milk, eggs, bread, and fruits",
            "completed": false
        },
        {
            "id": 2,
            "title": "Finish report",
            "description": "Complete the sales report for Q1",
            "completed": false
        },
        {
            "id": 3,
            "title": "Call mom",
            "description": "Wish her a happy birthday",
            "completed": false
        },
        {
            "id": 4,
            "title": "Go to the gym",
            "description": "Do cardio and strength training",
            "completed": false
        }
    ]
    const [data, setData] = useState(initialData);

    const addData = (todo) => {
        setData((prev) => {
            return [...prev, todo]
        })
    }

    const checkData = (id) => {
        let newData = data;
        newData[id - 1].completed = true;
        setData(newData)
    }

    const createData = {
        AllData: data,
        addData: addData,
        checkData: checkData,
    }

    return (
        <ContextTodo.Provider value={createData}>
            {props.children}
        </ContextTodo.Provider>
    )
}

export default ContextProvider;

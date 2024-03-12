import React, { useContext } from 'react'
import ContextTodo from '../../Store/ContextTodo';

const EditModal = () => {
    const ctx = useContext(ContextTodo)
    console.log("hello");
    console.log(ctx.editTodo)
    return (<div>
        {ctx.editTodo}
    </div>)
}

export default EditModal;

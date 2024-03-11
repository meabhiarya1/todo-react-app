import React, { useContext, useRef } from "react";
import ContextTodo from "../../Store/ContextTodo";

const AddTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const ctx = useContext(ContextTodo);

  const handleSubmit = () => {
    const idNext = ctx.AllData.map((todo) => {
      return todo.length;
    });
    // console.log(titleRef.current.value, descriptionRef.current.value, dateRef.current.value)
    let todo = {
      id: idNext.length,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      completed: false,
    };
    ctx.addData(todo);
    (titleRef.current.value = ""),
    (descriptionRef.current.value = "")
    // (dateRef.current.value = 0);
  };

  return (
    <>
      <div className="my-5">
        <button
          type="button"
          className="btn btn-primary p-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Todo
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Todo Here...
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Enter Title Here"
                  ref={titleRef}
                ></input>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Enter Description Here"
                  ref={descriptionRef}
                ></input>
              </div>

              <div className="modal-body">
                <label className="mx-3 ">Date to be Completed: </label>
                <input
                  type="date"
                  className="p-2 rounded-pill"
                  ref={dateRef}
                ></input>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;

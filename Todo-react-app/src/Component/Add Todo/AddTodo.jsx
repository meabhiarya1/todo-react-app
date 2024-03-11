import React, { useContext, useRef } from "react";
import ContextTodo from "../../Store/ContextTodo";

const AddTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const ctx = useContext(ContextTodo);

  const handleSubmit = () => {
    // console.log(titleRef.current.value, descriptionRef.current.value, dateRef.current.value)
 
  };

  return (
    <>
      <div class="my-5">
        <button
          type="button"
          class="btn btn-primary p-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Todo
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Todo Here
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Enter Title Here"
                  ref={titleRef}
                ></input>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Enter Description Here"
                  ref={descriptionRef}
                ></input>
              </div>

              <div class="modal-body">
                <label class="mx-3 ">Date to be Completed: </label>
                <input
                  type="date"
                  class="p-2 rounded-pill"
                  ref={dateRef}
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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

import React from "react";

export default function TodoForm({
  isToggleClicked,
  headlineBorder,
  headlineError,
  descriptionError,
  descInputBorderColor,
  todoHeadline,
  todoDescription,
  setTodoHeadline,
  setTodoDescription,
  clearField,
  addTask,
  updateTask,
  isEditTaskClicked,
}) {
  return (
    <>
      <div
        className={`border rounded p-4 ${
          isToggleClicked ? "border-secondary" : ""
        }`}
      >
        <div class="mb-3 row">
          <label
            for={`${
              isToggleClicked ? "headlineInputDark" : "headlineInputLight"
            }`}
            className={`col-6 fw-bold form-label text-start ${
              isToggleClicked ? "text-info" : "text-primary"
            }`}
          >
            Task headline
          </label>
          <span className={`col-6 text-end text-danger`}>{headlineError}</span>
          <input
            type="text"
            id={`${
              isToggleClicked ? "headlineInputDark" : "headlineInputLight"
            }`}
            placeholder="write your task headline..."
            class="form-control"
            className={`form-control input border-secondary ${headlineBorder} ${
              isToggleClicked ? "bg-dark text-light " : "bg-light text-dark"
            } `}
            value={todoHeadline}
            onChange={(e) => setTodoHeadline(e.target.value)}
          />
        </div>
        <div class="mb-3 row">
          <label
            for={`${
              isToggleClicked ? "descriptionInputDark" : "descriptionInputLight"
            }`}
            className={`col-6 fw-bold form-label ${
              isToggleClicked ? "text-info" : "text-primary"
            }`}
          >
            Task Description
          </label>
          <span className={`col-6 text-end text-danger`}>
            {descriptionError}
          </span>
          <textarea
            placeholder="write your task decsciption..."
            className={`form-control border-secondary ${descInputBorderColor} ${
              isToggleClicked ? " bg-dark text-light" : "bg-light text-dark"
            }`}
            id={`${
              isToggleClicked ? "descriptionInputDark" : "descriptionInputLight"
            }`}
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </div>

        <div className="row text-center">
          <span className="col-4">
            <button
              className={`w-75 btn btn-outline-info ${
                isToggleClicked ? "text-light" : "text-dark"
              }`}
              onClick={() => clearField()}
            >
              Clear
            </button>
          </span>
          <span className="col-8">
            {!isEditTaskClicked ? (
              <button
                type="button"
                onClick={() => addTask(todoHeadline, todoDescription)}
                className={`btn w-100 text-light btn-success`}
              >
                Add Task
              </button>
            ) : (
              <button
                type="button"
                onClick={() => updateTask(todoHeadline, todoDescription)}
                className={`btn w-100 text-light btn-primary`}
              >
                Update Task
              </button>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

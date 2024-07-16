import React from "react";
import Todo from "./Todo";

export default function TodoList({
  isToggleClicked,
  isEditTaskClicked,
  todos,
  setEditDeleteMsg,
  editedTodoId,
  deleteTask,
  editDeleteMsg,
  editTask,
}) {
  return (
    <>
      <div>
        <div>
          {todos && todos.length > 0 && (
            <div>
              <div class="row mt-2 pt-2 justify-content-start">
                <div
                  className={`col-6 fs-3 ${
                    isToggleClicked ? "text-light" : "text-dark"
                  }`}
                >
                  Tasks
                </div>
                <hr
                  className={`${isToggleClicked ? "text-light" : "text-dark"}`}
                />
              </div>

              <table
                className={`table ${
                  isToggleClicked ? "table-dark" : "table-light"
                }`}
              >
                <thead>
                  <tr className="row">
                    {/* <th
                    scope="col"
                    className={`${
                      isToggleClicked ? "text-info" : "text-primary"
                    }`}
                  >
                    #
                  </th> */}
                    <th
                      scope="col"
                      className={`col-4 ${
                        isToggleClicked ? "text-info" : "text-primary"
                      }`}
                    >
                      Headline
                    </th>
                    <th
                      scope="col"
                      className={`col-4 text-start ${
                        isToggleClicked ? "text-info" : "text-primary"
                      }`}
                    >
                      Description
                    </th>
                    <th scope="col" className={`col-4 text-start text-danger`}>
                      Edit/Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <Todo
                      isToggleClicked={isToggleClicked}
                      isEditTaskClicked={isEditTaskClicked}
                      todo={todo}
                      editTask={editTask}
                      deleteTask={deleteTask}
                      editDeleteMsg={editDeleteMsg}
                      setEditDeleteMsg={setEditDeleteMsg}
                      editedTodoId={editedTodoId}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

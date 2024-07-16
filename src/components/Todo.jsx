import React from "react";

export default function Todo({
  isToggleClicked,
  isEditTaskClicked,
  todo,
  editTask,
  deleteTask,
  editDeleteMsg,
  setEditDeleteMsg,
  editedTodoId,
}) {
  return (
    <>
      <tr className="row">
        {/* <td scope="row">{todo.id}</td> */}
        <td className="col-4">{todo.headline}</td>
        <td className="col-4">{todo.description}</td>

        <td className="col-4 p-2">
          <span className="text-start">
            {/* <Tooltip anchorSelect=".edit-desc" place="top">
                            Edit Description
                          </Tooltip> */}
            <a className="edit-desc">
              <button
                id="edit-btn"
                type="button"
                onClick={() => editTask(todo)}
                className={`btn ${
                  isToggleClicked
                    ? "text-light btn-outline-success "
                    : "text-dark btn-outline-info"
                }`}
              >
                {isEditTaskClicked && editedTodoId === todo.id ? (
                  <span
                    id="edit-cancel"
                    className="text-danger"
                    style={{ fontSize: "12px" }}
                  >
                    Cancel
                  </span>
                ) : (
                  <span id="edit">Edit</span>
                )}
              </button>
            </a>
          </span>
          {/* <Tooltip anchorSelect=".delete" place="top">
                        Delete Task
                      </Tooltip> */}

          <span className="text-end mx-1">
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              onClick={() =>
                setEditDeleteMsg(
                  isEditTaskClicked && editedTodoId === todo.id
                    ? "This task is under edit, can't delete !"
                    : ""
                )
              }
              data-target={`#${todo.id}`}
            >
              &#10007;
            </button>

            <div
              class="modal fade"
              id={todo.id}
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div
                    className={`modal-body ${
                      isToggleClicked
                        ? "bg-dark text-light"
                        : "bg-light text-dark"
                    }`}
                  >
                    <h5>Are your sure ?</h5>
                    <h6 className="text-danger">{editDeleteMsg}</h6>
                  </div>
                  <div
                    className={`modal-footer ${
                      isToggleClicked ? "bg-dark" : "bg-light"
                    }`}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => setEditDeleteMsg("")}
                    >
                      No, Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={editDeleteMsg.length !== 0}
                      data-dismiss="modal"
                      onClick={() => deleteTask(todo.id)}
                    >
                      Yes, Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </span>
          {/* <a className="delete">
                        <button
                          type="button"
                          onClick={() => deleteTask(todo.id)}
                          className="btn btn-danger px-2"
                        >
                          &#9003;
                        </button>
                      </a> */}
        </td>
      </tr>
    </>
  );
}

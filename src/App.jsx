import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoHeadline, setTodoHeadline] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [todos, setTodos] = useState([]);

  const [id, setId] = useState(0);

  const [actionMessage, setActionMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [headlineError, setHeadlineError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [editedTodoId, setEditedTodoId] = useState(0);

  const [isEditTaskClicked, setIsEditTaskClicked] = useState(false);
  const [isEditHeadlineClicked, setIsEditHeadlineClicked] = useState(false);
  const [editedHeadline, setEditedHeadline] = useState(todoHeadline);

  const [isEditDescriptionClicked, setIsEditDescriptionClicked] =
    useState(false);
  const [editedDescription, setEditedDescription] = useState(todoDescription);

  const [myName, setMyname] = useState("Developer : Sagar Ghumare");

  const [isToggleClicked, setIsToggleClicked] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMyname("");
  //   }, 2000);
  // }, []);
  const [headlineBorder, setHeadlineBorder] = useState("");
  const [descInputBorderColor, setDescInputBorderColor] = useState("");
  function addTask(headline, description) {
    if (headline == "" || description == "") {
      if (description == "") {
        setDescriptionError("Empty Description !");
        setDescInputBorderColor("border-danger");
      } else {
        setDescriptionError("");
        setDescInputBorderColor("");
      }
      if (headline == "") {
        setHeadlineError("Empty Headline !");
        setHeadlineBorder("border-danger");
      } else {
        setHeadlineError("");
        setHeadlineBorder("");
      }
    } else {
      setDescInputBorderColor("");
      setHeadlineBorder("");
      setActionMessage("Task Added !!!");
      setId(id + 1);
      const newTask = {
        id,
        headline,
        description,
      };
      setTodos([newTask, ...todos]);
      setHeadlineError("");
      setDescriptionError("");
      setMsgColor("green");
      setTimeout(() => {
        setActionMessage("");
      }, 2000);
      clearField();
    }
    // setTimeout(() => {
    //   setHeadlineError("");
    //   setDescriptionError("");
    // }, 2000);
  }

  const [editDeleteMsg, setEditDeleteMsg] = useState("");

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    setActionMessage("Task Deleted !!!");
    setMsgColor("red");
    setTimeout(() => {
      setActionMessage("");
    }, 3000);
  }

  function editTask(todo) {
    setTodoHeadline(todo.headline);
    setTodoDescription(todo.description);
    setEditedTodoId(todo.id);
    setIsEditTaskClicked(!isEditTaskClicked);

    setHeadlineError("");
    setHeadlineBorder("");
    setDescriptionError("");
    setDescInputBorderColor("");

    if (isEditTaskClicked) {
      clearField();
    }

    if (!document.getElementById("edit-cancel")) {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
      setHeadlineBorder("border-info");
      setDescInputBorderColor("border-info");
    }
  }

  function updateTask(headline, description) {
    let index = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == editedTodoId) {
        break;
      }
      index = index + 1;
    }

    console.log("index :" + index);

    todos[index].headline = headline;
    todos[index].description = description;
    setTodos(todos);

    setMsgColor("blue");
    setActionMessage("Task Updated !!!");
    setTimeout(() => {
      setActionMessage("");
    }, 3000);
    clearField();
    setIsEditTaskClicked(false);
    setHeadlineBorder("");
    setDescInputBorderColor("");
  }

  let toggleButtonColor = "btn-dark";
  if (isToggleClicked) {
    toggleButtonColor = "btn-light text-dark";
    document.body.style.backgroundColor = "black";
  } else {
    toggleButtonColor = "btn-dark";
    document.body.style.backgroundColor = "white";
  }

  function clearField() {
    setTodoHeadline("");
    setTodoDescription("");
  }
  return (
    <>
      <div className="container p-2">
        <TodoHeader
          isToggleClicked={isToggleClicked}
          setIsToggleClicked={setIsToggleClicked}
        />

        <div>
          <TodoForm
            isToggleClicked={isToggleClicked}
            headlineBorder={headlineBorder}
            headlineError={headlineError}
            descriptionError={descriptionError}
            descInputBorderColor={descInputBorderColor}
            todoHeadline={todoHeadline}
            todoDescription={todoDescription}
            setTodoHeadline={setTodoHeadline}
            setTodoDescription={setTodoDescription}
            clearField={clearField}
            addTask={addTask}
            updateTask={updateTask}
            isEditTaskClicked={isEditTaskClicked}
          />

          <div className="text-center p-2" style={{ color: msgColor }}>
            {actionMessage}
          </div>

          <TodoList
            isToggleClicked={isToggleClicked}
            isEditTaskClicked={isEditTaskClicked}
            todos={todos}
            setEditDeleteMsg={setEditDeleteMsg}
            editedTodoId={editedTodoId}
            deleteTask={deleteTask}
            editDeleteMsg={editDeleteMsg}
            editTask={editTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;

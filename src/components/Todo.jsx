import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const handleAddTodo = () => {
    dispatch(addTodo(inputData));
    setInputData("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };

  return (
    <>
      <div className="main-div">
        <h1>TODO LIST ASSIGNMENT, QUAD'B TECH</h1>
        <div className="child-div">
          <figure>
            <figcaption className="heading">Add Your List Here! ✌️</figcaption>
          </figure>

          <div className="addItems">
            <input
              className="input"
              type="text"
              value={inputData}
              placeholder="✍️ Add Items.. "
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={handleAddTodo}></i>
          </div>

          <div className="show-items">
            {list.map((elem) => (
              <div className="eachItems" key={elem.id}>
                <div className="input2">{elem.data}</div>
                <i
                  className="far fa-trash-alt del-btn"
                  title="Delete Item"
                  onClick={() => handleDeleteTodo(elem.id)}
                ></i>
              </div>
            ))}
          </div>

          <div className="deleteAll">
            {list.length === 0 ? (
              <button
                className="btn effect04 removeall"
                onClick={handleRemoveAll}
              >
                <span>Check List</span>
              </button>
            ) : (
              <button
                className="btn effect04 removeall"
                onClick={handleRemoveAll}
              >
                <span>Remove All</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;

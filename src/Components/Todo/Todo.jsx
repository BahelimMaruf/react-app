import React, { useEffect, useState } from "react";
import "./Todo.css";
import { v4 as uuid } from "uuid";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edittodos, setEdittodos] = useState("");

  const deleteTask = ({id}) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const edittask = ({id}) =>{
    setEdittodos(todos.find((todo) => todo.id === id))
  }

  const updateTodos = (title, id) =>{
    const newTodo = todos.map((todo)=>
      todo.id === id ? {title, id} : todo
    )
    setTodos(newTodo)
    setEdittodos("")
  }

  useEffect(() => {
    if (edittodos) {
      setInput(edittodos.title);
    } else {
      setInput("");
    }
  }, [setInput, edittodos]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!edittodos) {
      setTodos([...todos, {id: uuid(), title: input }]);
      setInput("");
    } else {
      updateTodos(input, edittodos.id);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='header'>
            <h1>Todo List</h1>
          </div>

          <form onSubmit={onFormSubmit}>
            <input
              className='task-input'
              type='text'
              placeholder='Enter Todo...'
              value={input}
              onChange={(e)=>{setInput(e.target.value)}}
              required
            />

            <button
              className='btn btn-primary'
              type='submit'
              style={{
                width: "100px",
                height: "60px",
                marginTop: "0",
                backgroundColor: "lightblue",
                color: "black",
                textTransform: "capitalize",
                marginLeft: "-15px",
              }}>
              Add
            </button>
          </form>

          {todos.map((todo) => (
            <li className='list-item' key={todo.id}>
              <input
                type='text'
                value={todo.title}
                className='list'
                onChange={(e) => e.preventDefault()}
              />
              <div>
                <button
                  onClick={() => edittask(todo)}
                  className='button-edit task-button'
                  style={{
                    width: "20px",
                    marginLeft: "10%",
                    marginTop: "-58px",
                    position: "fixed",
                  }}>
                  <EditOutlined />
                </button>
                <button
                  onClick={() => deleteTask(todo)}
                  className='button-delete task-button'
                  style={{
                    width: "20px",
                    marginLeft: "14%",
                    marginTop: "-58px",
                    position: "fixed",
                  }}>
                  <DeleteOutlined />
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;

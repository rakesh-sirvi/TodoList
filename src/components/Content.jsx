import React, { useEffect, useState } from "react";
import "../styles/Content.css";

export default function Content() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState({ value: false, id: undefined });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="content">
      <div className="add-todo">
        <label htmlFor="addTodo">Add Todo</label>
        <div>
          <input
            id="addTodo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn btn-add"
            onClick={() => {
              if (value) {
                setTodos((prev) => [
                  ...prev,
                  { todo: value, date: new Date(), complete: false },
                ]);
                setValue("");
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="todos">
        {todos.map((todo, idx) => (
          <div className="todo" key={`todo-${idx + 1}`}>
            <button
              className="btn"
              onClick={() =>
                setTodos((prev) =>
                  prev.map((it, id) =>
                    id === idx ? { ...it, complete: !it.complete } : it
                  )
                )
              }
            >
              {todo.complete ? <span>&#9745;</span> : <span>&#9744;</span>}
            </button>
            {edit.id === idx && edit.value ? (
              <>
                <input
                  className="edit-todo"
                  defaultValue={text ? text : todo.todo}
                  onChange={(e) => setText(e.target.value)}
                />
                <button
                  className="btn"
                  onClick={() => {
                    setEdit({ value: false, id: undefined });
                    if (text) {
                      setTodos((prev) =>
                        prev.map((it, id) =>
                          id === idx ? { ...it, todo: text } : it
                        )
                      );
                      setText("");
                    }
                  }}
                >
                  <span>&#10148;</span>
                </button>
              </>
            ) : (
              <>
                <div
                  className="text"
                  style={{
                    textDecorationLine: todo.complete && "line-through",
                  }}
                >
                  {todo.todo}
                </div>
                <button
                  className="btn"
                  onClick={() => setEdit({ value: true, id: idx })}
                >
                  <span>&#9998;</span>
                </button>
              </>
            )}

            <button
              className="btn btn-del"
              onClick={() =>
                setTodos((prev) => prev.filter((_, id) => id !== idx))
              }
            >
              <span>&#10008;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

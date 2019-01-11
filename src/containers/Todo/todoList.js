import React from "react";
import PropTypes from "prop-types";

const todoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div style={{ width: "100%" }}>
      {todos.map(x => (
        <div
          key={x.id}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <input
            type="checkbox"
            checked={x.isDone}
            onChange={() => completeTodo(x.id)}
          />
          <h3
            style={{
              display: "flex",
              flex: 1,
              textDecoration: x.isDone ? "line-through" : "none"
            }}
          >
            {x.text}
          </h3>
          <input
            type="button"
            value="Delete"
            onClick={() => deleteTodo(x.id)}
          />
        </div>
      ))}
    </div>
  );
};

todoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default todoList;

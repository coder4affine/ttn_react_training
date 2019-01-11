import React from "react";
import PropTypes from "prop-types";

const todoForm = ({ todo, addTodo, onChangeText }) => {
  return (
    <form onSubmit={addTodo}>
      <div>
        <input
          type="text"
          name="todo"
          placeholder="Todo"
          value={todo}
          onChange={onChangeText}
        />
        <input type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

todoForm.propTypes = {
  todo: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired
};

export default todoForm;

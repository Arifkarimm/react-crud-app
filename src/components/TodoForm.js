import React from 'react';

const TodoForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form-handle">
      <input type="text" name="inputText" placeholder="Insert Inpute value" />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default TodoForm;

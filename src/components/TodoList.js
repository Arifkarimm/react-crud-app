import React from 'react';

const TodoList = ({
  entries,
  onHandleDelete,
  onHandleEdit,
  onCompleteHandle
}) => {
  return (
    <ul>
      {entries.map(item => (
        <li key={item.id} className={item.done ? 'done' : 'hidden'}>
          {item.title}
          <button
            type="button"
            onClick={() => onHandleEdit(item.id, item.title)}
          >
            Edit
          </button>
          <button type="button" onClick={() => onHandleDelete(item.id)}>
            Delete
          </button>
          <button type="button" onClick={() => onCompleteHandle(item.id)}>
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

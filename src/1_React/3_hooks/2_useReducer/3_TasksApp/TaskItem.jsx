import React, { useState, useEffect } from 'react';

function TaskItem({
  as, id, text, done, actionToggleTask, actionDeleteTask, actionUpdateTask,
}) {
  const Tag = as;

  const [stInput, setStInput] = useState(text);
  const [stFocused, setStFocused] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    stInput !== text && setTimeout(() => actionUpdateTask(id, stInput), 1000);
  }, [stFocused]);

  return (
    <Tag className={`mb-3 d-flex ${done ? 'text-decoration-line-through' : ''}`}>
      <input type="checkbox" checked={done} onChange={(event) => actionToggleTask(id, event.target.checked)} />
      <input value={stInput} onChange={(event) => setStInput(event.target.value)} onFocus={() => setStFocused(true)} onBlur={() => setStFocused(false)} className="w-100" />
      <button type="button" onClick={() => actionDeleteTask(id)}>X</button>
    </Tag>
  );
}
export default TaskItem;

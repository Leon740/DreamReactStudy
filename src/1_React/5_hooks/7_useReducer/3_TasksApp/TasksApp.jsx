import React, { useReducer, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TaskItem from './TaskItem';

// === Concept
// useReducer gives an option to divide logic, and make logic flexible

function TasksApp() {
  const initialTasks = [
    { id: 0, text: 'Get ready for the interview', done: false },
    { id: 1, text: 'Wash the car', done: false },
    { id: 2, text: 'Hang out with baby', done: false },
  ];

  function reducer(tasks, action) {
    switch (action.type) {
      case 'add': return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }];

      case 'toggle': return tasks.map((taskItem) => {
        if (taskItem.id === action.id) {
          // eslint-disable-next-line no-param-reassign
          taskItem.done = action.done;
        }
        return taskItem;
      });

      case 'delete': return tasks.filter((taskItem) => taskItem.id !== action.id);

      case 'update': return tasks.map((taskItem) => {
        if (taskItem.id === action.id) {
          // eslint-disable-next-line no-param-reassign
          taskItem.text = action.text;
        }
        return taskItem;
      });

      default: throw Error(`Unknown action: ${action.type}`);
    }
  }

  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const rfInput = useRef();
  function actionAddTask(text) {
    const prevId = tasks[tasks.length - 1].id + 1;

    dispatch({ type: 'add', id: prevId, text });

    rfInput.current.value = '';
    rfInput.current.focus();
  }

  function actionToggleTask(id, done) {
    dispatch({ type: 'toggle', id, done });
  }

  function actionDeleteTask(id) {
    dispatch({ type: 'delete', id });
  }

  function actionUpdateTask(id, text) {
    dispatch({ type: 'update', id, text });
  }

  return (
    <Container className="pt-5">
      <Row>
        <Col md={8}>
          <input ref={rfInput} className="form-control" placeholder="Type in the task" />
        </Col>
        <Col md={4}>
          <button type="button" className="btn btn-success w-100" onClick={() => actionAddTask(rfInput.current.value)}>add</button>
        </Col>
      </Row>
      <ul className="mt-5 list-unstyled">
        {tasks.map((taskItem) => <TaskItem as="li" key={taskItem.id} id={taskItem.id} text={taskItem.text} done={taskItem.done} actionToggleTask={actionToggleTask} actionDeleteTask={actionDeleteTask} actionUpdateTask={actionUpdateTask} />)}
      </ul>
    </Container>
  );
}

export default TasksApp;

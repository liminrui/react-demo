import { useReducer, useState } from 'react';
import { tasksReducer } from '../../reducer/task';
import { useImmerReducer } from 'use-immer';
import './task.scss'

let nextId = 3;
const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false}
];


export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  const [text, setText] = useState('')

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });

    setText('')
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  function inputChange(e) {
    setText(e.target.value)
  }

  return (
    <>
      <h1>布拉格的行程安排</h1>
      <div className="row">
        <input type="text" value={text} onChange={inputChange}/>
        <button onClick={() => handleAddTask(text)}>新增</button>
      </div>
      {
        tasks.map((item, index) => (
          <Row item={item} key={index} onDelete={(item) => handleDeleteTask(item.id)} onSave={task => handleChangeTask(task)}></Row>
        ))
      }
    </>
  );
}

function Row({item, onDelete, onSave}) {
  const [text, setText] = useState(item.text)
  const [editing, setEditing] = useState(false)

  function save() {
    onSave({
      ...item,
      text
    })
    setEditing(false)
     
  }
  return (
    <div className="row">
      {
        editing ? (
          <>
            <input value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={save}>保存</button>
          </>
        ) : (
          <>
            <label htmlFor="">{text}</label>
            <button onClick={() => setEditing(true)}>编辑</button>
          </>
        )
      }
      <button onClick={() => onDelete(item)}>删除</button>
    </div>
  );
}


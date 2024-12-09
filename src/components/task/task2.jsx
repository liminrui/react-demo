import { useRef, useState } from "react";
import { useDispatch, useTask } from "../../store/task";
import { TaskProvider } from "./taskProvider";

export default function Task() {
  return (
    <TaskProvider>
      <Head></Head>
      <Tasks></Tasks>
    </TaskProvider>
  );
}

function Head() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const inputRef = useRef(null);

  return (
    <>
      <div className="row">
        <input
          type="text"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => inputRef.current.focus()}>聚焦</button>
        <button
          onClick={() =>
            dispatch({
              type: "added",
              id: Math.random(),
              text: text,
            })
          }
        >
          新增
        </button>
      </div>
    </>
  );
}

function Tasks() {
  const task = useTask();
  return task.map((item, index) => <Row item={item} key={index}></Row>);
}

function Row({ item }) {
  const [text, setText] = useState(item.text);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  function save() {
    dispatch({
      type: "changed",
      task: item,
    });
    setEditing(false);
  }
  return (
    <div className="row">
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
          <button onClick={save}>保存</button>
        </>
      ) : (
        <>
          <label htmlFor="">{text}</label>
          <button onClick={() => setEditing(true)}>编辑</button>
        </>
      )}
      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: item.id,
          })
        }
      >
        删除
      </button>
    </div>
  );
}

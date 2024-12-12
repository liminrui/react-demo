import { createContext, useContext } from "react";

export const taskContext = createContext(null);
export const taskDispatchContext = createContext(null);

let nextId = 3;
export const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];

export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      tasks.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("未知 action: " + action.type);
    }
  }
}

export function useDispatch() {
  return useContext(taskDispatchContext);
}

export function useTask() {
  return useContext(taskContext);
}

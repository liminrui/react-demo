import {
  taskContext,
  taskDispatchContext,
  tasksReducer,
  initialTasks,
} from "../../store/task";
import { useImmerReducer } from "use-immer";

export function TaskProvider({ children }) {
  const [task, dispatch] = useImmerReducer(tasksReducer, initialTasks);
  return (
    <taskContext.Provider value={task}>
      <taskDispatchContext.Provider value={dispatch}>
        {children}
      </taskDispatchContext.Provider>
    </taskContext.Provider>
  );
}

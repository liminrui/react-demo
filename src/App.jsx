import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useImmer } from "use-immer";
import "./App.scss";
import TaskApp from "./components/task/task2";
import Page from "./components/head";
import CatFriends from "./components/cat";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useImmer({
    name: "li",
    age: 31,
  });

  return (
    <>
      <Page></Page>
      <TaskApp></TaskApp>
      <CatFriends></CatFriends>
    </>
  );
}

export default App;

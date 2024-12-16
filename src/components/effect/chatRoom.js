import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect(); // 类似onDestroy/onDeactive
  }, []);
  return <h1>欢迎来到聊天室！</h1>;
}

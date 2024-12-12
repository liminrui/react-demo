import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  function subFun() {
    console.log("subFun: ");
  }

  useImperativeHandle(ref, () => ({
    // 只暴露 focus，没有别的
    focus() {
      //   realInputRef.current.focus();
      console.log("调用子节点方法!");
      subFun();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}

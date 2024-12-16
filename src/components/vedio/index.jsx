import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  /**
   * 
    useEffect(() => {
      // 这里的代码会在每次渲染后运行
    });

    useEffect(() => {
      // 这里的代码只会在组件挂载（首次出现）时运行
    }, []);

    useEffect(() => {
      // 这里的代码不但会在组件挂载时运行，而且当 a 或 b 的值自上次渲染后发生变化后也会运行
    }, [a, b]);
   */
  useEffect(() => {
    // 这里的作用类似于onMount
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]); // 类似watch，只有再playing变化时才会调用

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "暂停" : "播放"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

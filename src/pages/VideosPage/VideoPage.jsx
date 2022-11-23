import React, { useState, useRef, useCallback } from "react";
import ReactPlayer from "react-player/youtube";

export default function VideoPage() {
  const playerRef = React.useRef();

  const func123 = () => {
    playerRef.current.seekTo(400, "seconds");
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
      <button onClick={() => func123()}>123</button>
    </div>
  );
}

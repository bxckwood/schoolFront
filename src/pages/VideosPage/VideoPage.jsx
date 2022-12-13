import React, { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export default function VideoPage() {
  const playerRef = React.useRef();

  const location = useParams();

  const func123 = () => {
    playerRef.current.seekTo(400, "seconds");
    console.log(playerRef.current.getCurrentTime());
  };

  console.log(location.id);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url={`https://www.youtube.com/watch?v=${location.id}`}
      />
      <button onClick={() => func123()}>123</button>
    </div>
  );
}

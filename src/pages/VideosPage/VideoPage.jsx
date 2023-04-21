import React, { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import styles from "../VideosPage/VideoPage.module.scss";
import ButtonNoSubmit from "../../components/ButtonNoSubmit/ButtonNoSubmit";

export default function VideoPage() {
  const playerRef = React.useRef();

  const location = useParams();

  const func123 = () => {
    playerRef.current.seekTo(400, "seconds");
    console.log(playerRef.current.getCurrentTime());
  };

  console.log(location.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chat}>
        <div className={styles.chatTop}>
          <span className={styles.chatTopText}>Чат</span>
        </div>
        <div className={styles.chatMessageSender1}>1231234</div>
        <div className={styles.chatMessage1}>Привет!</div>
        <div className={styles.chatMessageSender2}>123123</div>
        <div className={styles.chatMessage2}>Привет 1231234</div>
        <div className={styles.poloska4}></div>
        <div className={styles.poloska3}></div>
        <div className={styles.poloska2}></div>
        <div className={styles.poloska}></div>
        <div className={styles.chatBottomTextButton}>
          <span className={styles.chatBottomText}>Введите сообщение</span>
        </div>
      </div>
      <div className={styles.video}>
        <ReactPlayer
          width="100%"
          height="100%"
          ref={playerRef}
          controls={true}
          url={`https://www.youtube.com/watch?v=${location.id}`}
        />
        {/* <button onClick={() => func123()}>123</button> */}
      </div>
      <div>
        <ButtonNoSubmit text={"Остановить у всех"} left={50} />
      </div>
    </div>
  );
}

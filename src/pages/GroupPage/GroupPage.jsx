import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../GroupPage/GroupPage.module.scss";
import ButtonNoSubmit from "../../components/ButtonNoSubmit/ButtonNoSubmit";
import InputNoSubmit from "../../components/InputNoSubmit/InputNoSubmit";

function GroupPage(props) {
  const [allInvitations, setAllInvitations] = useState([]);
  const [inputState, setInputState] = useState("");
  const [coUser, setCoUser] = useState(false);
  const [leader, setLeader] = useState(false);
  const [coUserId, setCoUserId] = useState(0);
  const [coUserNickname, setCoUserNickname] = useState(0);

  const getAllInvitations = async () => {
    const jwtToken = localStorage.getItem("token");

    const allInvitationsRequest = await axios.post(
      "http://localhost:8080/api/group/invintations",
      {
        jwtToken: jwtToken,
      }
    );

    setAllInvitations(allInvitationsRequest.data);
  };

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const sendInvitation = async (name) => {
    const jwtToken = localStorage.getItem("token");

    const sendInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/add",
      {
        jwtToken: jwtToken,
        name: name,
      }
    );

    console.log(sendInvitationRequest);
  };

  const acceptInvitation = async (groupId) => {
    const jwtToken = localStorage.getItem("token");

    const acceptInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/accept",
      {
        jwtToken: jwtToken,
        groupId: groupId,
      }
    );

    console.log(acceptInvitationRequest);
    window.location.reload();
  };

  const declineInvitation = async (groupId) => {
    const jwtToken = localStorage.getItem("token");

    const declineInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/decline",
      {
        jwtToken: jwtToken,
        groupId: groupId,
      }
    );

    console.log(declineInvitationRequest);
    window.location.reload();
  };

  const createGroup = async () => {
    const jwtToken = localStorage.getItem("token");

    const createInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/create",
      {
        jwtToken: jwtToken,
      }
    );

    console.log(createInvitationRequest);
    window.location.reload();
  };

  const deleteGroup = async () => {
    const jwtToken = localStorage.getItem("token");

    const deleteInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/delete",
      {
        jwtToken: jwtToken,
      }
    );

    console.log(deleteInvitationRequest);
    window.location.reload();
  };

  const leaveGroup = async () => {
    const jwtToken = localStorage.getItem("token");

    const leaveInvitationRequest = await axios.post(
      "http://localhost:8080/api/group/leave",
      {
        jwtToken: jwtToken,
      }
    );

    console.log(leaveInvitationRequest);
    window.location.reload();
  };

  const kickPlayerFromGroup = async (coUserNickname) => {
    const jwtToken = localStorage.getItem("token");

    const kickPlayerFromGroupRequest = await axios.post(
      "http://localhost:8080/api/group/kick",
      {
        jwtToken: jwtToken,
        name: coUserNickname,
      }
    );

    console.log(kickPlayerFromGroupRequest);
    window.location.reload();
  };

  useEffect(() => {
    const getInfoAboutGroups = async () => {
      const jwtToken = localStorage.getItem("token");

      if (jwtToken) {
        const aboutGroupRequest = await axios.post(
          "http://localhost:8080/api/group/info",
          {
            jwtToken: jwtToken,
          }
        );

        setLeader(aboutGroupRequest.data.leader);
        setCoUser(aboutGroupRequest.data.coUser);
        setCoUserId(aboutGroupRequest.data.coUserId);
        setCoUserNickname(aboutGroupRequest.data.coUserNickname);

        if (
          aboutGroupRequest.data.leader === false &&
          aboutGroupRequest.data.coUser == false
        ) {
          getAllInvitations();
        }
      }
    };

    getInfoAboutGroups();
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? (
        <div className={styles.groupPage}>
          <div className={styles.groupPageTable}>
            {!coUser && !leader ? (
              <div className={styles.groupPageRowTable}>
                <ButtonNoSubmit
                  clickFunction={() => createGroup()}
                  text={"Создать группу"}
                />
              </div>
            ) : null}
            {leader ? (
              <div className={styles.groupPageRowTable}>
                <ButtonNoSubmit
                  clickFunction={() => deleteGroup()}
                  text={"Удалить группу"}
                />
              </div>
            ) : null}
            {coUser ? (
              <div className={styles.groupPageRowTable}>
                <ButtonNoSubmit
                  clickFunction={() => leaveGroup()}
                  text={"Покинуть группу"}
                />
              </div>
            ) : null}
          </div>
          {leader ? (
            <div className={styles.groupPageRowTable}>
              <div className={styles.groupPageRow}>
                <span className={styles.groupPageTitle}>
                  Пригласить друга в группу
                </span>
                <InputNoSubmit
                  onChangeFunc={handleInput}
                  value={inputState}
                  bottom={"20px"}
                  placeholder={"Введите ник друга"}
                />
                <ButtonNoSubmit
                  text={"Отправить запрос"}
                  clickFunction={() => sendInvitation(inputState)}
                />
              </div>
              {coUserId > 0 ? (
                <div className={styles.groupPageRow2}>
                  <ButtonNoSubmit
                    text={`Удалить из группы ${coUserNickname}`}
                    clickFunction={() => kickPlayerFromGroup(coUserNickname)}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
          {!leader && !coUser ? (
            <div className={styles.groupPageRow}>
              <span className={styles.groupPageTitle}>Все запросы</span>
              {allInvitations.map((elem, index) => (
                <div key={index}>
                  <span className={styles.groupPageSubTitle}>
                    Группа {elem}
                  </span>
                  <ButtonNoSubmit
                    clickFunction={() => acceptInvitation(elem)}
                    right={"20px"}
                    left={"20px"}
                    text={"Принять запрос"}
                  />
                  <ButtonNoSubmit
                    clickFunction={() => declineInvitation(elem)}
                    text={"Отклонить запрос"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <span className={styles.groupPageSubTitle}>
              Вы {leader ? "лидер группы" : "участник группы"}
            </span>
          )}
        </div>
      ) : (
        <span className={styles.groupPageTitle}>Войдите в аккаунт</span>
      )}
    </>
  );
}

export default GroupPage;

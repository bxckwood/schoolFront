import React, { useState } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "../RegistrationPage/RegistrationPage.module.scss";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isCreactedAccount, setIsCreatedAccount] = useState(false);
  const [attempt, setAttempt] = useState(false);

  const onSubmit = async (data) => {
    const request = await axios.post(
      "http://localhost:8080/api/user/create",
      data
    );

    setAttempt(true);
    if (request.status === 200) {
      setIsCreatedAccount(true);
      window.location.assign("http://localhost:3000");
    }
    return request;
  };

  return (
    <div className={styles.registrationPage}>
      <h1 className={styles.formTitle}>Создай новый аккаунт</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Ваш ник"}
          register={register}
          inputName={"name"}
          mg={"margin20px"}
          required={true}
          type={"text"}
        />
        <Input
          placeholder={"Введите электронную почту"}
          register={register}
          inputName={"email"}
          mg={"margin20px"}
          required={true}
          type={"email"}
        />
        <Input
          placeholder={"Введите пароль"}
          register={register}
          inputName={"password"}
          mg={"margin20px"}
          required={true}
          type={"password"}
        />
        <Button text={"Создать аккаунт"} onClick={() => onSubmit()} />
        {attempt ? (isCreactedAccount ? "Аккаунт создан" : "Ошибка") : null}
      </form>
    </div>
  );
}

export default RegistrationPage;

import React, { useState } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import user from "../RegistrationPage/user.svg";
import email from "../RegistrationPage/email.svg";
import password from "../RegistrationPage/password.svg";

import styles from "../RegistrationPage/RegistrationPage.module.scss";
import { Link } from "react-router-dom";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isCreactedAccount, setIsCreatedAccount] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const [error, setError] = useState("")

  const onSubmit = async (data) => {

    setAttempt(true);
    const request = await axios.post(
      "http://localhost:8080/api/user/create",
      data
    );
    if (request.status === 200) {
      setIsCreatedAccount(true);
      window.location.assign("http://localhost:3000/authorization");
    } else if (request.status === 201) {
      setError(request.data)
    }
    return request;
  };

  return (
    <div className={styles.registrationPage}>
      <h1 className={styles.formTitle}>Создай новый аккаунт</h1>
      <span className={styles.formSubtitle}>
        Присоединяйся к нашему сообществу!
      </span>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Ваш ник"}
          register={register}
          inputName={"name"}
          mg={"margin20px"}
          required={true}
          type={"text"}
          url={user}
          top={"27px"}
          maxLength={15}
          minLength={5}
          errors={errors}
        />
        <Input
          placeholder={"Введите электронную почту"}
          register={register}
          inputName={"email"}
          mg={"margin20px"}
          required={true}
          type={"email"}
          url={email}
          top={"29px"}
          maxLength={25}
          minLength={10}
          errors={errors}
        />
        <Input
          placeholder={"Введите пароль"}
          register={register}
          inputName={"password"}
          mg={"margin20px"}
          required={true}
          type={"password"}
          url={password}
          top={"27px"}
          maxLength={18}
          minLength={6}
          errors={errors}
        />
        <Button
          text={"Создать аккаунт"}
          errors={errors}
          onClick={() => onSubmit()}
        />
        
        {attempt ? (isCreactedAccount ? "Аккаунт создан" : <div className={styles.error}>{error}</div>) : null}
        <Link className={styles.linkTo} to="/authorization">Уже есть аккаунт?</Link>
      </form>
    </div>
  );
}

export default RegistrationPage;

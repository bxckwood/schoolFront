import React from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "../LoginPage/LoginPage.module.scss";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const request = await axios.post(
      "http://localhost:8080/api/user/auth",
      data
    );

    if (request.status === 200) {
      localStorage.setItem("token", request.data.token);
      // window.location.assign("http://localhost:3000");
    }

    console.log(request.data.token);
    return request.data.token;
  };

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.formTitle}>Войди в аккаунт</h1>
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
          placeholder={"Введите пароль"}
          register={register}
          inputName={"password"}
          mg={"margin20px"}
          required={true}
          type={"password"}
        />
        <Button
          text={"Войти в аккаунт"}
          onClick={() => {
            onSubmit();
          }}
        />
        {/* {attempt ? (isCreactedAccount ? "Аккаунт создан" : "Ошибка") : null} */}
      </form>
    </div>
  );
}

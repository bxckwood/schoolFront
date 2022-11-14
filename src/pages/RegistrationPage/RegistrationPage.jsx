import React from "react";

import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";

import styles from "../RegistrationPage/RegistrationPage.module.scss";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.registrationPage}>
      <h1 className={styles.formTitle}>Создай новый аккаунт</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Ваш ник"}
          register={register}
          inputName={"name"}
          mg={"margin20px"}
        />
        <Input
          placeholder={"Введите электронную почту"}
          register={register}
          inputName={"email"}
          mg={"margin20px"}
        />
        <Input
          placeholder={"Введите пароль"}
          register={register}
          inputName={"password"}
          mg={"margin20px"}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegistrationPage;

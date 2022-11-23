import React, {useState} from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import password from "../RegistrationPage/password.svg";
import user from "../RegistrationPage/user.svg";

import styles from "../LoginPage/LoginPage.module.scss";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const [error, setError] = useState("")
  const [attempt, setAttempt] = useState(false);


  const onSubmit = async (data) => {
    console.log(data);
    setAttempt(true);
    const request = await axios.post(
      "http://localhost:8080/api/user/auth",
      data
    );

    if (request.status === 200) {
      localStorage.setItem("token", request.data.token);
    } else if (request.status === 201) {
      setError(request.data)
    }

    return request.data.token;
  };

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.formTitle}>Войти в аккаунт</h1>
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
          text={"Войти в аккаунт"}
          errors={errors}
          onClick={() => {
            onSubmit();
          }}
        />
        {attempt ? (!error ? "Вы вошли в аккаунт" : <div className={styles.error}>{error}</div>) : null}

        <Link to="/registration" className={styles.linkTo}>Ещё нет аккаунта?</Link>
        
      </form>
    </div>
  );
}

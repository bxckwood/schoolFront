import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "../InputYoutubePage/InputYoutubePage.module.scss";

export const InputYoutubePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // https://www.youtube.com/watch?v=si4E1LT6ibY
    let { link } = data;
    link = link.replace("https://www.youtube.com/watch?v=", "");
    navigate(`/videos/${link}`);
  };

  return (
    <div className={styles.inputYoutubePage}>
      <h1 className={styles.formTitle}>Введите ссылку</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Ссылка"}
          register={register}
          inputName={"link"}
          mg={"margin20px"}
          required={true}
          type={"text"}
          top={"27px"}
          errors={errors}
        />
        <Button
          text={"Перейти"}
          errors={errors}
          onClick={() => {
            onSubmit();
          }}
        />
      </form>
    </div>
  );
};

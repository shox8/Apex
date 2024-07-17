"use client";
import React, { useState } from "react";
import { AuthBlock, AuthFormBox, AuthImageBox } from "@/app/styles/auth";
import { Title } from "@/app/styles/text";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import AuthWallpaper from "../../../public/auth-wallpaper.jpg";
import Item from "@/app/_components/FormItem";

const data = {
  title: "Register",
  formBtn: "Submit",
};

const Register = () => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);

  const finish = () => {};

  return (
    <AuthBlock>
      <AuthImageBox>
        <Image
          alt="Wallpaper"
          src={AuthWallpaper}
          onLoad={() => setImageLoading(false)}
          className={isImageLoading ? "blur" : ""}
        />
      </AuthImageBox>
      <AuthFormBox>
        <Form onFinish={finish} layout="vertical">
          <Title>{data.title}</Title>
          <Item name="username" element={<Input />} />
          <Item name="email" element={<Input />} isEmail />
          <Item name="password" element={<Input.Password />} isPsw />
          <Item element={<Button htmlType="submit">{data.formBtn}</Button>} />
        </Form>
      </AuthFormBox>
    </AuthBlock>
  );
};

export default Register;

"use client";
import React, { FormEvent, useState } from "react";
import { AuthBlock, AuthFormBox, AuthImageBox } from "@/app/styles/auth";
import { Description, Title } from "@/app/styles/text";
import { Button, Divider, Form, Input } from "antd";
import { AuthWallpaper, GoogleLogo } from "../../../public";
import { Br } from "@/app/styles/ui";
import Image from "next/image";
import Item from "@/app/_components/FormItem";
import Question from "@/app/_components/Question";
import Link from "next/link";

type UI = { variant: "filled" | "outlined" | "borderless" };

const ui: UI = { variant: "filled" };

const Login = () => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);

  const finish = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  return (
    <AuthBlock>
      <AuthImageBox>
        <Image
          alt="."
          src={AuthWallpaper}
          onLoad={() => setImageLoading(false)}
          className={isImageLoading ? "blur" : ""}
        />
      </AuthImageBox>
      <AuthFormBox>
        <Form onFinish={finish} layout="vertical">
          <Br from="bottom">
            <Title>Wellcome!</Title>
            <Description>Please enter log in details below</Description>
          </Br>
          <Item name="email" node={<Input {...ui} />} isEmail />
          <Item name="password" node={<Input.Password {...ui} />} isPsw />
          <Link href={"/forget-password"} className="flex justify-end">Forget password?</Link>
          <Item node={<Button htmlType="submit">Log In</Button>} />
          <Divider>
            <Description>or continue</Description>
          </Divider>
          <Button icon={<Image alt="." src={GoogleLogo} />}>
            Log In with Google
          </Button>
          <Question text="Don't have an accaunt?" route="Sign Up" />
        </Form>
      </AuthFormBox>
    </AuthBlock>
  );
};

export default Login;

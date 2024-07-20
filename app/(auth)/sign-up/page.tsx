"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Item from "@/app/_components/FormItem";
import Question from "@/app/_components/Question";
import { AuthBlock, AuthFormBox, AuthImageBox } from "@/app/styles/auth";
import { Description, Title } from "@/app/styles/text";
import { Button, Divider, Form, Input, message } from "antd";
import { AuthWallpaper, GoogleLogo } from "../../../public";
import { Br } from "@/app/styles/ui";
import { useSignUpMutation } from "@/lib/services/auth";
import { User } from "@/lib/types";
import { useRouter } from "next/navigation";
import { isError } from "@/app/_utils";
import { JointContent } from "antd/es/message/interface";

type UI = { variant: "filled" | "outlined" | "borderless" };

const ui: UI = { variant: "filled" };

const Register = () => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const path = useRouter();

  useEffect(() => {
    if (isError(error)) return message.error(error.data as JointContent);
  }, [error]);

  const finish = async (event: User) => {
    await signUp(event).unwrap();
    path.push("/");
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
            <Description>Please enter sign up details below</Description>
          </Br>
          <Item name="username" node={<Input {...ui} />} />
          <Item name="email" node={<Input {...ui} />} isEmail />
          <Item name="password" node={<Input.Password {...ui} />} isPsw />
          <Item
            node={
              <Button htmlType="submit" loading={isLoading}>
                Sign Up
              </Button>
            }
          />
          <Divider>
            <Description>or continue</Description>
          </Divider>
          <Button icon={<Image alt="." src={GoogleLogo} />} loading={false}>
            Sign Up with Google
          </Button>
          <Question text="Already have an accaunt?" route="Log In" />
        </Form>
      </AuthFormBox>
    </AuthBlock>
  );
};

export default Register;

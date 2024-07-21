"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Item from "@/app/_components/FormItem";
import Question from "@/app/_components/Question";
import Link from "next/link";
import { AuthBlock, AuthFormBox, AuthImageBox } from "@/app/styles/auth";
import { Description, Title } from "@/app/styles/text";
import { Button, Divider, Form, Input, message } from "antd";
import { AuthWallpaper, GoogleLogo } from "../../../public";
import { Br } from "@/app/styles/ui";
import { useLogInMutation } from "@/lib/services/auth";
import { useRouter } from "next/navigation";
import { isError } from "@/app/_utils";
import { User } from "@/lib/types";
import { JointContent } from "antd/es/message/interface";

type UI = { variant: "filled" | "outlined" | "borderless" };

const ui: UI = { variant: "filled" };

const LogIn = () => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);
  const [logIn, { isLoading, error }] = useLogInMutation();
  const path = useRouter();

  useEffect(() => {
    if (isError(error)) return message.error(error.data as JointContent);
  }, [error]);

  const finish = async (event: User) => {
    await logIn(event).unwrap();
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
            <Description>Please enter log in details below</Description>
          </Br>
          <Item name="email" node={<Input {...ui} />} isEmail />
          <Item name="password" node={<Input.Password {...ui} />} isPsw />
          <Link href={"/forget-password"} className="flex justify-end">
            Forget password?
          </Link>
          <Item
            node={
              <Button htmlType="submit" loading={isLoading}>
                Log In
              </Button>
            }
          />
          <Divider>
            <Description>or continue</Description>
          </Divider>
          <Button icon={<Image alt="." src={GoogleLogo} />}>
            Continue with Google
          </Button>
          <Question text="Don't have an accaunt?" route="Sign Up" />
        </Form>
      </AuthFormBox>
    </AuthBlock>
  );
};

export default LogIn;

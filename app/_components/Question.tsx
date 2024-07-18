import Link from "next/link";
import React from "react";
import { Description } from "../styles/text";

interface Props {
  text: string;
  route: string;
}

const Question = ({ text, route }: Props) => {
  return (
    <Description className="flex justify-center gap-1 mt-3">
      {text} <Link href={route} className="font-bold">{route}</Link>
    </Description>
  );
};

export default Question;

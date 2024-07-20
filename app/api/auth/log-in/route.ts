import { db } from "@/firebase.config";
import { User } from "@/lib/types";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { date, encrypt } from "../lib";
import { cookies } from "next/headers";

const bcrypt = require("bcrypt");

type RequestData = Omit<User, "id" | "photo" | "username">;

export async function POST(request: NextRequest) {
  try {
    const user: RequestData = await request.json();

    const session = await encrypt({ user, date });

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const readyUser = { ...user, password: hashedPassword };

    await addDoc(collection(db, "users"), readyUser);

    cookies().set("session", session, { expires: date, httpOnly: true });

    return NextResponse.json(readyUser);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

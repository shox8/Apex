import { db } from "@/firebase.config";
import { User } from "@/lib/types";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { cookieKey, date, encrypt } from "../lib";
import { cookies } from "next/headers";

const bcrypt = require("bcrypt");

type RequestData = Omit<User, "id" | "photo">;

export async function POST(request: NextRequest) {
  try {
    const user: RequestData = await request.json();

    const users = await getDocs(
      query(collection(db, "users"), where("email", "==", user.email))
    );

    if (!users.empty) {
      return NextResponse.json("Email already in use!", { status: 500 });
    }

    const session = await encrypt({ user, date });

    const salt = bcrypt()

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const readyUser = { ...user, password: hashedPassword };

    await addDoc(collection(db, "users"), readyUser);

    cookies().set(cookieKey, session, { expires: date, httpOnly: true });

    return NextResponse.json(readyUser);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

import { db } from "@/firebase.config";
import { User } from "@/lib/types";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { cookieKey, date, encrypt } from "../lib";
import { cookies } from "next/headers";

const bcrypt = require("bcrypt");

type RequestData = Omit<User, "id" | "photo" | "username">;

export async function POST(request: NextRequest) {
  try {
    const user: RequestData = await request.json();

    const session = await encrypt({ user, date });

    const users = await getDocs(
      query(collection(db, "users"), where("email", "==", user.email))
    );

    if (users.empty) {
      return NextResponse.json("Account is not exist!", { status: 404 });
    }

    const userData = users.docs[0].data();

    const result = await bcrypt.compare(user.password, userData.password);

    if (!result) return;

    cookies().set(cookieKey, session, { expires: date, httpOnly: true });

    delete userData.password;

    return NextResponse.json({ ...userData, id: users.docs[0].id });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

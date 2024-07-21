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
    return NextResponse.json("Data");
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

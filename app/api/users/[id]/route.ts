import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getDoc(doc(db, "users", params.id));

  return NextResponse.json(user.data());
}

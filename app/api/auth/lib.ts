import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const key = new TextEncoder().encode(process.env.AUTH_SECRET_KEY);

export const date = new Date(Date.now() + 5 * 1000000);

export const cookieKey = "data";

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
}

export async function getSession() {
  const session = cookies().get(cookieKey)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updataSession(request: NextRequest) {
  const session = request.cookies.get(cookieKey)?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  parsed.expires = date;
  const response = NextResponse.next();
  response.cookies.set({
    name: cookieKey,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return response;
}

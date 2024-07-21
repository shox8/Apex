import { auth, google } from "@/firebase.config";
import { signInWithPopup } from "firebase/auth";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, google);

    if (!result || !result.user) {
      throw new Error("Google sign in failed");
    }
    return result.user.uid;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOutWithGoogle() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}

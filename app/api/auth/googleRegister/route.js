import { NextResponse } from "next/server";
// firebase funcs
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const POST = async (request) => {
    const { username, email, password } = await request.json()

    try {
        await createUserWithEmailAndPassword(auth, email, password)

        updateProfile(auth.currentUser, {
            displayName: username
        })

        return NextResponse.json({ "message": "all good" });
    } catch (error) {
        console.log(error);

        return false
    }
}
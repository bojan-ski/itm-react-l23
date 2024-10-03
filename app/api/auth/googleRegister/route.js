import { NextResponse } from "next/server";
// firebase funcs
import { auth } from "@/app/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const POST = async (request) => {
    const { username, email, password } = await request.json()

    try {
        await createUserWithEmailAndPassword(auth, email, password)

        updateProfile(auth.currentUser, {
            displayName: username
        })

        //success message
        console.log('your account has been created');

        return NextResponse.json({ "message": "all good" });
    } catch (error) {
        console.log(error);

        return false
    }
}
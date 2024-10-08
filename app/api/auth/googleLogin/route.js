import { NextResponse } from "next/server";
// firebase
import { auth } from "@/app/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";


export const POST = async (request) => {   
    const {email, password} = await request.json()

    try {
        const apiCall = await signInWithEmailAndPassword(auth, email, password)
        console.log(apiCall);        

        //success message
        console.log('user logged in');

        return NextResponse.json({"message": "all good"});
    } catch (error) {
        //error message
        console.log(error);

        return false
    }
}
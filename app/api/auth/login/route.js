import { NextResponse } from "next/server";

export const POST = async (request) => {   
    const {username, password} = await request.json()

    try {
        const apiCall = await fetch(`${process.env.LOGIN_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'emilys',
                password: 'emilyspass',
            }),
        })

        const result = await apiCall.json()

        if(result && !result.message){
            return NextResponse.json(result);
        }else{
            return null
        }  
    } catch (error) {
        console.log(error);

        return null
    }
}
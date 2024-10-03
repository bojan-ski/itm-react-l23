import { NextResponse } from "next/server";

export const GET = async () => {    
    try {
        const apiCall = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?limit=9`)        
        const productsListData = await apiCall.json() 

        return NextResponse.json(productsListData)      
    } catch (error) {
        console.log(error);

        return null
    }
}
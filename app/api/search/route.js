import { NextResponse } from "next/server";

export const GET = async (request) => {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    const apiCall = await fetch(`${process.env.API_URL}/search?q=${query}`)        
    const searchResults = await apiCall.json() 

    return NextResponse.json(searchResults);
}

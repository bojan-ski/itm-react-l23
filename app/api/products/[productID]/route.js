import { NextResponse } from "next/server";

export const GET = async (req, { params: {productID} }) => {
    try {
        const apiCall = await fetch(`${process.env.API_URL}/${productID}`) 
        const productData = await apiCall.json()

        return NextResponse.json(productData)
    } catch (error) {
        console.log(error);

        return null
    }
}
"use server"

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

export const postNewProductAction = async (formData) =>{
    const productTitle = formData.get('productTitle').trim()
    const productDescription = formData.get('productDescription').trim()
    const productPrice = formData.get('productPrice')

    try {
        const apiCall = await fetch(`${process.env.API_URL}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productTitle: productTitle,
                productDescription: productDescription,
                productPrice: productPrice
            })
          })
          
        const response = await apiCall.json()
        console.log(response);
        
    
        if(response.id){
            console.log('product created') 
        } 
    } catch (error) {
        console.log(error);        
    }
}
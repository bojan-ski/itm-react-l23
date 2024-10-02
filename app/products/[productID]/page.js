import Link from "next/link"
// page
import NotFound from "@/app/not-found"

// export const revalidate = 0;

const SelectedProduct = async ({ params: { productID } }) => { 
  const apiCall = await fetch(`http://localhost:3000/api/products/${productID}`, {method: "GET"})
  const productDetails = await apiCall.json()

  if (!productDetails) return <NotFound />

  const { title, description, price, discountPercentage, rating, thumbnail } = productDetails

  return (
    <div>
      <h1>
        {title}
      </h1>

      <div className="product-details">
        <img src={thumbnail} alt={title} />

        <div className="product-data">
          <p>
            Rating: <span>{rating}</span>
          </p>
          <p>
            Description: <span>{description}</span>
          </p>
          <p>
            Price: <span>{price}</span>
          </p>
          <p>
            Discounted price: <span>{discountPercentage}</span>
          </p>

          <Link href='/' className="btn-back">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct
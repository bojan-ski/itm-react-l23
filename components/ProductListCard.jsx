import Link from "next/link"

const ProductListCard = ({ productData }) => {
    const { id, title, rating, thumbnail } = productData

    return (
        <div className="card">
            <img src={thumbnail} alt={title} />
            <p>
                Title: <span>{title}</span>
            </p>
            <p>
                Rating: <span>{rating}</span>
            </p>
            <Link href={`/products/${id}`} className="btn">
                See Details
            </Link>
        </div>
    )
}

export default ProductListCard
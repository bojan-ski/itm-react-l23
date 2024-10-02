// components
import PageHeader from "@/components/PageHeader";
import ProductListCard from "@/components/ProductListCard";
import NoDataAvailable from "@/components/NoDataAvailable";

// export const revalidate = 0;

const Home = async () => {
  const apiCall = await fetch('http://localhost:3000/api/products', { method: "GET" })
  const productsListData = await apiCall.json()

  return (
    <>      
      <PageHeader text='Products'/>

      <section className="products">
        {productsListData ? (
          productsListData?.products?.map(productData => <ProductListCard key={productData.id} productData={productData} />
          )
        ) : (
          <NoDataAvailable />
        )}
      </section>
    </>
  );
}

export default Home
// pages/products/[id].js
import { useRouter } from 'next/router';
import productsData from "@/data/productsData"

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  // Check if the router is not ready or product is not found
  if (router.isFallback || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p>
      <p>Product Image: <img src={product.image} alt={product.name} /></p>
      <p>Product Description: {product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  // Generate the paths for all products
  const paths = productsData.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: true, // Set fallback to true to handle cases where product data is not available
  };
}

export async function getStaticProps({ params }) {
  // Fetch the product details based on the ID
  const { id } = params;
  const product = productsData.find((product) => product.id.toString() === id);

  return {
    props: {
      product,
    },
  };
}

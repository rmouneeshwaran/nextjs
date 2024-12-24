import Link from 'next/link';
import styles from '../styles/Products.module.css';
import productsData from '@/data/productsData'; // Import the productsData array

const defaultImageSize = { width: 100, height: 100 }; // Default image size if not provided

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {productsData.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: product.size?.width || defaultImageSize.width,
                height: product.size?.height || defaultImageSize.height,
              }}
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;

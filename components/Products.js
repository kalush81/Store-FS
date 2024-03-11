import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

const QUERY_ALL_PRODUCTS = gql`
  query ALL_PRODUCTS {
    allProducts {
      name
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;
const Products = () => {
  const { data, error, loading } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <p>All Products </p>
      {/* {JSON.stringify(data)} */}
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </>
  );
};

export default Products;

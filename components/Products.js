import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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

const Products = () => {
  const { data, error, loading } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <p>All Products </p>
      {JSON.stringify(data)}
    </>
  );
};

export default Products;

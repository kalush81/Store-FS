import PropTypes from 'prop-types';

const Product = ({ product }) => {
  console.log(product);
  return <p>{product.name}</p>;
};

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      image: PropTypes.shape({
        publicUrlTransformed: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

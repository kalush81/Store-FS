import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any,
};

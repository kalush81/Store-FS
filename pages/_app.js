/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';

export default function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />;
    </PageWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any,
};

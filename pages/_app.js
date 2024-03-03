/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import nProgress from 'nprogress';
import Router from 'next/router';
import PageWrapper from '../components/PageWrapper';

import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeEnd', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};

/* eslint-disable react/jsx-props-no-spreading */
import PropTypes, { any } from 'prop-types';
import nProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import PageWrapper from '../components/PageWrapper';
import withData from '../lib/withData';

import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeEnd', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
  apollo: any,
};

export default withData(MyApp);

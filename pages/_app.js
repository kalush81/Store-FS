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

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);

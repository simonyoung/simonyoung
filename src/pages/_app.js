import App from 'next/app';
import Layout from 'components/Layout';

import 'styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}

export default MyApp;

import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Project Name - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

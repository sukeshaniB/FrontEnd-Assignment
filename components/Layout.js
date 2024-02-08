import Head from 'next/head';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Cat App</title>
        <meta name="description" content="Explore random cat images and details." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchRandomCat } from '../utils/api';
import Layout from '../components/Layout';

const Home = () => {
  const { data: catData, isLoading, isError, error } = useQuery('randomCat', fetchRandomCat);
  const router = useRouter();

  useEffect(() => {
    if (catData) {
      console.log('Random Cat Data:', catData);
    }
  }, [catData]);

  const handleCatClick = (id) => {
    router.push(`/cat/${id}`);
  };

  return (
    <Layout>
      <h1>Random Cat Page</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {catData && (
        <Card onClick={() => handleCatClick(catData.id)} style={{ cursor: 'pointer' }}>
          <img src={catData.url} alt="Random Cat" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="subtitle1">Click for Details</Typography>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};

export default Home;

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchCatDetails } from '../../utils/api';
import Layout from '../../components/Layout';

const CatDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: catDetails, isLoading, isError, error } = useQuery(['catDetails', id], () => fetchCatDetails(id));

  useEffect(() => {
    if (catDetails) {
      console.log('Cat Details:', catDetails);
    }
  }, [catDetails]);

  return (
    <Layout>
      <h1>Cat Details Page</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {catDetails && (
        <Card>
          <img src={catDetails.url} alt="Cat" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="h6">{catDetails.breeds[0]?.name || 'Unknown Breed'}</Typography>
            <Typography variant="body2">{catDetails.breeds[0]?.description || 'No description available.'}</Typography>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};

export default CatDetails;

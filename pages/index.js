import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown, Favorite } from '@mui/icons-material';
import { fetchRandomCat } from '../utils/api';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Home = () => {
  const { data: catData, isLoading, isError, error, refetch } = useQuery('randomCat', fetchRandomCat);
  const [refreshKey, setRefreshKey] = useState(0);
  const [liked, setLiked] = useState(false); // State to track if the cat is liked
  const [disliked, setDisliked] = useState(false); // State to track if the cat is disliked
  const router = useRouter();

  useEffect(() => {
    if (catData) {
      console.log('Random Cat Data:', catData);
    }
  }, [catData]);

  const handleCatClick = () => {
    router.push(`/cat/${catData.id}`);
  };

  const handleRefreshClick = () => {
    // Increment the refreshKey to force a refetch of the random cat image
    setRefreshKey((prevKey) => prevKey + 1);
    refetch();
    // Reset like and dislike states
    setLiked(false);
    setDisliked(false);
  };

  const handleLikeClick = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislikeClick = () => {
    setLiked(false);
    setDisliked(true);
  };

  return (
    <Layout>
      <h1>Random Cat Page</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {catData && (
        <Card style={{ maxWidth: '580px' }}>
          <img
            src={catData.url}
            alt="Random Cat"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <CardContent>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <IconButton color={liked ? 'error' : 'default'} onClick={handleLikeClick}>
                    <Favorite />
                  </IconButton>
                </div>
                <div>
                  <IconButton color={liked ? 'primary' : 'default'} onClick={handleLikeClick}>
                    <ThumbUp />
                  </IconButton>
                  <IconButton color={disliked ? 'primary' : 'default'} onClick={handleDislikeClick}>
                    <ThumbDown />
                  </IconButton>
                </div>

              </div>
            </div>
            <Typography variant="subtitle1" onClick={handleCatClick} style={{ cursor: 'pointer' }}>
              Click for Details
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRefreshClick}>
              Change Random Image
            </Button>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};

export default Home;

import { Card, CardContent, Typography } from '@mui/material';

const CatCard = ({ catData, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={catData.url} alt="Random Cat" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="subtitle1">Click for Details</Typography>
      </CardContent>
    </Card>
  );
};

export default CatCard;

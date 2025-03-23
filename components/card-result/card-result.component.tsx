import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ImageComponentProps } from '../../types';
import { Box, Rating } from '@mui/material';

interface StarRatingProps {
  rating: number;
}

const getStarCount = (rating: number): number => {
  if (rating >= 9) return 5;
  if (rating >= 7) return 4;
  if (rating >= 5) return 3;
  if (rating >= 3) return 2;
  if (rating >= 1) return 1;
  return 0;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starCount = React.useMemo(() => getStarCount(rating), [rating]);

  return <Rating name="read-only" value={starCount} readOnly />;
};

export default function CardComponent(props: ImageComponentProps) {
  const { href, title, description, rating, button1, button2 } = props;
  return (
    <Card sx={{ width: 'auto', maxWidth: 618, boxShadow: 12 }}>
      <CardMedia component="img" image={href} alt={href} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <StarRating rating={rating} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          {button1 && <Box sx={{ marginRight: 1 }}>{button1}</Box>}
          {button2 && <Box sx={{ marginLeft: 1 }}>{button2}</Box>}
        </Box>
      </CardContent>
    </Card>
  );
}

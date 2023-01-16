import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from 'shared/components/Button';
import MemeImage from 'shared/components/MemeImage';
import Image from '@/assets/images/meme2.jpg';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Page1: React.FC = () => (
  <div>
    <h2>This is page 2 of app2</h2>
    <p>This page has a button and 2 meme images!! (one is imported from shared)</p>
    <Button>Wow! These a great memes!</Button>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>
          <MemeImage />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <div>
            <img src={Image} alt="Meme 2" />
          </div>
        </Item>
      </Grid>
    </Grid>

    <p>
      Go to <Link to="../page-1">page-1</Link>
    </p>
  </div>
);

export default Page1;

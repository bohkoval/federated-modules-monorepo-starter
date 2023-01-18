import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import MemeImage from 'shared/components/MemeImage';
import SomeForm from 'shared/components/SomeForm';

const Page1: React.FC = () => (
  <div>
    <h2>This is page 2 of app1</h2>
    <p>This page has a button and a meme image</p>
    <Button>This is great meme</Button>
    <MemeImage />
    <p>Some form:</p>
    <SomeForm />
    <p>
      Go to <Link to="../page-1">page-1</Link>
    </p>
  </div>
);

export default Page1;

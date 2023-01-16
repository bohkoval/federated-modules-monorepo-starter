import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'shared/components/Button';
import InputWithLabel from 'shared/components/InputWithLabel';

const Page1: React.FC = () => (
  <div>
    <h2>This is page 1 of app1</h2>
    <p>This page has a text input and a button</p>
    <Button>Button on app1 page1</Button>
    <InputWithLabel label="App1 page1 label" />
    <p>
      Go to <Link to="../page-2">page-2</Link>
    </p>
  </div>
);

export default Page1;

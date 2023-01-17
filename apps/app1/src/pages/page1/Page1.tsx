import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import InputWithLabel from 'shared/components/InputWithLabel';
import { useCountStore } from 'shared/stores/count';

const Page1: React.FC = () => {
  const { increment, decrement } = useCountStore();
  return (
    <div>
      <h2>This is page 1 of app1</h2>
      <p>This page has a text input and 2 buttons</p>
      <Button onClick={increment}>Button on app1 page1 - increment</Button>
      <Button onClick={decrement}>Button on app1 page1 - decrement</Button>
      <InputWithLabel label="App1 page1 label" />
      <p>
        Go to <Link to="../page-2">page-2</Link>
      </p>
    </div>
  );
};

export default Page1;

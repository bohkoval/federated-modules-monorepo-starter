import * as React from 'react';
import { Helmet } from 'react-helmet';

const Root: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Root title</title>
      </Helmet>
      <div>Just a root page</div>
    </>
  );
};

export default Root;

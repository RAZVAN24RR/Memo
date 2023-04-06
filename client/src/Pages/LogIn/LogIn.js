//Classic Imports
import React from 'react';

//CSS Imports
import './LogIn';

//Components Imports
import NAV from '../../Components/Nav/NAV';

const LogIn = () => {
  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'Back', path: '/' },
          { key: 1, name: 'SignUp', path: '/SignUp' },
        ]}
      />
    </>
  );
};
export default LogIn;

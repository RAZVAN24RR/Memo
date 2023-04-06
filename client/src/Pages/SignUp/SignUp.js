//Classic Imports
import React from 'react';

//CSS Imports
import './SignUp';

//Components Imports
import NAV from '../../Components/Nav/NAV';

const SignUp = () => {
  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'Back', path: '/' },
          { key: 1, name: 'LogIn', path: '/LogIn' },
        ]}
      />
    </>
  );
};
export default SignUp;

import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function AuthRoute({ component: Component, handleSucessToast, handleErrorToast, ...rest }){
  const { user } = useContext(AuthContext);
  return (
    <Route 
      {...rest}
      render={props => 
      user ? <Redirect to="/" /> : <Component {...props} handleSucessToast={handleSucessToast} handleErrorToast={handleErrorToast}/>
    }
    />
  );
}

export default AuthRoute;
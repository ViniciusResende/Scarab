import React from 'react';
import { Route } from 'react-router-dom';

function HomeRoute({ component: Component, handleSucessToast, handleErrorToast, ...rest }){
  return (
    <Route 
      {...rest}
      render={props => 
      <Component {...props} handleSucessToast={handleSucessToast} handleErrorToast={handleErrorToast}/>
    }
    />
  );
}

export default HomeRoute;
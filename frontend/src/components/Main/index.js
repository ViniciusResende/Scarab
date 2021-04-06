import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';


import AuthRoute from '../../utils/AuthRoute';
import HomeRoute from '../../utils/HomeRoute';

import HomePage from '../HomePage';
import Login from '../Login';
import Register from '../Register';
import InspectPost from '../InspectPost';
import BottomMenu from '../BottomMenu/index';

function Main() {

  const toastConfig = {
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    zIndex: 10001,
  }
  const successToast = (message) => toast.success(`✅ ${message}`, toastConfig);
  const errorToast = (message) => toast.error(`${message}`, toastConfig);

  const handleSucessToast = (message) => successToast(message);
  const handleErrorToast = (message) => errorToast(message);
  return(     
    <Container>
      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />          
      <HomeRoute exact path='/' component={HomePage} handleErrorToast={handleErrorToast}/>
      <AuthRoute exact path='/login' component={Login} handleSucessToast={handleSucessToast} handleErrorToast={handleErrorToast}/>
      <AuthRoute exact path='/register' component={Register} handleSucessToast={handleSucessToast} handleErrorToast={handleErrorToast}/>
      <Route exact path="/posts/:postId" component={InspectPost} />
      <BottomMenu />
    </Container>
  );
}

export default Main;
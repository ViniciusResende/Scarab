import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './styles';

import Main from '../Main';
import SideBarMenu from '../SideBarMenu';

import { MenuProvider } from '../../context/MenuContext';
import { AuthProvider } from '../../context/auth';

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuProvider>
            <SideBarMenu />
            <Main />
          </MenuProvider>
        </Container>    
      </Router>
    </AuthProvider>
  );
}

export default Layout;
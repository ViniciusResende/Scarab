import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, IconContainer, HomeIcon, ButtonRightBox, SingUpIcon, LoginIcon, LogoutIcon } from './styles';

import { AuthContext } from '../../context/auth';
import { MenuContext } from '../../context/MenuContext';

function BottomMenu() {
  const { user, logout } = useContext(AuthContext);
  const { activeItem, handleItemClick } = useContext(MenuContext);

  const handleLogOut = () => {
    logout();
    handleItemClick('home');
  }

  const BottomMenu = !user ? (
    <Container>
      <IconContainer name="home" as={ Link } to="/" onClick={() => handleItemClick('home')}>
        {activeItem === 'home' ? <HomeIcon className="active"/> : <HomeIcon />}       
      </IconContainer>
      <ButtonRightBox>
        <IconContainer name="register" as={ Link } to="/register" onClick={() => handleItemClick('register')}>    
          {activeItem === 'register' ? <SingUpIcon className="active"/> : <SingUpIcon />}
        </IconContainer>             
        <IconContainer name="login" as={ Link } to="/login" onClick={() => handleItemClick('login')}>
          {activeItem === 'login' ? <LoginIcon className="active"/> : <LoginIcon />}       
        </IconContainer>            
      </ButtonRightBox>
    </Container>
  ) : (
    <Container>
      <IconContainer as={ Link } to="/">
        <HomeIcon className="active"/>        
      </IconContainer>
      <ButtonRightBox>            
        <IconContainer onClick={handleLogOut}>
          <LogoutIcon className="logout"/>      
        </IconContainer>            
      </ButtonRightBox>
    </Container>
  )
  return BottomMenu;
}

export default BottomMenu;
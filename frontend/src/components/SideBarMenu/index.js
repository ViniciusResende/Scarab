import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, TopSide, Logo, MenuButton, HomeIcon, SingUpIcon, LoginIcon, BotSide, Avatar, ProfileData, ExitIcon } from './styles';

import { AuthContext } from '../../context/auth';
import { MenuContext } from '../../context/MenuContext';
function SideBarMenu() {
  const { user, logout } = useContext(AuthContext);
  const { activeItem, handleItemClick } = useContext(MenuContext);

  const handleLogOut = () => {
    logout();
    handleItemClick('home');
  }

  const sideMenu = !user ?(
    <Container>
      <TopSide>
          <Logo />

          <MenuButton className={activeItem === 'home' ? "active" : ''} name="home" as={ Link } to="/" onClick={() => handleItemClick('home')}>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>
      </TopSide>

      <BotSide>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MenuButton className={activeItem === 'register' ? "active" : ''} name="register" as={ Link } to="/register" onClick={() => handleItemClick('register')}>
            <SingUpIcon />
            <span>Register</span>
          </MenuButton>

          <MenuButton className={activeItem === 'login' ? "active" : ''} name="login" as={ Link } to="/login" onClick={() => handleItemClick('login')}>
            <LoginIcon />
            <span>Login</span>
          </MenuButton>
        </div>
      </BotSide>
    </Container>
  ) : (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton className={activeItem === 'home' ? "active" : ''} name="home" as={ Link } to="/" onClick={() => handleItemClick('home')}>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>        

      </TopSide>

      <BotSide>
        <Avatar style={{backgroundImage: `url(${user.pictureURL})`}}/>

        <ProfileData>
          <strong>{user.username}</strong>
          <span>@{user.username}</span>
        </ProfileData>

        <ExitIcon onClick={handleLogOut}/>
      </BotSide>
    </Container>
  )
  return sideMenu;
}

export default SideBarMenu;
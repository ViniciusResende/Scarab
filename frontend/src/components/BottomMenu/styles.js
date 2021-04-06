import styled, { css }  from 'styled-components';
import { Home, Login, PersonAdd, ExitToApp } from '../../styles/icons'

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonRightBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > a {
    margin: 0 1rem;
  }
`;

const iconCss = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  transition: all 0.3s ease;

  &:hover,
  &.active {
    fill: var(--razer);
  }
  &.logout:hover{
    fill: var(--like);
  }
`;

export const HomeIcon = styled(Home)`${iconCss}`;
export const SingUpIcon = styled(PersonAdd)`${iconCss}`;
export const LoginIcon = styled(Login)`${iconCss}`;
export const LogoutIcon = styled(ExitToApp)`${iconCss}`;

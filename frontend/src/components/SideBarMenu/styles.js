import styled, { css } from 'styled-components';

import { Home, Login, PersonAdd, ExitToApp, BugFill } from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    height: 100vh;
    overflow-y: auto;
  }
`;


export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px){
    align-items: flex-start;
  }
`;

export const Logo = styled(BugFill)`
  width: 41px;
  height: 41px;
  padding: 8.25px;
  border-radius: 50%;
  > path {
    fill: var(--razer);
  }
  margin: 0 auto 20px;

  &:hover{
    background: var(--razer-dark-hover);
  }

  cursor: pointer;
  transition: all 0.2s ease;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  > span {
    display: none;
    transition: all 0.2s ease;
  }

  @media (min-width: 1280px){
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
    border-radius: 25px;
    padding: 8.25px 15px;
  }

  padding: 8.25px 8.25px;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px){
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;

  &:hover {
    background: var(--razer-dark-hover)
  }

  &:hover, &.active {
    span, svg {
      color: var(--razer);
      fill: var(--razer);
    }
  }
`;

const iconCss = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
  transition: all 0.2s ease;
`;


export const HomeIcon = styled(Home)`${iconCss}`;
export const SingUpIcon = styled(PersonAdd)`${iconCss}`;
export const LoginIcon = styled(Login)`${iconCss}`;

export const BotSide = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px){
    flex-direction: row;
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
  background-size: 39px 39px;
`;
export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px){
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  order: -1;
  display: inline-block;
  width: 25px;
  height: 25px;
  color: var(--white);
  margin-bottom: 10px;

  cursor: pointer;
  > path {
    transition: all 0.2s ease;
  }

  @media (min-width: 1280px){
    order: initial;
    margin-left: 30px;
    margin-bottom: 0;
  }

  &:hover{
    > path {
      color: var(--like);
    }
  }
`;
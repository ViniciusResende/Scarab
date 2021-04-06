import styled from 'styled-components';

import { ArrowLeft } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: var(--razer);
    margin: 2rem 0;
  }
`;

export const NavBar = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  width: 100%;

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;

  border-bottom: 1px solid var(--outline);

`;

export const BackButton = styled.button`
  padding: 8px;
  border-radius: 50%;

  outline: 0;
  cursor: pointer;

  &:hover {
    background: var(--razer-dark-hover);
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--razer);
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4.25rem;

  width: min(501px , 90%);
`;

export const SubmitArea = styled.div`
  width: 100%;
  > input {
    width: 100%;
    padding: 0.5rem;
    position: relative;

    border: 1px solid var(--razer);
    border-radius: 5rem;
    
    font-weight: bold;

    cursor: pointer;
    z-index: 2;
    transition: color 0.4s ease;

    &:hover{
      color: #000;
    }
  }

  &::after{
    box-sizing: border-box;
    border-radius: 5rem;
    content: ' ';
    top: -100%;
    display: block;
    height: 100%;
    line-height: 0;
    position: relative;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.4s ease;
  }

  &:hover::after {
    background-color: var(--razer);
    content: ' ';
    top: -100%;
    display: block;
    height: 100%;
    line-height: 0;
    position: relative;
    transform: scaleX(1);
    transition: all 0.4s ease;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    margin: 0.5rem 0.75rem;
  }

  > input {
    outline: none;
    border-bottom: 1px solid var(--razer);

    padding: 0.75rem;
    border-radius: 0;
  }

  &.onError input {
    border-bottom-color: var(--error);
  } 

  &::before {
      box-sizing: border-box;
      border-radius: 0 5rem 5rem 0;
      top: 98%;
      content: ' ';
      display: block;
      height: 0.1875rem;
      line-height: 0;
      position: relative;
      transform: scale(0);
      transform-origin: left;
      transition: all 0.4s ease;
    }

    &:hover::before {
      background-color: var(--razer);
      top: 98%;
      content: ' ';
      display: block;
      height: 0.1875rem;
      line-height: 0;
      position: relative;
      transform: scale(1);
      transition: all 0.4s ease;
    }

    &.onError:hover::before {
      background-color: var(--error);
    }

    /* > input:focus &::before {
      background-color: var(--razer);
      top: 98%;
      content: ' ';
      display: block;
      height: 0.1875rem;
      line-height: 0;
      position: relative;
      transform: scale(1);
      transition: all 0.4s ease;
    } */
`;

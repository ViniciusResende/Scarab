import styled, { css } from 'styled-components';
import { Trash } from '../../styles/icons';

export const TrashButton = styled.button`
  > svg {
    fill: var(--outline);
    transition: all 0.2s ease;
  }

  &:hover {
    > svg {
      fill: var(--gray);
    }
  }

  cursor: pointer;
`;

export const ConfirmModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;

  background: rgba(0,0,0,0.3);

  height: 100%;
  width: 100%;
`;

export const ModalContent = styled.div`
  background: var(--outline);
  border-radius: 20px;
  
  > h3 {
    margin-bottom: 0.75rem;
    padding: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0;

    border: 1px solid var(--white);
    border-radius: 0px 0px 20px 20px;

    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 0;
  width: 100%;
  outline: 0;
  &:first-child {
    border-radius: 0px 0px 0px 20px;
    &:hover{
      background: var(--error);
    }
  }

  & + &{
    border-left: 1px solid var(--white);
    border-radius: 0px 0px 20px 0px;
    &:hover{
      color: var(--primary);
      background: var(--razer);
    }
  }
  cursor: pointer;
  transition: all 0.2s ease;
`;

const iconCss = css`
  width: 19px;
  height: 19px;
`;

export const TrashIcon = styled(Trash)`${iconCss}`;

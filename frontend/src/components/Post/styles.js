import styled, { css } from 'styled-components';

import { Chat, Favorite, Trash } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  background-size: 49px 49px;

  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size:15px;
  white-space: nowrap;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px){
    width: 63%;
  }

  > div {
    cursor: pointer;
    &:hover{
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  svg {
    margin-right: 5px;
  }

  &:nth-child(1){
    &, 
    > a svg path{
      color: var(--gray);
    }
  }
  
  &:nth-child(2){
    color: var(--like);

    svg{
      fill: var(--like);
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconCss = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`${iconCss}`;
export const LikeIcon = styled(Favorite)`${iconCss}`;
export const TrashIcon = styled(Trash)`${iconCss}`;
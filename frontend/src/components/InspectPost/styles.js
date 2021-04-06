import styled, { css } from 'styled-components';

import { ArrowLeft, Chat, Favorite} from '../../styles/icons';

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: auto;

  &::after{
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--razer);
    border-color: var(--razer) transparent var(--razer) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const PostBody = styled.div`
  display: flex;
  margin-top: 3px;
  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  position: relative;
`;

export const NavBar = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;

  border-bottom: 1px solid var(--outline);

  > strong {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
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

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  font-size: 1rem;
  white-space: nowrap;
`;

export const PostLeftSideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > div:last-child {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    > strong {
      margin-right: 5px;
    }
    > span {
      color: var(--gray);
    }
    > strong, span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const PostRightSideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostAvatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  background-size: 49px 49px;

`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const PostDescription = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const TimeSection = styled.div`
  display: flex;
  align-items: center;

  font-size:15px;
  white-space: nowrap;

  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--outline);

  > time {
    color: var(--gray);
  }

  > time:first-child {
    text-transform: uppercase;
  }
`;

export const LikeSection = styled.div`
  display: flex;
  
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--outline);

  > strong {
    margin-right: 0.5rem;
  }
`

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

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 100%;

  border-bottom: 1px solid var(--outline);
`;

export const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  > input {
    outline: 0;
    width: 100%;
    padding: 0.75rem;
    font-size: 1.25rem;

    border-bottom: 1px solid var(--razer);

    &::placeholder{
      font-size: 1.25rem;
    }
  }
`;

export const CommentSubmitArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: 0;
  margin: 1rem;
  
  > input {
    color: #fff;
    font-weight: bold;
    padding: 0.5rem 2rem;
    background: var(--primary);
    border-radius: 3rem;
    border: 1px solid var(--razer);
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  border-bottom: 1px solid var(--outline);

  width: 100%;
  margin-top: 2px;
  padding: 10px 0;
  padding-left: 20px;
`;

export const CommentAvatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  background-size: 49px 49px;

`;

export const CommentContent = styled.div`
  padding: 0 20px;
  width: 100%;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size:15px;
  white-space: nowrap;

  
`;

export const CommentLeftSideHeader = styled.div`
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

export const CommentRightSideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentDescription = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
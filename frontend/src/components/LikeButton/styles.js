import styled, { css } from 'styled-components';
import { Favorite, FavoriteBorder } from '../../styles/icons';

export const Container = styled.div`
  
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


export const LikeIcon = styled(Favorite)`${iconCss}`;
export const LikeIconOutlined = styled(FavoriteBorder)`${iconCss}`;
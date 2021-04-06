import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../../context/auth';
import LikeButton from '../LikeButton';
import DeleteButton from '../DeleteButton';

import { Container, Body, Avatar, Content, Header, LeftSide, RightSide, Dot, Description, Icons, Status, IconContainer, CommentIcon } from './styles';

function Post({post: { body, createdAt, id, username, pictureURL, likeCount, commentCount, likes }}) {
  const { user } = useContext(AuthContext);
  
  return (
    <Container>    
      <Body>
        <Avatar style={{backgroundImage: `url(${pictureURL})`}}/>

        <Content>
          <Header>
            <LeftSide>
              <strong>{username}</strong>
              <span>@{username}</span>
              <Dot />
              <time>{moment(createdAt).fromNow(true)}</time>
            </LeftSide>
            <RightSide>
              {user && user.username === username && <DeleteButton postId={id} />}
            </RightSide>            
          </Header>
          <Description>{body}</Description>

          <Icons>
            <Status>
              <IconContainer as={Link} to={`/posts/${id}`}>
                <CommentIcon />
              </IconContainer>
              {commentCount}
            </Status>
            <Status>
              <LikeButton user={ user } post={{ id, likes, likeCount }}/>
              {likeCount}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Post;
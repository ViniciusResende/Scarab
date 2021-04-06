import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { LikeIcon, LikeIconOutlined, IconContainer } from './styles';

function LikeButton({ user, post: { id, likeCount, likes} }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if(user && likes.find(like => like.username === user.username)){
      setLiked(true);
    } else {
      setLiked(false);
    }
  },[user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id }
  });

  const likeButton = user ? (
    liked ? (
      <LikeIcon onClick={likePost}/>
    ) : (
      <LikeIconOutlined onClick={likePost}/>
    )
  ) : (
    <IconContainer as={Link} to="/login" >
      <LikeIconOutlined />
    </IconContainer>      
  )
  return likeButton;
}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!){
    likePost(postId: $postId){
      id
      likes{
        id username
      }
      likeCount
    }
  }
`

export default LikeButton;
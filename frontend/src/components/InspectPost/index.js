import React, { useContext, useRef, useState } from 'react';
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { 
  LoadingSpinner,
  Container, 
  PostBody, 
  NavBar,
  BackButton, 
  BackIcon, 
  PostContent, 
  PostAvatar,
  PostHeader,
  PostLeftSideHeader,
  PostRightSideHeader,
  Dot,
  PostDescription,
  TimeSection,
  LikeSection,
  Icons,
  Status,
  IconContainer,
  CommentForm,
  CommentInputContainer,
  CommentSubmitArea,
  CommentIcon,
  CommentBody,
  CommentAvatar,
  CommentContent,
  CommentHeader,
  CommentLeftSideHeader,
  CommentRightSideHeader,
  CommentDescription,
 } from './styles';

import { AuthContext } from '../../context/auth';
import LikeButton from '../LikeButton';
import DeleteButton from '../DeleteButton';

function InspectPost(props) {
  const postId = props.match.params.postId;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');

  const { data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId
    }
  })

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update(){
      setComment('');
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment
    }
  })

  function deletePostCallback(){
    props.history.push('/');
  }

  let postMarkup;
  if(!data){
    postMarkup = <LoadingSpinner></LoadingSpinner>
  } else {
    const { 
      id, 
      body, 
      createdAt, 
      username, 
      pictureURL,
      comments, 
      likes, 
      likeCount       
    } = data.getPost;    
    
    postMarkup = (
      <Container>    
        <NavBar>
          <BackButton as={Link} to="/">
            <BackIcon />
          </BackButton>
          <strong>Post</strong>
        </NavBar>        
        <PostBody>
          <PostContent>
            <PostHeader>
              <PostLeftSideHeader>
                <PostAvatar style={{backgroundImage: `url(${pictureURL})`}}/>
                <div>
                  <strong>{username}</strong>
                  <span>@{username}</span>
                </div>
              </PostLeftSideHeader>
              <PostRightSideHeader>
                {user && user.username === username && <DeleteButton postId={id} callback={deletePostCallback}/>}
              </PostRightSideHeader> 
            </PostHeader>
            <PostDescription>{body}</PostDescription>
              <TimeSection>
                <time>{moment(createdAt).format('h:mm a')}</time>
                <Dot />
                <time>{moment(createdAt).format('LL')}</time>
              </TimeSection>
              <LikeSection>
                <strong>{likeCount}</strong><span>Likes</span>
              </LikeSection>
            <Icons>
              <Status>
                <IconContainer as={Link} to={`/posts/${id}`}>
                  <CommentIcon />
                </IconContainer>
              </Status>
              <Status>
                <LikeButton user={ user } post={{ id, likes, likeCount }}/>
              </Status>
            </Icons>
          </PostContent>
        </PostBody>
        {user && (
            <CommentForm>
              <CommentInputContainer>                  
                <input 
                  name="body" 
                  type="text" 
                  placeholder="Digite um comentário..." 
                  onChange={e => setComment(e.target.value)} 
                  value={comment}
                  ref={commentInputRef}
                />                      
              </CommentInputContainer>
              <CommentSubmitArea>
                <input 
                  type="submit" 
                  value="Comment" 
                  disabled={comment.trim() === ''}
                  onClick={submitComment}
                />
              </CommentSubmitArea>
          </CommentForm>
        )}
       {comments.map(comment => (
          <CommentBody key={comment.id}>
          <CommentAvatar style={{backgroundImage: `url(${comment.pictureURL})`}}/>  
          <CommentContent>
            <CommentHeader>
              <CommentLeftSideHeader>
                <strong>{comment.username}</strong>
                <span>@{comment.username}</span>
                <Dot />
                <time>{moment(comment.createdAt).fromNow(true)}</time>
              </CommentLeftSideHeader>
              <CommentRightSideHeader>
                {user && user.username === comment.username && (
                  <DeleteButton postId={id} commentId={comment.id} />
                )}
              </CommentRightSideHeader>
            </CommentHeader>
            <CommentDescription>{comment.body}</CommentDescription>
          </CommentContent>
        </CommentBody>
        ))} 
      </Container>      
    )
  }
  return postMarkup;
}

const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: ID!, $body: String!){
    createComment(postId: $postId, body: $body){
      id
      comments{
        id body createdAt pictureURL username
      }
      commentCount
    }
  }
`

const FETCH_POST_QUERY = gql`
  query($postId: ID!){
    getPost(postId: $postId){
      id body createdAt username pictureURL likeCount
      likes {
        username
      }
      commentCount
      comments{
        id username createdAt pictureURL body
      }
    }
  }
`

export default InspectPost;
import React, { createRef, useContext, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { Container, Form, Avatar, InputContainer , SubmitArea } from './styles';

import { AuthContext } from '../../context/auth';
import { useForm } from '../../utils/hook';
import { FETCH_POSTS_QUERY } from '../../utils/graphql';

function CreatePost({ handleErrorToast }) {
  const { user } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: ''
  });

  const [error, setError] = useState('');
  
  const formRef = createRef(null);
  
  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result){
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      console.log(data);
      let newData = [...data.getPosts];
      newData = [result.data.createPost, ...newData];
      proxy.writeQuery({ 
        query: FETCH_POSTS_QUERY, 
        data: {
          ...data,
          getPosts: {
            newData,
          },
        }, 
      });
      values.body = '';
    },
    onError(err){
      const errorsObjetct = err.message;
      setError(errorsObjetct);
      errorsObjetct && handleErrorToast(errorsObjetct);
    }
    
  });

  function createPostCallback(){
    createPost();
    resetForm();
  }
  
  const resetForm = () => {
    formRef.current.reset();
  }

  return (
    <Container>
      <h2>Create a Post </h2> 
      <Form onSubmit={onSubmit} ref={formRef}>
        <InputContainer>
          <Avatar style={{backgroundImage: `url(${user.pictureURL})`}}/>
          {!error ?
            <input name="body" type="text" placeholder="O que está acontecendo?" onChange={onChange} />
            : 
            <input className="onError" name="body" type="text" placeholder="O que está acontecendo?" onChange={onChange} />
          }
        </InputContainer>
        <SubmitArea>
          <input type="submit" value="Post" />
        </SubmitArea>
      </Form>
    </Container>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!){
    createPost(body: $body){
      id body createdAt username pictureURL
      likes{
        id username createdAt
      }
      likeCount
      comments{
        id body username pictureURL createdAt
      }
      commentCount
    }
  }
`

export default CreatePost;
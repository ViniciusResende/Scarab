import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client'

import { TrashButton, TrashIcon, ConfirmModal, ModalContent, Button, } from './styles';

import { FETCH_POSTS_QUERY } from '../../utils/graphql';

function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

  const [deletePostOrComment] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if(!commentId){
        const data = proxy.readQuery({
          query: FETCH_POSTS_QUERY
        });
        let newData = [...data.getPosts];
        newData = [data.getPosts.filter(p => p.id !== postId), ...newData];
        proxy.writeQuery({ 
          query: FETCH_POSTS_QUERY, 
          data: {
            ...data,
            getPosts: {
              newData,
            },
          }, 
        });
      }
      if(callback) callback();
    },    
    variables: {
      postId,
      commentId
    }
  })

  return (
    	<>
        <TrashButton onClick={() => setConfirmOpen(true)}>
          <TrashIcon />
        </TrashButton>
        {confirmOpen && (
          <ConfirmModal>
            <ModalContent>
              <h3>Deseja apagar o {commentId ? 'Comentário' : 'Post'}?</h3>
              <div>
                <Button onClick={() => setConfirmOpen(false)}>Cancelar</Button>
                <Button onClick={deletePostOrComment}>Confirmar</Button>
              </div>  
            </ModalContent>
          </ConfirmModal>
        )}
      </>
  );
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!){
    deletePost(postId: $postId)
  }
`

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!){
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id 
        username
        createdAt
        body
      }
      commentCount
    }
  }
`

export default DeleteButton;
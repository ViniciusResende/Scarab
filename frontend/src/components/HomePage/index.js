import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import { AuthContext } from '../../context/auth';
import Post from '../Post';
import CreatePost from '../CreatePost';
import { FETCH_POSTS_QUERY } from '../../utils/graphql';

import { Container, Tab, Posts } from './styles';

function HomePage({ handleErrorToast }) {
  const { user } = useContext(AuthContext);

  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Container>
      {user && <CreatePost handleErrorToast={handleErrorToast}/>}
      <Tab>Posts</Tab>
      <Posts>
        {data && data.getPosts.map(post => (
          <Post post={post} key={post.id}/>
        ))}
      </Posts>
    </Container>
  );
}

export default HomePage;
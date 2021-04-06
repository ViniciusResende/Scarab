import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
  query{
    getPosts{
    id body createdAt username pictureURL likeCount
    likes{
      username
    }
    commentCount
    comments{
      id username createdAt pictureURL body
    }
  }
  }
`
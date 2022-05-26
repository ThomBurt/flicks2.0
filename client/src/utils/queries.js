import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const PROFILE = gql `
    query {
        profile {
            _id
            username
            firstName
            lastName
            email
            images {
                url
                public_id
            }
            headline
            createdAt 
        }
    }    
`
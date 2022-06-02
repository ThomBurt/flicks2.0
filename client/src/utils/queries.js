import { gql } from '@apollo/client';

import { USER_INFO } from './Fragments';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const PROFILE = gql`
    query {
        profile {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const EXPERIENCES = gql`
    query {
        profile {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

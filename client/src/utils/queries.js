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

export const USER_WITH_EXPERIENCES = gql `
      query User($id: ID!) {
        user(_id: $id) {
          _id
          experiences {
            _id
            movie {
              title
              year
              plot
              image_url
              _id
            }
            restaurant {
              name
              location
              url
              image_url
              rating
              _id
            }
            drink {
              name
              description
              image_url
              _id
            }
          }
        }
      }
`;

export const EXPERIENCES = gql`
    query {
        profile {
            ...userInfo
        }
    }
    ${USER_INFO}
`;


export const EXPERIENCE = gql `
      query Experience($id: ID!) {
        experience(_id: $id) {
          _id
          movie {
            title
            year
            plot
            image_url
            _id
          }
          restaurant {
            _id
            name
            location
            url
            image_url
            rating
          }
          drink {
            _id
            name
            description
            image_url
          }
          createdAt
        }
      }
`;
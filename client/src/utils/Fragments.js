import { gql } from 'apollo-boost';

export const USER_INFO = gql`
    fragment userInfo on User {
        _id
        firstName
        lastName
        username
        email
        experiences {
            movie
            dinner
            drink
        }
        images {
            url
            public_id
        }
        headline
        createdAt
    }
`;

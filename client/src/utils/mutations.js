import { gql } from '@apollo/client';

import { USER_INFO } from './Fragments';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      username
      firstName
      lastName
    }
  }
}
`;

// export const USER_UPDATE = gql `
//     mutation userUpdate($input: UserUpdateInput!) {
//         userUpdate(input: $input) {
//             _id
//             username
//             firstName
//             lastName
//             email
//             images {
//                 url
//                 public_id
//             }
//             headline
//             createdAt 
//         }
//     }
// `
export const USER_UPDATE = gql`
    mutation userUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            ...userInfo
        }
    }
    ${USER_INFO}
`;


// export const SAVE_MOVIE = gql`
//     mutation saveMovie($movieData: MovieInput!) {
//         saveMovie(movieData: $movieData) {
//         savedMovies {
//           title,
//           year,
//           image,
//           plot,
//           streaming 
//           }
//         }
//     }
// `;

export const SAVE_MOVIE = gql`
    mutation saveMovie($title: String!, $year: String, $plot: String, $image_url: String!) {
        saveMovie(title: $title, year: $year, plot: $plot, image_url: $image_url) {
        savedMovies {
          title,
          year,
          image,
          plot,
          streaming 
          }
        }
    }
`;


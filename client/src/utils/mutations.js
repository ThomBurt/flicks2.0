import { gql } from '@apollo/client';

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

//     add?    _id username email
export const SAVE_MOVIE = gql`
    mutation saveMovie($movieData: MovieInput!) {
        saveMovie(movieData: $movieData) {
        savedMovies {
          movieId,
          title,
          year,
          image,
          plot
          }
        }
    }
`;



export const USER_UPDATE = gql `
    mutation userUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
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
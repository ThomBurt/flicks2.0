const { gql } = require('apollo-server-express');

const typeDefs = gql`


  scalar DataTime

  type Image {
      url: String
      public_id: String
  }

  type Movie {
    _id: ID!
    title: String
    year: String
    plot: String
    image_url: String
  }

  type Dinner {
    _id: ID!
    name: String
    location: String
    url: String
    image_url: String
  }

  type Drink {
    _id: ID!
    name: String
    description: String
    image_url: String
  }

  type Experiences {
    _id: ID!
    movie: [Movie]
    dinner: [Dinner]
    drink: [Drink]
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    email: String
    headline: String
    images: [Image]
    experiences: [Experiences]
    createdAt: DataTime
    updatedAt: DataTime
  }


  type Auth {
    token: ID!
    user: User
  }

    
  type Restaurant {
    restaurantId: ID!
    name: String
    location: String
    url: String
    image_url: String
  }

  type Drink {
    drinkId: ID!
    name: String
    ingredients: String
  }

  # ---------------------------------------------------------------------------

  input ImageInput {
    url: String
    public_id: String
  }

  input MovieInput {
    title: String
    year: String
    plot: String
    image_url: String
  }

  input DinnerInput {
    name: String
    location: String
    url: String
    image_url: String
  }

  input DrinkInput {
    name: String
    description: String
    image_url: String
  }

  input UserUpdateInput {
    username: String
    email: String
    firstName: String
    lastName: String
    images: [ImageInput]
    headline: String
  }

  input AddExperienceInput {
    movie: [MovieInput]
    dinner: [DinnerInput]
    drink: [DrinkInput]
  }

  # ---------------------------------------------------------------------------

type Query {
  profile: User!
}


  type Query {
    me: User
    users: [User]
    user(username: String!): User
    experience: [Experiences]
    movie: [Movie]
    dinner: [Dinner]
    drink: [Drink]
  }

  # ---------------------------------------------------------------------------

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
    userUpdate(input: UserUpdateInput): User!
    addExperience(input: AddExperienceInput): Experiences!
  }


`;

module.exports = typeDefs;
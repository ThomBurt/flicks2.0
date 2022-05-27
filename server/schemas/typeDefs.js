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
    username: String
    image_url: String
    streaming: [String]
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
    user: [User]
    movie: [Movie]
    dinner: [Dinner]
    drink: [Drink]
    createdAt: String
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
    movie: [Movie]
    dinner: [Dinner]
    drink: [Drink]
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
    streaming: [String]
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
    experiences: [ExperienceInput]
    movie: [MovieInput]
    dinner: [DinnerInput]
    drink: [DrinkInput]
  }

  input ExperienceInput {
    movie: [MovieInput]
    dinner: [DinnerInput]
    drink: [DrinkInput]
    createdAt: String
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
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, image: String): Auth
    userUpdate(input: UserUpdateInput): User!
    saveMovie(movieId: ID!, title: String, year: String, plot: String, image_url: String, streaming: [String]): Movie!
    saveDinner(input: DinnerInput): Dinner!
    saveDrink(input: DrinkInput): Drink!
    addExperience(input: ExperienceInput): Experiences!
  }


`;

module.exports = typeDefs;
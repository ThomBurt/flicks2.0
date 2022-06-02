const { gql } = require('apollo-server-express');

const typeDefs = gql`


  scalar DataTime

  type Image {
      url: String
      public_id: String
  }

  type Movie {
    _id: ID
    title: String
    year: String
    plot: String
    image_url: String
    streaming: [String]
  }

  type Dinner {
    _id: ID
    name: String
    location: String
    url: String
    image_url: String
    rating: String
  }

  type Drink {
    _id: ID
    name: String
    description: String
    image_url: String
  }

  type Experiences {
    _id: ID
    user: [User]
    movie: [Movie]
    dinner: [Dinner]
    drink: [Drink]
    createdAt: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    headline: String
    images: [Image]
    experiences: [Experiences]
    createdAt: DataTime
    friends: [User]
    friendCount: Int
  }


  type Auth {
    token: ID!
    user: User
  }


  # ---------------------------------------------------------------------------

  input MovieInput {
    _id: ID
    title: String
    year: String
    plot: String
    image_url: String
    streaming: [String]
  }
  input DinnerInput {
    _id: ID
    name: String
    location: String
    url: String
    image_url: String
    rating: String
  }
  input DrinkInput {
    _id: ID
    name: String
    description: String
    image_url: String
  }


  input ImageInput {
    url: String
    public_id: String
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
    _id: ID
    movie: [MovieInput]
    dinner: [DinnerInput]
    drink: [DrinkInput]
    createdAt: String
  }

  # ---------------------------------------------------------------------------

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    experiences(username: String): [User]
    experience(_id: ID!): [Experiences]
    profile: User!
  }

  # ---------------------------------------------------------------------------

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, image: String): Auth

    userUpdate(input: UserUpdateInput): User!


    addExperience(createdAt: String): Experiences

    saveMovie(movieId: ID, title: String, plot: String, image_url: String, streaming:[String]): Experiences
    saveRestaurant(_id: ID!, restaurantId: ID!): Experiences
    saveDrink(_id: ID!, drinkId: ID!): Experiences

    addFriend(friendId: ID!): User

  }

`;

module.exports = typeDefs;



// addExperience(newExperience: AddExperienceInput): Experiences

// addExperience(newExperience: AddExperienceInput): Experiences

// saveMovie(experienceID: ID, title: String, plot: String, image_url: String, streaming:[String]): Experiences

// saveDinner(experienceID: ID, name: String, location: String, url: String, image_url: String, rating: String): Experiences

// saveDrink(experienceID: ID, name: String, description: String, image_url: String): Experiences
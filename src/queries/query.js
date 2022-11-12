import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    getBooks {
      _id
      book_name
      download_link
      categories
      sub_categories
      added_by
      status
      author
      edition
    }
  }
`;
const GET_QUESTIONS = gql`
  query {
    getQuestions {
      _id
      book_name
      download_link
      categories
      sub_categories
      added_by
      status
    }
  }
`;
const GET_SYLLABUS = gql`
  query {
    getAllSyllabus {
      _id
      book_name
      download_link
      categories
      sub_categories
      added_by
      status
    }
  }
`;
const GET_USER = gql`
  query {
    getUser(email: email) {
      _id
      displayName
      email
      password
      photoURL
      authType
      role
    }
  }
`;
const GET_USERS = gql`
  query GetUsers($token: String!) {
    getUsers(token: $token) {
      _id
      displayName
      email
      photoURL
      authType
      role
    }
  }
`;
const GET_ADMIN = gql`
  query IsAdmin($email: String!) {
    isAdmin(email: $email) {
      isAdmin
    }
  }
`;
const CREATE_USER = gql`
  mutation CreateUser(
    $displayName: String
    $email: String
    $password: String
    $authType: String
    $photoURL: String
  ) {
    createUser(
      displayName: $displayName
      email: $email
      password: $password
      authType: $authType
      photoURL: $photoURL
    ) {
      _id
    }
  }
`;
const UPDATE_PROFILE = gql`
  mutation EditProfile($photoURL: String, $token: String!){
    editProfile(photoURL: $photoURL, token: $token){
      _id
    }
  }
`;
const MAKE_ADMIN = gql`
  mutation MakeAdmin($_id: ID!, $token: String!) {
    makeAdmin(_id: $_id, token: $token) {
      _id
    }
  }
`;

export {
  GET_BOOKS,
  GET_QUESTIONS,
  GET_SYLLABUS,
  GET_USER,
  GET_ADMIN,
  GET_USERS,
  MAKE_ADMIN,
  CREATE_USER,
  UPDATE_PROFILE
};

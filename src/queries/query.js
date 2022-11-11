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
  query {
    getUsers {
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

export {
  GET_BOOKS,
  GET_QUESTIONS,
  GET_SYLLABUS,
  GET_USER,
  GET_ADMIN,
  GET_USERS,
};

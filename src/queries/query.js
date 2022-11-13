import { gql } from "@apollo/client";

// get data
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

// post data
const POST_BOOK = gql`
  mutation AddBook(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    added_by: String
    status: Boolean
    author: String
    edition: Number
    token: String
  ){
    addBook(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      author: $author
      edition: $edition
      token: $token
    ){
      _id
    }
  }
`;
const POST_QUESTION = gql`
  mutation AddQuestion(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    added_by: String
    status: Boolean
    token: String
  ){
    addQuestion(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      token: $token
    ){
      _id
    }
  }
`;
const POST_SYLLABUS = gql`
  mutation AddSyllabus(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    added_by: String
    status: Boolean
    token: String
  ){
    addSyllabus(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      token: $token
    ){
      _id
    }
  }
`;
const POST_USER = gql`
  mutation AddUser(
    $displayName: String
    $email: String
    $password: String
    $authType: String
    $photoURL: String
  ) {
    addUser(
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

// update data
const UPDATE_BOOK = gql`
  mutation EditBook(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    author: String
    edition: Number
    token: String
  ){
    editBook(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      author: $author
      edition: $edition
      token: $token
    ){
      _id
    }
  }
`;
const UPDATE_QUESTION = gql`
  mutation EditQuestion(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    token: String
  ){
    editQuestion(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      token: $token
    ){
      _id
    }
  }
`;
const UPDATE_SYLLABUS = gql`
  mutation EditSyllabus(
    book_name: String
    download_link: String
    categories: String
    sub_categories: String
    token: String
  ){
    editSyllabus(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      token: $token
    ){
      _id
    }
  }
`;
const UPDATE_PROFILE = gql`
  mutation EditProfile($photoURL: String, $token: String!) {
    editProfile(photoURL: $photoURL, token: $token) {
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

// delete data
const DELETE_BOOK = gql`
  mutation DeleteBook(_id: ID,token: String){
    deleteBook(_id: $_id,token: $token){
      _id
    }
  }
`;
const DELETE_QUESTION = gql`
  mutation DeleteQuestion(_id: ID,token: String){
    deleteQuestion(_id: $_id,token: $token){
      _id
    }
  }
`;
const DELETE_SYLLABUS = gql`
  mutation DeleteSyllabus(_id: ID,token: String){
    deleteSyllabus(_id: $_id,token: $token){
      _id
    }
  }
`;

export {
  GET_USER,
  GET_BOOKS,
  GET_ADMIN,
  GET_USERS,
  GET_QUESTIONS,
  GET_SYLLABUS,
  POST_USER,
  POST_BOOK,
  POST_QUESTION,
  POST_SYLLABUS,
  MAKE_ADMIN,
  UPDATE_BOOK,
  UPDATE_PROFILE,
  UPDATE_QUESTION,
  UPDATE_SYLLABUS,
  DELETE_BOOK,
  DELETE_QUESTION,
  DELETE_SYLLABUS,
};

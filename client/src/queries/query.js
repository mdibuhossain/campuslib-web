import { gql } from "@apollo/client";

// get data
const GET_DEPARTMENTS = gql`
  query GetDepartments {
    getDepartments
  }
`;
const GET_ALL_DATA = gql`
  query GetAllData {
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
      semester
    }
    getQuestions {
      _id
      book_name
      download_link
      categories
      sub_categories
      added_by
      status
    }
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
const GET_BOOKS = gql`
  query GetBooks {
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
      semester
    }
  }
`;
const GET_QUESTIONS = gql`
  query GetQuestions {
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
  query GetAllSyllabus {
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
  query GetUser($email: String) {
    getUser(email: $email) {
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
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $added_by: String
    $status: Boolean
    $author: String
    $edition: String
    $semester: [String]
    $token: String
  ) {
    addBook(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      author: $author
      edition: $edition
      semester: $semester
      token: $token
    ) {
      _id
      book_name
      download_link
      categories
      sub_categories
      added_by
      status
      author
      edition
      semester
    }
  }
`;
const POST_QUESTION = gql`
  mutation AddQuestion(
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $added_by: String
    $status: Boolean
    $token: String
  ) {
    addQuestion(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      token: $token
    ) {
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
const POST_SYLLABUS = gql`
  mutation AddSyllabus(
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $added_by: String
    $status: Boolean
    $token: String
  ) {
    addSyllabus(
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      added_by: $added_by
      status: $status
      token: $token
    ) {
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
    $_id: ID
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $author: String
    $semester: [String]
    $edition: String
    $token: String
  ) {
    editBook(
      _id: $_id
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      author: $author
      semester: $semester
      edition: $edition
      token: $token
    ) {
      _id
    }
  }
`;
const UPDATE_QUESTION = gql`
  mutation EditQuestion(
    $_id: ID
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $token: String
  ) {
    editQuestion(
      _id: $_id
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      token: $token
    ) {
      _id
    }
  }
`;
const UPDATE_SYLLABUS = gql`
  mutation EditSyllabus(
    $_id: ID
    $book_name: String
    $download_link: String
    $categories: String
    $sub_categories: String
    $token: String
  ) {
    editSyllabus(
      _id: $_id
      book_name: $book_name
      download_link: $download_link
      categories: $categories
      sub_categories: $sub_categories
      token: $token
    ) {
      _id
    }
  }
`;
const UPDATE_PROFILE = gql`
  mutation EditProfile(
    $photoURL: String
    $displayName: String
    $token: String!
  ) {
    editProfile(photoURL: $photoURL, displayName: $displayName, token: $token) {
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

// update status
const UPDATE_STATUS_BOOK = gql`
  mutation EditBookStatus($_id: ID, $token: String, $status: Boolean) {
    editBookStatus(_id: $_id, token: $token, status: $status) {
      _id
    }
  }
`;
const UPDATE_STATUS_QUESTION = gql`
  mutation EditQuestionStatus($_id: ID, $token: String, $status: Boolean) {
    editQuestionStatus(_id: $_id, token: $token, status: $status) {
      _id
    }
  }
`;
const UPDATE_STATUS_SYLLABUS = gql`
  mutation EditSyllabusStatus($_id: ID, $token: String, $status: Boolean) {
    editSyllabusStatus(_id: $_id, token: $token, status: $status) {
      _id
    }
  }
`;

// delete data
const DELETE_BOOK = gql`
  mutation DeleteBook($_id: ID, $token: String) {
    deleteBook(_id: $_id, token: $token) {
      _id
    }
  }
`;
const DELETE_QUESTION = gql`
  mutation DeleteQuestion($_id: ID, $token: String) {
    deleteQuestion(_id: $_id, token: $token) {
      _id
    }
  }
`;
const DELETE_SYLLABUS = gql`
  mutation DeleteSyllabus($_id: ID, $token: String) {
    deleteSyllabus(_id: $_id, token: $token) {
      _id
    }
  }
`;

export {
  GET_USER,
  GET_BOOKS,
  GET_ADMIN,
  GET_USERS,
  GET_ALL_DATA,
  GET_SYLLABUS,
  GET_QUESTIONS,
  GET_DEPARTMENTS,
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
  UPDATE_STATUS_BOOK,
  UPDATE_STATUS_SYLLABUS,
  UPDATE_STATUS_QUESTION,
};

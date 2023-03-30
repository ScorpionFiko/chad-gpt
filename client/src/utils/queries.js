import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_SETTINGS = gql`
  query Setting($key: String) {
    setting(key: $key) {
      key
      value
    }
  }
`;
export const QUERY_USER = gql`
  {
  user {
    _id
    firstName
    lastName
    email
    rate
    workouts {
      _id
      workoutName
      dateCreated
      routine {
        _id
        day
        exercises {
          _id
          exerciseName
          exerciseType
          sets
          reps
          secondsRest
          minutesDuration
          intensity
        }
      }
    }
  }
}
`;

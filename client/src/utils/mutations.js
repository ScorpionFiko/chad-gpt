import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
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
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
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
              minutesDuration
              secondsRest
              intensity
            }
          }
        }
      }
    }
  }
`;

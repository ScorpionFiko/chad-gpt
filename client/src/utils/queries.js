import { gql } from '@apollo/client';

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

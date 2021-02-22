import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['email', 'username']
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({});

export const success = (state, { email, username }) => state.merge(
  {
    signedIn: true, email, username,
  },
);

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});

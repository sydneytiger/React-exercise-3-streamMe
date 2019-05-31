import { actionTypes } from '../constains';

const INIT_AUTH = {
  isSignIn: null,
  userId: null,
  userEmail: null,
  userName: null
};

export default (state = INIT_AUTH, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, ...action.payload, isSignIn: true };
    case actionTypes.SIGN_OUT:
      return { ...INIT_AUTH, isSignIn: false };
    default:
      return state;
  }
}
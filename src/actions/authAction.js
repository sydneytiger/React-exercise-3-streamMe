import { actionTypes } from '../constains';

export const signIn = userProfile => {
  return {
    type: actionTypes.SIGN_IN,
    payload: {
      userId: userProfile.getId(),
      userEmail: userProfile.getEmail(),
      userName: userProfile.getName()
    }
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};
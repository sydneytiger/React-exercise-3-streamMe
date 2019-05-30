import { actionTypes } from '../constains';

const authAction = () => dispatch => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
      clientId: 'xxx',
      scope: 'email profile'
    }).then((data) => {
      const auth = window.gapi.auth2.getAuthInstance();
      dispatch({
        type: actionTypes.UPDATE_AUTH_STATE,
        payload: auth.isSignedIn.get()
      })
    });
  });
};

export default authAction;
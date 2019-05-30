import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '608170081945-1tippui0h0p94cahhttftvpvi75u5ter.apps.googleusercontent.com',
        scope: 'email profile'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onSignInChange);
      });
    });
  }

  onSignInChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  signIn = () => {
    this.auth.signIn();
  }

  signOut = () => {
    this.auth.signOut();
  }

  rednerGoogleLoginButton = () => {
    if (this.state.isSignedIn) {
      return (<button onClick={this.signOut} className="ui red google button">
        <i className="google icon" />
        Welcome user
        </button>);
    } else {
      return (
        <button onClick={this.signIn} className="ui red google button">
          <i className="google icon" />
          Login
        </button>
      );
    }
  }

  render() {
    return (
      <div>{this.rednerGoogleLoginButton()}
      </div>
    );
  }
}

export default GoogleAuth;
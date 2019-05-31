import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/authAction';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '608170081945-1tippui0h0p94cahhttftvpvi75u5ter.apps.googleusercontent.com',
        scope: 'profile'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getBasicProfile());
    } else {
      this.props.signOut();
    }
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  rednerGoogleLoginButton = () => {
    if (this.props.isSignIn) {
      return (<button onClick={this.onSignOut} className="ui red google button">
        <i className="google icon" />
        Welcome {this.props.userName}
      </button>);
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Login
        </button>
      );
    }
  }

  render() {
    return <div>{this.rednerGoogleLoginButton()}</div>
  }
}

const mapStateToProps = state => {
  return {
    isSignIn: state.auth.isSignIn,
    userName: state.auth.userName
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (userProfile) => dispatch(signIn(userProfile)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
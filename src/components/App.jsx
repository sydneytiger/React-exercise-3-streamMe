import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <HashRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/edit" component={StreamEdit} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
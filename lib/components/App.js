import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {

  state = this.props.store.getState();

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;

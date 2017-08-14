import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          authors={authors}
          actions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;

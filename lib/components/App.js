import React, { Component } from 'react';
import axios from 'axios';

import DataApi from 'state-api';
import ArticleList from './ArticleList';

// import { data } from '../testData.json';
// const api = new DataApi(data);

class App extends Component {
  state = {
    articles: {},
    authors: {}
  }
  componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors(),
      }
    })
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

import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, store }) => {
  return (
    <div>
      {Object.values(articles).map((article) =>
        (<ArticleItem
          key={`article_${article.id}`}
          article={article}
          store={store}
        />)
      )}
    </div>
  );
};

export default ArticleList;

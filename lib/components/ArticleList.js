import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, actions }) => {
  return (
    <div>
      {Object.values(articles).map((article) =>
        (<ArticleItem
          key={`article_${article.id}`}
          article={article}
          actions={actions}
        />)
      )}
    </div>
  );
};

export default ArticleList;

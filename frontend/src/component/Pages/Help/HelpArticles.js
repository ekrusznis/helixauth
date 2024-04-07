import React from 'react';
import helpData from '../../../helpData.json'; // Your JSON file path

const HelpArticles = ({ onSelectArticle }) => {
  return (
    <div className="wiki" style={{ flex: 1, margin: '0 60px', overflowY: 'auto', border: '2px solid #9cb7c7', padding: '15px', borderRadius: '5px'  }}>
      {helpData.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          {/* Iterate through articles and show details */}
          {category.articles.map((article, idx) => (
            <div key={idx} className="article" onClick={() => onSelectArticle(article)}>
              {article.title}
              {/* Icons based on content type */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HelpArticles;

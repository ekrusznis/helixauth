import React from 'react';

const HelpResult = ({ article }) => {
  if (!article) {
    return <div className="result-view">Select an article to view details.</div>;
  }

  return (
    <div className="result-view" style={{ flex: 1, overflowY: 'auto', margin: '0 100px', border: '2px solid #9cb7c7', padding: '15px', borderRadius: '5px'  }}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {/* Render images and videos if available */}
    </div>
  );
};

export default HelpResult;

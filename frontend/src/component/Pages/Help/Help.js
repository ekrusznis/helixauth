import React, { useState } from 'react';
import HelpArticles from './HelpArticles';
import HelpResult from './HelpResult';
import LoggedInHeader from '../../Shared/LoggedInHeader';
import Footer from '../../Shared/Footer';

const Help = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="help-page">
      <LoggedInHeader />
        <div className="help-content" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <HelpArticles onSelectArticle={setSelectedArticle} />
        <HelpResult article={selectedArticle} />
      </div>
      <Footer />
    </div>
  );
};

export default Help;
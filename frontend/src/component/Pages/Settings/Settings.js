import React, { useState } from 'react';
import Footer from '../../Shared/Footer';

const Settings = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="settings-page">
      <Footer />
    </div>
  );
};

export default Settings;
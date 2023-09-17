import React, { useState } from 'react';
import './App.css';
import English from './English/English'; // Import the English version
import Arabic from './Arabic/Arabic'; // Import the Arabic version

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'english' ? 'arabic' : 'english');
  };

  return (
    <div className="App">
      <button onClick={toggleLanguage}>Toggle Language</button>
      {currentLanguage === 'english' ? (
        <English toggleLanguage={toggleLanguage} />
      ) : (
        <Arabic toggleLanguage={toggleLanguage} />
      )}    </div>
  );
}

export default App;

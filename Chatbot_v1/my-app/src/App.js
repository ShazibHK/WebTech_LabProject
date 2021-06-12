import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import './App.css';

import config from './Config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function App() {

  const [showBot, toggleBot] = useState(true);
  
 


  return (
    <div className="App">
      <header className="App-header">
        {showBot && (
          <Chatbot config={config} messageParser={MessageParser}
          actionProvider={ActionProvider}
          
          />
        )}  
        <button className="app-chatbot-button" onClick={() => toggleBot((prev) => !prev)}>
        BOT
        </button>
      </header>
    </div>
  );
}

export default App;

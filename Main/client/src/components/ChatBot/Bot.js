import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import './App.css';

import config from './Config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function Bot() {

  const [showBot, toggleBot] = useState(false);
  
 


  return (
    
      <div className="App-header">
        {showBot && (
          <Chatbot config={config} messageParser={MessageParser}
          actionProvider={ActionProvider}
          
          />
        )}  
        <button className="app-chatbot-button" onClick={() => toggleBot((prev) => !prev)}>
         BOT
        </button>
      </div>
    
  );
}

export default Bot;

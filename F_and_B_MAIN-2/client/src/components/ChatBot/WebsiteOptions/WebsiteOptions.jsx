import React from "react";
import "./WebsiteOptions.css";  

const WebsiteOptions = (props) => {
    const options = [
      { 
        text: "Deal", 
        handler: props.actionProvider.handleWebsiteList,
        id: 1,
      },
      { 
        text: "Register", 
        handler: props.actionProvider.handleRegisterList,
        id: 2, 
      },
      { 
        text: "About Us", 
        handler: props.actionProvider.handleAboutList,
        id: 3,
      },
      
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="website-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="website-options-container">{optionsMarkup}</div>;
  };
  
  export default WebsiteOptions ;
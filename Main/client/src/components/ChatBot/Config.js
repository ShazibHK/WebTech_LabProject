
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar/BotAvatar";
import WebsiteOptions from "./WebsiteOptions/WebsiteOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  initialMessages: [createChatBotMessage("Hello Iam Bee the Bot. How Can I Help You???", {
  widget: "WebsiteOptions",
    }),
  ],

  

  botName: "B2B Bot",

  customComponents:{
      botAvatar: (props) => <BotAvatar {...props} />

  },

  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "purple",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "purple",
    },
  },

  widgets : [
    {
      widgetName: "WebsiteOptions",
      widgetFunc: (props) => <WebsiteOptions {...props} />,
    },

    {
      widgetName: "websiteLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Lets Make A Deal",
            url:
              "http://localhost:3000/auth",
            id: 1,
          },
          {
            text: "What is a Deal in B2B?",
            url:
              "http://localhost:3000/",
            id: 2,
          },
          {
            text: "Break a Deal",
            url: "http://localhost:3000/",
            id: 3,
          },
        ],
      },
    },
    
    {
      widgetName: "registerLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Signup",
            url:
              "http://localhost:3000/auth",
            id: 1,
          },
          {
            text: "SignIn",
            url:
              "http://localhost:3000/auth",
            id: 2,
          },
          
        ],
      },
    },

    {
      widgetName: "aboutLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "About Section",
            url:
              "http://localhost:3000/",
            id: 1,
          },
          
          
        ],
      },
    },
  ],

  
}

export default config
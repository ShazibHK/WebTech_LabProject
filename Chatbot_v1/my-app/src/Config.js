
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./Components/BotAvatar/BotAvatar";
import WebsiteOptions from "./Components/WebsiteOptions/WebsiteOptions";
import LinkList from "./Components/LinkList/LinkList";

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
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "What is a Deal in B2B?",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Break a Deal",
            url: "https://frontendmasters.com",
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
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "SignIn",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
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
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          
          
        ],
      },
    },
  ],

  
}

export default config

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleWebsiteList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, Check this Out:",
        {
          widget: "websiteLinks",
        }
      );
  
      this.setChatbotMessage(message);
    };

    handleRegisterList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, Check this Out:",
        {
          widget: "registerLink",
        }
      );
  
      this.setChatbotMessage(message);
    };

    handleAboutList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, Check this Out:",
        {
          widget: "aboutLink",
        }
      );
  
      this.setChatbotMessage(message);
    };

    helloHandler = () =>{
        const message = this.createChatBotMessage("Want To Make A Business Deal Happen??")
        this.setChatbotMessage(message)
    } 
    
    yesHandler = () =>{
      const message = this.createChatBotMessage("Type in DEAL in the input box and it will guide you next.!!")
      this.setChatbotMessage(message)
    } 

    noHandler = () =>{
      const message = this.createChatBotMessage("Hello Iam Bee the Bot. How Can I Help You???")
      this.setChatbotMessage(message)
    } 
    

    questionHandler =() =>{
      const message = this.createChatBotMessage("This Website Is A B2B Website Aimed at helping small Businesses grow!!")
      this.setChatbotMessage(message)
    }    


    setChatbotMessage = (message) => {
        this.setState(state => ({...state, messages: [...state.messages,message] }))
    }

    

  }
  
  export default ActionProvider;
  
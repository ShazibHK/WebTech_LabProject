// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowercase = message.toLowerCase()
        

        if (lowercase.includes("hello")) {
           this.actionProvider.helloHandler()      
        }

        if (lowercase.includes("yes")) {
          this.actionProvider.yesHandler()      
        }

        if (lowercase.includes("no")) {
          this.actionProvider.noHandler()      
        }
        
        if (lowercase.includes("deal")) {
          this.actionProvider.handleWebsiteList();
        }

        if (lowercase.includes("register")) {
          this.actionProvider.handleRegisterList();
        }

        if (lowercase.includes("about")) {
          this.actionProvider.handleAboutList();
        }

       if (lowercase.includes("what is this website about?")) {
          this.actionProvider.questionHandler();
        } 
        
    }
  }
  
  export default MessageParser;
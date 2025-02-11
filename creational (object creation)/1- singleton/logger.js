class Logger {
    static instance;
  
    constructor() {
      if (Logger.instance) {
        return Logger.instance;
      }
  
      this.logs = [];
      Logger.instance = this;
    }
  
    log(message) {
      const timestamp = new Date().toISOString();
      this.logs.push({ message, timestamp });
      console.log(`[LOG - ${timestamp}]: ${message}`);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  // Usage
  const logger1 = new Logger();
  const logger2 = new Logger();
  
  logger1.log("User logged in");
  logger2.log("User clicked a button");
  
  console.log(logger1 === logger2);
  console.log(logger1.getLogs()); 
  
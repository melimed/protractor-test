exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/main/javascript/pt-spec.js'],

  capabilities: {
   browserName: 'chrome',
 
   chromeOptions: {
     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
   } 
  } 	  
};

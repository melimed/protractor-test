/*exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../../test/javascript/pt-spec.js'],

  capabilities: {
   browserName: 'chrome',
 
   chromeOptions: {
     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
   } 
  } 	  
};*/

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // specs: ['pt-spec.js'],

  capabilities: {
   browserName: 'chrome'

   //chromeOptions: {
    // args: ["--headless", "--disable-gpu", "--window-size=800,600"]
//   } 
  },
	framework: 'jasmine',
    specs: ['../../test/**/*.js'],
	jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};


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
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineReporter=require('jasmine-reporters');
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
        
        jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                 savePath: './reports/'
                }));
        
        
        jasmine.getEnv().addReporter( new JasmineReporter.JUnitXmlReporter({
        	consolidateAll: true,
        	savePath: './reports/'        
        	}));
    }
};

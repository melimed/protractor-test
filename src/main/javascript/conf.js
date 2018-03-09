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


var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // specs: ['pt-spec.js'],
  resultJsonOutputFile:'./reports/testResults.json',
  capabilities: {
   browserName: 'chrome'
	   
   //chromeOptions: {
    // args: ["--headless", "--disable-gpu", "--window-size=800,600"]
//   } 
  },
	framework: 'jasmine2',
    specs: ['../../test/**/*.js'],
	jasmineNodeOpts: {
		showColors: true,
	    defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        
        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
            savePath: './reports/',
            consolidateAll: false
        });
        jasmine.getEnv().addReporter(junitReporter);
        
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports/screenshots'
         }).getJasmine2Reporter());
    }
};

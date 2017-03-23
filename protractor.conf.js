module.exports.config = {
    specs: ['./specs/spec.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare: () => {
        global.EC = protractor.ExpectedConditions;
        let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'img/screenshots'
                               }))
    },
    afterEach: () => {
        browser.get('/');
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.manage().deleteAllCookies();
    }

}

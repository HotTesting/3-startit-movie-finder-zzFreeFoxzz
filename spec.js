
let TestExm = function() {
    let searchField = $("input[name='searchStr']");
    
    this.get = function() {
    browser.get('https://movies-finder.firebaseapp.com/');
  };

    this.setName = function(name) {
    searchField.sendKeys(name);
  };
  
};

describe('MovieFinderSearch', ()=> {

    it('positive search', function() {
        let testExm = new TestExm;
        let someText = 'The Lord';
        testExm.get();
        testExm.setName(someText);
        element(by.buttonText('Go!')).click()
        browser.sleep(5000);

        let movieCard = $('movie-card');
        let title = movieCard.$('h4 a').getText();
        expect(title).toContain( someText, 'First search result should contain search string');
    });
   
    it('negative search', function() {
        let testExm2 = new TestExm;
        testExm2.get();
        let someText = '&&&';
        testExm2.setName(someText);
        element(by.buttonText('Go!')).click()
        browser.sleep(10000);

        let movieCard = $('movie-card');
        let title = movieCard.$('h4 a').getText();
        expect(title).toContain(someText, 'Wrong search result');
    })

it('searchByGenre', function() {
        let testExm3 = new TestExm;
        testExm3.get();
        element(by.linkText('Fantasy')).click();
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);
        let cards = element.all(by.className('label label-info m-r-md')).getText();
        expect(cards).toContain('Fantasy', 'Wrong search result')
        /* Не могу придумать, как перебрать все эленты циклом и проверить каждый из них*/
    })

})

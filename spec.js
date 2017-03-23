
let HomePage = require('../pageObj/HomePage.js').HomePage

describe('Search film', ()=> {

       let filmNamest = 'the lord of' 
       beforeEach(() => {
                     let homePage = new HomePage; 

        })   
it('should find expected result', () => {
        homePage.open();
        homePage.EC(2000);
        homePage.searchForMovie(filmName);
        homePage.EC(3000);
        homePage.getDisplayedResult();
        let checkTitle = homePage.searchMovies.$$('h4 a').first().getText().then(text => text.toLowerCase())
        expect(movieTitle).toContain(filmName, 'Search result contains wrong strings')
    })

 
    it("should't find expected result", () => {

        homePage.open();
        homePage.EC(2000);
        homePage.searchForMovie('@@@#$%%^^&');
        homePage.EC(3000);
        homePage.getDisplayedResult();
        let resultFail = homePage.searchMovies.$$('h3 + div').get(0).$$('h4 a').count()
        expect(resultFail).toBe(0, 'Unbelievable')
    })

})

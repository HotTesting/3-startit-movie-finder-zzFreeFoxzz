let BasePage = require('./BasePage.js').BasePage
//let SearchFragment = require('./SearchFragment.js').SearchFragment

class HomePage extends BasePage {
    constructor(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, searchMovies, footer, searchFiel, goButton) {
        super(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, footer, searchMovies)
        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!'))
    }

    getListTop() {
        let firstOfListTop = EC.visibilityOf(
            element(by.cssContainingText('movies > h3', 'Top Rated Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstOfListTop, 4000, 'Wait for first of the Top failed.')
        return this.firstOfListTop
    }

    getListPopular() {
        let firstOfListPopular = EC.visibilityOf(
            element(by.cssContainingText('movies > h3', 'Popular Movies')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstOfListPopular, 4000, 'Wait for first of the Popular failed.')
        return this.firstOfListPopular
    }

    getDisplayedResult (){
        let waitForFirstCard = protractor.ExpectedConditions.visibilityOf(element(by.cssContainingText('div','Search Results')).$$('movie-card').first())    
        browser.wait(waitForFirstCard, 1000, 'Result is not visible')
    }

    searchForMovie(filmName) {
        this.searchField.sendKeys(filmName)
        this.goButton.click()
    }

    getResultOfSearch() {
        let resultWaiting = protractor.ExpectedConditions.visibilityOf(this.searchMovies.first())
        browser.wait(resultWaiting, 1000, 'Result is not visible')

    }

}
module.exports.HomePage = HomePage
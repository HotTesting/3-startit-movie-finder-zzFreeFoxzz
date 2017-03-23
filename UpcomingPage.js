let BasePage = require('./BasePage.js').BasePage
//let SearchFragment = require('./SearchFragment.js').SearchFragment

class UpcomingPage extends BasePage {
    constructor(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, footer, searchMovies, searchFiel, goButton) {
        super(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, footer, , searchMovies)
        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!'))

    }

    getListUpComing() {
        let firstOfUpComing = EC.visibilityOf(
            element(by.cssContainingText('.orange-text', 'Up Coming Movies')) > (element($$('.thumbnail').first())));
            browser.wait(firstOfUpComing, 4000, 'Wait for first of the Up Coming Movies failed.');
        return this.firstOfUpComing
    }

}
module.exports.UpcomingPage = UpcomingPage
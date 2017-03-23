let BasePage = require('./BasePage.js').BasePage

class PopularSeries extends BasePage {

    constructor(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, footer) {
        super(URL, moviesFinderLink, upcomingMoviesLink, popularSeriesLink, moviesCategoryList, footer)
    }
    
    getListPopularSeries() {
        let firstOfListPopularSeries = EC.visibilityOf(
            element(by.cssContainingText('app-popular-series', 'Popular Series')).element(by.xpath('following-sibling::div[1]')).$$('movie-card').first())
        browser.wait(firstOfListPopularSeries, 4000,'Wait for first of the Popular Series failed.')
        return this.firstOfListPopularSeries
    }
}

module.exports.PopularSeriese = PopularSeries
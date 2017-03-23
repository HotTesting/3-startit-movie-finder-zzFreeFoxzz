class BasePage {

    constructor() {
        this.URL = ''
        this.moviesFinderLink = element(by.cssContainingText('Movies Finder'))
        this.upcomingMoviesLink = element(by.cssContainingText('Upcoming Movies'))
        this.popularSeriesLink = element(by.cssContainingText('Popular Series'))
        this.moviesCategoryList = $$('ul.nav-stacked .list-group-item')
        this.footer = element(by.tagName('footer'))
        this.searchMovies = element.all(by.cssContainingText('movies div', 'Search Results')).get(0).$$('movie-card')
    }
    
    open() {
        browser.get(this.URL)
        return this
    }

}

module.exports.BasePage = BasePage  
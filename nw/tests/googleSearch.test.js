export default { 
    'First Test': (browser) => {
        browser
            .init()
            .page.google()
            .waitForElementVisible('body')
            .setValue('@searchInput', browser.globals.searchTerm)
            .waitForElementVisible('@searchBtn')
            .click('@searchBtn')
            .api.pause(1000)
    },

    'Second Test': (browser) => {
        browser
            .init()
            .page.google()
            .fillInSearchInput()
            // .waitForElementVisible('body')
            // .setValue('@searchInput', browser.globals.searchTerm)
            // .waitForElementVisible('@searchBtn')
            // .click('@searchBtn')
            .page.google()
            .submit()
            .pause(1000)
            .assert.containsText('#main', browser.globals.searchResult)
    },

    after: (browser) => {
        browser.end();
    }
};

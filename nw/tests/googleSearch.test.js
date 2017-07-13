module.exports = {
    'First Test': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[type=text]', browser.globals.searchTerm)
            .waitForElementVisible('button[name=btnG]')
            .click('button[name=btnG]')
            .pause(1000)
    },

    'Second Test': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[type=text]', browser.globals.searchTerm)
            .waitForElementVisible('button[name=btnG]')
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', browser.globals.movieName)
            .end()
    },

    after: (browser) => {
        browser.end();
    }
};

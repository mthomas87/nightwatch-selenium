const testCommands = {
        fillInSearchInput () {
            this
                .waitForElementVisible('body')
                .setValue('@searchInput', this.api.globals.searchTerm);
            return this.api;
        },
        submit () {
            this
                .waitForElementVisible('@searchBtn')
                .click('@searchBtn')
                .api.pause(1000);
            return this.api;
        }
    }


export default {
    commands:[testCommands],
    elements: {
        searchInput: 'input[type=text]',
        searchBtn: 'input[type=button]',
    }
};
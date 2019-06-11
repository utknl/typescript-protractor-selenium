import {Config} from "protractor";
import {OnPrepare} from "./helpers/OnPrepare";

export let config: Config = {

    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    // capabilities: {
    //     browserName: 'chrome',
    // },

    //Sauce Labs
    sauceUser: "some sensitive user name",
    sauceKey:"and it's very sensitive access key",
    sauceRegion:"eu",


    onPrepare: async () => {
        await OnPrepare.onPrepareConfig();
    },

    multiCapabilities: [
        {
            'browserName': 'Chrome',
            'platform': 'Windows 10',
            'version': '73.0',
            'name': 'protractor-tests-chrome',
        },
        {
            'browserName': 'Safari',
            'platform': 'macOS 10.13',
            'version': '11.1',
            'name': 'protractor-tests-mac',
        }
    ],

    suites: {
        'Generator': [
            process.cwd() + '/protractor/jsfiles/specs/Generator.js',
            process.cwd() + '/protractor/jsfiles/specs/GeneratorSpecsWithDataProvider.js',
        ]
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true
    }

};

import {Config} from "protractor";
import {OnPrepare} from "./helpers/OnPrepare";

export let config: Config = {

    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
    },

    onPrepare: async () => {
        await OnPrepare.onPrepareConfig();
    },

    suites: {
        'Generator': [
            process.cwd() + '/protractor/jsfiles/specs/Generator.js',
            process.cwd() + '/protractor/jsfiles/specs/GeneratorSpecsWithDataProvider.js',
        ]
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
    }

};

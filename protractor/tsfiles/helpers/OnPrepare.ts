import {browser} from "protractor";

export class OnPrepare {

    static async onPrepareConfig() {
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(11000);

        //wait for angular or not
        await browser.waitForAngularEnabled(false);

    }

}

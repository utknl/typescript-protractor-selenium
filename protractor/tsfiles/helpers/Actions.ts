import {browser, ElementFinder, protractor} from "protractor";

export class Actions {

    EC = protractor.ExpectedConditions;
    generatorUrl = "http://www.miraclesalad.com/webtools/random.php";

    navigateToTheGeneratorPage = async () => {
        await browser.get(this.generatorUrl);
    };

    waitForElementToBeClickable = async (element: ElementFinder) => {
        await browser.wait(this.EC.elementToBeClickable(element), 60000);
    };

    waitAndGetText = async (element: ElementFinder) => {
        if (this.isPresent(element)) {
            return await element.getText();
        } else {
            return "element could not found"
        }
    };

    waitAndClick = async (element: ElementFinder) => {
        if (this.isPresent(element)) {
            return await element.click();
        } else {
            return "element could not found"
        }
    };

    waitAndSendKeys = async (element: ElementFinder, value: string) => {
        await this.waitForElementToBeClickable(element);
        await element.clear();
        return await element.sendKeys(value)
    };

    isPresent = async (element: ElementFinder) => {
        await element.isPresent().then(async (isDisplayed) => {
                return isDisplayed;
            }
        )
    };

}

import {Actions} from "../helpers/Actions";
import {GeneratorPo} from "../pageobjects/Generator.po";
import {DataProvider} from "../helpers/DataProvider";

let using = require('jasmine-data-provider');

describe("Number Generator", async () => {

    let actions = new Actions();
    let generator = new GeneratorPo();

    beforeAll(async () => {
        await actions.navigateToTheGeneratorPage();
    });

    using(DataProvider.dataProvider(), (data) => {

        it('should generate numbers in stated quantities between selected limits in a group', async () => {
            await actions.waitAndClick(generator.setQuantity(data.quantity));
            await actions.waitAndSendKeys(generator.from, data.from);
            await actions.waitAndSendKeys(generator.to, data.to);
            await actions.waitAndClick(generator.setGroups(1));
            await actions.waitAndClick(generator.goButton);

            let numbers = await actions.waitAndGetText(generator.group1);
            let numbersToArrayList = new Array<number>();
            numbers.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));

            console.log("\n Down limit is = ", data.from);

            numbersToArrayList.forEach(x =>
                console.log("\n Number is = ", x)
            );

            console.log("\n Up limit is = ", data.to);

            numbersToArrayList.forEach(x =>
                expect(x).toBeGreaterThanOrEqual(data.from)
            );

            numbersToArrayList.forEach(x =>
                expect(x).toBeLessThanOrEqual(data.to)
            );
        });


    });


});

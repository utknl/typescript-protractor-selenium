import {Actions} from "../helpers/Actions";
import {GeneratorPo} from "../pageobjects/Generator.po";

describe("Number Generator", async () => {

    let actions = new Actions();
    let generator = new GeneratorPo();

    beforeAll(async () => {
        await actions.navigateToTheGeneratorPage();
    });

    afterEach(function () {
        console.log("\n========================\n")
    });

    it('should have a title', async () => {
        let title = await actions.waitAndGetText(generator.pageTitle);
        console.log("\n Page title is = ", title);
        await expect(title).toEqual("Random Number Generator")
    });

    it('should have a description', async () => {
        let description = await actions.waitAndGetText(generator.pageDescription);
        console.log("\n Page description is = ", description);
        await expect(description).toEqual("This is a simple random number generator. Hit refresh after you \"Go\" to get a new list of random numbers or hit Go again.")
    });

    it('should generate a number between selected limits in a group', async () => {
        await actions.waitAndClick(generator.setQuantity(1));
        await actions.waitAndSendKeys(generator.from, "0");
        await actions.waitAndSendKeys(generator.to, "10");
        await actions.waitAndClick(generator.setGroups(1));
        await actions.waitAndClick(generator.goButton);

        let number = await actions.waitAndGetText(generator.group1);
        console.log("\n Number is = ", number);
        expect(parseInt(number)).toBeGreaterThanOrEqual(0);
        expect(parseInt(number)).toBeLessThanOrEqual(10);
    });

    it('should generate numbers in stated quantities between selected limits in a group', async () => {
        await actions.waitAndClick(generator.setQuantity(10));
        await actions.waitAndSendKeys(generator.from, "20");
        await actions.waitAndSendKeys(generator.to, "1000");
        await actions.waitAndClick(generator.setGroups(1));
        await actions.waitAndClick(generator.goButton);

        let numbers = await actions.waitAndGetText(generator.group1);
        let numbersToArrayList = new Array<number>();
        numbers.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));

        console.log("\n Down limit is = 20");

        numbersToArrayList.forEach(x =>
            console.log("\n Number is = ", x)
        );

        console.log("\n Up limit is = 1000");

        numbersToArrayList.forEach(x =>
            expect(x).toBeGreaterThanOrEqual(20)
        );

        numbersToArrayList.forEach(x =>
            expect(x).toBeLessThanOrEqual(1000)
        );
    });

    it('should generate unique numbers in stated quantities between selected limits in a group', async () => {
        await actions.waitAndClick(generator.setQuantity(8));
        await actions.waitAndSendKeys(generator.from, "200");
        await actions.waitAndSendKeys(generator.to, "6000");
        await actions.waitAndClick(generator.setGroups(1));
        await actions.waitAndClick(generator.goButton);

        let numbers = await actions.waitAndGetText(generator.group1);
        let numbersToArrayList = new Array<number>();
        numbers.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));

        let uniqueList = new Set(numbersToArrayList);
        uniqueList.forEach(x =>
            console.log("\n Unique Number is = ", x)
        );

        expect(uniqueList.size).toEqual(8)
    });

    it('should generate numbers in stated quantities for selected groups', async () => {
        await actions.waitAndClick(generator.setQuantity(6));
        await actions.waitAndClick(generator.setGroups(6));
        await actions.waitAndClick(generator.goButton);

        let group1 = await actions.waitAndGetText(generator.group1);
        console.log("\n Group 1 : \n", group1);
        expect(group1.split("\n").length).toEqual(6);

        let group2 = await actions.waitAndGetText(generator.group2);
        console.log("\n Group 2 : \n", group2);
        expect(group2.split("\n").length).toEqual(6);

        let group3 = await actions.waitAndGetText(generator.group3);
        console.log("\n Group 3 : \n", group3);
        expect(group3.split("\n").length).toEqual(6);

        let group4 = await actions.waitAndGetText(generator.group4);
        console.log("\n Group 4 : \n", group4);
        expect(group4.split("\n").length).toEqual(6);

        let group5 = await actions.waitAndGetText(generator.group5);
        console.log("\n Group 5 : \n", group5);
        expect(group5.split("\n").length).toEqual(6);

        let group6 = await actions.waitAndGetText(generator.group6);
        console.log("\n Group 6 : \n", group6);
        expect(group6.split("\n").length).toEqual(6);

        let numbersToArrayList = new Array<number>();
        group1.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        group2.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        group3.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        group4.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        group5.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        group6.split("\n").forEach(x => numbersToArrayList.push(parseInt(x)));
        expect(numbersToArrayList.length).toEqual(36);
    });

});

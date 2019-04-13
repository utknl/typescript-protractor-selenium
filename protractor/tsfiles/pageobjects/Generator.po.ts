import {by, element, ElementFinder} from "protractor";
import {Actions} from "../helpers/Actions";

export class GeneratorPo {

    actions = new Actions();
    pageTitle: ElementFinder;
    pageDescription: ElementFinder;
    quantityDropdown: ElementFinder;
    uniqueDropdown: ElementFinder;
    from: ElementFinder;
    to: ElementFinder;
    groupsDropdown: ElementFinder;
    goButton: ElementFinder;
    group1: ElementFinder;
    group2: ElementFinder;
    group3: ElementFinder;
    group4: ElementFinder;
    group5: ElementFinder;
    group6: ElementFinder;
    group7: ElementFinder;
    group8: ElementFinder;
    group9: ElementFinder;
    group10: ElementFinder;

    constructor() {
        this.pageTitle = element(by.xpath("//h1"));
        this.pageDescription = element(by.xpath("//blockquote/p"));
        this.quantityDropdown = element(by.xpath("//*[@id='i']"));
        this.uniqueDropdown = element(by.xpath("//*[@id='u']"));
        this.from = element(by.xpath("//*[@id='low']"));
        this.to = element(by.xpath("//*[@id='high']"));
        this.groupsDropdown = element(by.xpath("//*[@id='groups']"));
        this.goButton = element(by.xpath("//input[@value='Go']"));
        this.group1 = element.all(by.xpath("//p[@class='output']")).get(0);
        this.group2 = element.all(by.xpath("//p[@class='output']")).get(1);
        this.group3 = element.all(by.xpath("//p[@class='output']")).get(2);
        this.group4 = element.all(by.xpath("//p[@class='output']")).get(3);
        this.group5 = element.all(by.xpath("//p[@class='output']")).get(4);
        this.group6 = element.all(by.xpath("//p[@class='output']")).get(5);
        this.group7 = element.all(by.xpath("//p[@class='output']")).get(6);
        this.group8 = element.all(by.xpath("//p[@class='output']")).get(7);
        this.group9 = element.all(by.xpath("//p[@class='output']")).get(8);
        this.group10 = element.all(by.xpath("//p[@class='output']")).get(9);

    }

    setQuantity(number) {
        return this.quantityDropdown.element(by.xpath("//*[@id='i']//option[@value='" + number + "']"));
    };

    isUnique(val: boolean) {
        if (val) {
            return this.uniqueDropdown.element(by.xpath("//*[@id='u']//option[@value='1']"));
        } else
            return this.uniqueDropdown.element(by.xpath("//*[@id='u']//option[@value='0']"));
    };

    setGroups(number) {
        return this.groupsDropdown.element(by.xpath("//*[@id='groups']//option[@value='" + number + "']"));
    }
}

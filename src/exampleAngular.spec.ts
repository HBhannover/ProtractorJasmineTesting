import {browser, element, by} from "protractor";
import {Constans} from "./constans";
import {Common} from "./common";

describe("This is the tests for the Example-angular-webapp", function () {
  beforeEach(function () {
    browser.get(Constans.exampleAngularUrl);
  });

  it ("Tests Addition with sendKeys-Functions", function () {
    //Protractor can automatic resolve promise for this lines:
    element(by.model(Constans.inputField1)).sendKeys(100);
    element(by.model(Constans.inputField2)).sendKeys(88);
    element(by.id("gobutton")).click();
    browser.sleep(3000);
  });
  
  it ("Tests Addition-Functions", function () {
    Common.Calc(1,2,"ADDITION");
    Common.Calc(5,5, "DIVISION");
    Common.Calc(9,5, "MODULO");
    Common.Calc(3,2, "MULTIPLICATION");
    Common.Calc(7,4, "SUBTRACTION");
    console.log("Here we are !!!");
  });

  it("Choose the dropdown item through index", function () {
    Common.selectDropDownIndex(3);
  });

  it("Choose the dropdown item through item name", function () {
    Common.selectDropDownElem("-");
    browser.sleep(3000);
  });
})

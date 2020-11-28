import {by, element, ElementFinder} from "protractor";
import {Constans} from "./constans";

export class Common {

  public static selectDropDown (mathForm){
    // var drpDwn = element(by.model("operator"));
    // drpDwn.click();
      element.all(by.tagName("option")).each(function (item : any) {
      item.getAttribute("value").then(function (values) {
        if(values == mathForm){
          console.log(values.toString() == mathForm.toString() );
          console.log(values == mathForm);
          item.click();
        }
      })
    })
  }

  public static selectDropDownIndex (index){
    element(by.model(Constans.dropDownElems)).element(by.css("option:nth-child("+index+")")).click();
  }

  //select dropdown elements through +, /, %, *, -
  //This test is not very good because of Decode/Recode-Problem by loading of special symbols +, /, %, *, -
  public static selectDropDownElem (elemName){
  element(by.model(Constans.dropDownElems)).all(by.tagName(Constans.dropDownTagname)).then(function (items) {
    for (var i in items){
      items[i].getText().then(function (text) {
        console.log("\n"+ text);
        console.log(text == elemName);
        if (text == elemName){
          items[i].click();
        } else {
          console.log("This element not found");
        }
      });
      break;
    }
  });
  }

  public static  Calc (a, b, c) {
    switch (c) {
      case "ADDITION":
        console.log(c);
        Common.selectDropDown(c);
        element(by.model(Constans.inputField1)).sendKeys(a);
        element(by.model(Constans.inputField2)).sendKeys(b);
         element(by.id(Constans.goButton)).click();
        break;
      case "DIVISION":
        Common.selectDropDown(c);
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id(Constans.goButton)).click();
        break;
      case "MODULO":
        Common.selectDropDown(c);
        element(by.model(Constans.inputField1)).sendKeys(a);
        element(by.model(Constans.inputField2)).sendKeys(b);
        element(by.id(Constans.goButton)).click();
        break;
      case "MULTIPLICATION":
        Common.selectDropDown(c);
        element(by.model(Constans.inputField1)).sendKeys(a);
        element(by.model(Constans.inputField2)).sendKeys(b);
        element(by.id(Constans.goButton)).click();
        break;
      case "SUBTRACTION":
        Common.selectDropDown(c);
        element(by.model(Constans.inputField1)).sendKeys(a);
        element(by.model(Constans.inputField2)).sendKeys(b);
        element(by.id(Constans.goButton)).click();
        break;
    }
  }
}

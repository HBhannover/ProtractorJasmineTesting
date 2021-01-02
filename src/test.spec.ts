import {browser, element} from "protractor";
import {Constans} from "./constans";

describe("Start the Webapp ABC News", function () {

  it("launch the url and get Title", function () {
    //by get URL protractor will automatic take care for promise
    browser.get(Constans.webUrlABCNews);

    //resolve promise with .then():
    browser.getTitle().then(function (text) {
      console.log("Title of webapp is: "+text);
    });

    //resolve promise with Jasmine:
    expect(browser.getTitle()).toEqual(Constans.webTitle);

    it ( "Sau tao test",function(){
      browser.get("https://www.google.com/");
      browser.sleep(5000).then(function(){
        console.log("Here we are !!!");
      })
      
    })

  });



})

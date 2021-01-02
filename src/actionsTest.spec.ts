import { browser, element,by, ActionSequence } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { Constans } from './constans';


describe("Test with the function action() of protractor", function() {

    beforeEach(function(){
        //Because Hotel.de is not a Angular-App:
        browser.waitForAngularEnabled(false);
        browser.get(Constans.exampleHotelURL);
        browser.manage().window().maximize();
        browser.sleep(3000);
        element(by.id("onetrust-accept-btn-handler")).click();
        browser.sleep(3000);
    });

    it ("With action() execute the automatic completion", function() {
        element(by.xpath("//input[@role='searchbox']")).sendKeys("Hannover"); //--> Here can be executed with action() too.
        //Make automatic completion:
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
        browser.sleep(2000);
        element(by.partialButtonText("Hotels suchen")).click();
            browser.sleep(2000);

            //How many items was found:
            element.all(by.xpath("//ul[@class='HotelOffersTable__hotelsList--2-Xe8']//li")).count().then(function(text){
             console.log("Number of found itemp: "+text);
            }); 

            //Choose the item "Benther Berg":  
            element(by.linkText("Benther Berg")).click().then(function(){
            browser.sleep(3000);
            
            //Switch to child window Benther Berg and getTitle:
            browser.getAllWindowHandles().then(function(childWindows){
                //childWindow[0]: parent-window
                //childWindow[1], ... : are the child Windows, but in this case we have ony one child
                browser.switchTo().window(childWindows[1]);
                browser.getTitle().then(function(childTitle){
                    expect(childTitle).toEqual("Benther Berg (Ronnenberg, DEU) HOTEL DE"); //--> Compare function of Jasmine
                })
            })
        })
        });
    });

    // it ("Handle the try windows", function(){
    //     element.all(by.css("ul[class='HotelOffersTable__hotelsList--2-Xe8']//li")).get(1).click().then(function(){
    //         browser.sleep(3000);
    //     });

    // })

    // afterEach(function(){
    //     browser.driver.ignoreSynchronization=false;
    // })
});
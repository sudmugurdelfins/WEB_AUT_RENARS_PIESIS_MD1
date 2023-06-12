import BasePage from "../pageObjects/Base.page";
import SelectPage from "../pageObjects/Select.page";

describe("Homework", () => {
  beforeEach(() => {
    BasePage.visit();
  });
  it("1. MD" , () => {
    SelectPage.getGrid.click();
    SelectPage.getTwo.click();
    SelectPage.getFour.click();
    SelectPage.getSix.click();
    SelectPage.getEight.click();
    SelectPage.getTwo.should('have.class', 'active');
    SelectPage.getFour.should('have.class', 'active');
    SelectPage.getSix.should('have.class', 'active');
    SelectPage.getEight.should('have.class', 'active');
    SelectPage.getOne.should('not.have.class', 'active');
    SelectPage.getThree.should('not.have.class', 'active');
    SelectPage.getFive.should('not.have.class', 'active');
    SelectPage.getSeven.should('not.have.class', 'active');
    SelectPage.getNine.should('not.have.class', 'active');

  });
  
  
  
  
  
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
    });
});
import BasePage from "./Base.page";

class SelectPage extends BasePage{
    static get url(){
        return "/";
    }
    static get getGrid(){
        return cy.get('[id="demo-tab-grid"]');
    }
    static get getTwo(){
        return cy.get('#row1 li').eq(1);
    }
    static get getFour(){
        return cy.get('#row2 li').eq(0);
    }
    static get getSix(){
        return cy.get('#row2 li').eq(2);
    }
    static get getEight(){
        return cy.get('#row3 li').eq(1);
    }
    static get getOne(){
        return cy.get('#row1 li').eq(0);
    }

    static get getThree(){
        return cy.get('#row1 li').eq(2);
    }

    static get getFive(){
        return cy.get('#row2 li').eq(1);
    }

    static get getSeven(){
        return cy.get('#row3 li').eq(0);
    }
    static get getNine(){
        return cy.get('#row3 li').eq(2);
    }




}

export default SelectPage;
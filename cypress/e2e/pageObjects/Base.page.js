class BasePage{
    static get url(){
        return "https://demoqa.com/selectable";
    }
    static visit(){
        cy.visit(this.url);
    }
}


export default BasePage;
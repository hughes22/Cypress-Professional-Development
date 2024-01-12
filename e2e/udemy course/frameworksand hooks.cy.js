/// <reference types = "Cypress" />
describe('frames test',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })

    })
    it('Demo hooks', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[minlength="2"]').type(this.data.name)
        cy.get('select').select(this.data.gender)
        
        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',"2" )
        cy.get('#inlineRadio3').should('be.disabled')
        cy.pause()
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Blackberry')){
        //         cy.get('button.btn-info').eq(index).click()
        //     }

        //     if($el.text().includes('Nokia')){
        //         cy.get('button.btn-info').eq(index).click()
        //     }
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
    })
})
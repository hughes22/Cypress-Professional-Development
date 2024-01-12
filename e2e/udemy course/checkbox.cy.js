
describe('My Udemy Test', () => {
    it('finds the content "type"', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.viewport('macbook-15')
    //Checkbox
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    
    //fixed dropdowns
    cy.get('Select').select('option2').should('have.value',"option2")
    //dynamic dropdowns
    cy.get("#autocomplete").type('gha')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text()==="Ghana"){
            $el.click()
        }
    })
    //autocomplete
    cy.get("#autocomplete").should('have.value',"Ghana")
    //Hide & show
    cy.get("#displayed-text").should('be.visible')
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should('not.be.visible')
    cy.get("#show-textbox").click()
    cy.get("#displayed-text").should('be.visible')

    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')
    //alert
    cy.get("#alertbtn").click()
    cy.get('[value="Confirm"]').click()
    //window alert
    cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //Ability to manipulate the DOM
    //cy.get("#opentab").invoke('removeAttr', 'target').click()
    //cy.origin("https://www.qaclickacademy.com",()=>{
       // cy.get("#navbarSupportedContent a[href*='about']").click()
       // cy.get(".mt-50 h2").should('contain',"QAClick Academy")
   // })
   //Traverse to sibling with next() and its works only on get
   cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
    const text=$el.text()
    if(text.includes('Python')){
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
            const priceText= price.text()
            expect(priceText).to.equal('25')
        })
    }

   }) 
   //Mouse hover
   cy.get("div.mouse-hover-content").invoke('show')
   cy.contains('Top').click()
   cy.url().should('include','top')








    })
})
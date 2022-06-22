//const { eq } = require("cypress/types/lodash")

describe('ETL Login', () => {
    it('Visits ETL Page', () => {
      cy.visit('https://uat.etl.wiz.analyticalwizards.com/etl/#/app/cJQfjCUD3QKJ_xOHFCgf7')
      cy.get('#username').type('analyticaltest31@gmail.com')
      cy.get('button.basic.ui.button').click()
      cy.get('#password').type('Password@334');
      //cy.wait(9000)
      cy.get('button.basic.ui.button').click()
      
       
    })
  
    
    /* /* it(' Create a new dataset using file Upload', () => {
      cy.wait(4000)
      cy.get('.icon.ico_datasets').click(); //--create data set
      cy.contains('Create Dataset').click()
      cy.get('.ui.input').eq(0).click({ force: true })
      cy.get('.input').eq(1).type('Test_Cypress_DataSet_339')
      cy.get('.chevron').click();
      cy.contains('File Upload').click()
      cy.get('.scrolling').scrollTo('top')
      
      
      cy.fixture('uitest.csv').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
      fileContent: fileContent.toString(),
      fileName: 'uitest.csv',
      mimeType: 'csv'
  
    
       })
      cy.get('.stackable > .grid > .two').click()
      cy.get('button.ui.positive.button').eq(1).click() 
    })*/
  describe('Create Dataset', () => {
  it('Create dataset using Snowflake', () => {
    cy.wait(4000)
    cy.get('.icon.ico_datasets').click(); //--create data set
    cy.contains('Create Dataset').click()
    cy.xpath("//div[contains(@class,'ui input')]//input[contains(@type,'')]").type('Snowflake_cypress_dataset');
    cy.xpath("//div[@class='css-1ndrsdj']//div//div[@class='grid-segment']//div[@class='sc-eCYdqJ fIxulT dropdown-plugin']//div//div[@class='infinite-dropdown-trigger']//div//div[@class='dropdown-field']//div//i[@class='chevron ico_dropdown_arrow icon icon']").click()
    cy.contains('SnowFlake').click()
    cy.get('.scrolling').scrollTo('top')
    cy.get('div.ui.input').eq(2).type('vva39267.us-east-1.snowflakecomputing.com')
    cy.get('div.ui.input').eq(3).type('vva39267.us-east-1')
    cy.get('div.ui.input').eq(4).type('OPENDATA')
    cy.get('div.ui.input').eq(5).type('kmohapatra@analyticalwizards.com')
    cy.get('div.ui.input').eq(6).type('Login@1234567')
    cy.get('div.ui.input').eq(7).type('CTTI')
    cy.get('div.ui.input').eq(8).type('DATASCIENCE_AWPRJ00010_AW_OPENDATA_READONLY')
    cy.get('div.ui.input').eq(9).type('DELIVERY_CLUSTER_WH')
    cy.contains('Connect').click()
    cy.get('.scrolling').scrollTo('top')
    cy.xpath("(//textarea)[1]").type('Select * from CTTI.BASELINE_COUNTS;');
    cy.contains('Submit').click() 
    cy.contains('Save').click()
     
      
     
     

  })
      
    })
    
})
   
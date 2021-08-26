
const link = "http://127.0.0.1:5500/"

describe("E7 - Number is Valid", () => {
  listOfNumber.map((number, i) => {
    it(i+" - "+ number, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #number').click()
      cy.get('body > .container > .form-group > .input-group > #number').type(number)
      cy.get('#number-button').contains("Valid");
    });
  })
});



describe("E7 - number is Invalid", () => {
  listOfInvalidnumbers.map((number, i) => {
    
    if (i < 10) number = number.replace(/\d\//g, String.fromCharCode(97 + i)+ "/")
    else if (i < 22)number = number.replace(/\d\:/g, String.fromCharCode(97 + i)+ ":")
    else if (i < 30) number = ` ${number}`;
    else if (i < 40) number = `${number} `;
    else if (i < 50) number = number.replace(" ", "  ")
    else if (i < 60) number =  `${String.fromCharCode(97 + number[0])}${number.slice(1)}`;
    else if (i < 70) number =  number.replace(/\//g, "")
    else if (i < 80) number =  number.replace(/\:/g, "")
    else if (i < 90) number =  number.replace(/\//g, "").replace(/\:/g, "")
    else if (i < 100) number = (number + ("0123456789".repeat(4))).slice(0, i - 80 + 16);
    
    it(i+" - "+ number, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #number').click()
      cy.get('body > .container > .form-group > .input-group > #number').type(number)
      cy.get('#number-button').contains("Invalid");
    });
  })

});

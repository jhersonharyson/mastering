
const link = "http://127.0.0.1:5500/"

const listOfPhone = Array(100).fill(1).map((_, index) => {
  const buildNumber = (size) => Array(size).fill(1).map((_,i)=> Math.ceil(Math.random() * 9)).join("")
  if(index < 33) return `(${buildNumber(2)}) 9${buildNumber(4)}-${buildNumber(4)}`
  else if(index < 66) return `(${buildNumber(2)}) 9${buildNumber(4)}${buildNumber(4)}`
  return `${buildNumber(2)} 9${buildNumber(4)}${buildNumber(4)}`
})


describe("E5 - Phone is Valid", () => {
listOfPhone.map((phone, i) => {
    it(i+" - "+ phone, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #phone').click()
      cy.get('body > .container > .form-group > .input-group > #phone').type(phone)
      cy.get('#phone-button').contains("Valid");
    });
  })
});


describe("E5 - Phone is Invalid", () => {
  listOfPhone.map((phone, i) => {
    
    if (i < 10) phone = phone.replace(" ", "  ")
    else if (i < 22) phone = phone.slice(0, i - 9);
    else if (i < 40) phone = ` ${phone}`;
    else if (i < 66) phone = phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", ""); 
    else if (i < 80) phone =  `${String.fromCharCode(97 + phone[0])}${phone.slice(1)}`;
    else if (i < 100) phone = (phone + ("0123456789".repeat(4))).slice(0, i - 80 + 16);
    
    it(i+" - "+ phone, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #phone').click()
      cy.get('body > .container > .form-group > .input-group > #phone').type(phone)
      cy.get('#phone-button').contains("Invalid");
    });
  })

});

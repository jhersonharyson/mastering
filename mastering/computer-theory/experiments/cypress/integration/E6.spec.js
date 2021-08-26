
const link = "http://127.0.0.1:5500/"

const listOfDates = Array(100).fill(1).map((_, index) => {
  const buildNumber  = (min = 0, max) =>   ""+(Math.ceil(Math.random() * (max-min)) + min)
  return `${buildNumber(null, 31)
              .padStart(2, "0")}/${
                buildNumber(null, 12)
                .padStart(2, "0")}/${
                  buildNumber(1900, 2020)} ${
                    buildNumber(null, 23)
                    .padStart(2, "0")}:${
                      buildNumber(null, 59)
                      .padStart(2, "0")}:${
                        buildNumber(null, 59)
                        .padStart(2, "0")}`
})

describe("E6 - Date is Valid", () => {
  listOfDates.map((date, i) => {
    it(i+" - "+ date, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #date').click()
      cy.get('body > .container > .form-group > .input-group > #date').type(date)
      cy.get('#date-button').contains("Valid");
    });
  })
});


const listOfInvalidDates = Array(100).fill(1).map((_, index) => {
  const buildNumber  = (min = 0, max) =>   ""+(Math.ceil(Math.random() * (max-min)) + min)
  return `${buildNumber(null, 31)
              .padStart(2, "0")}/${
                buildNumber(null, 12)
                .padStart(2, "0")}/${
                  buildNumber(1900, 2020)} ${
                    buildNumber(null, 23)
                    .padStart(2, "0")}:${
                      buildNumber(null, 59)
                      .padStart(2, "0")}:${
                        buildNumber(null, 59)
                        .padStart(2, "0")}`
})


describe("E6 - Date is Invalid", () => {
  listOfInvalidDates.map((date, i) => {
    
    if (i < 10) date = date.replace(/\d\//g, String.fromCharCode(97 + i)+ "/")
    else if (i < 22)date = date.replace(/\d\:/g, String.fromCharCode(97 + i)+ ":")
    else if (i < 30) date = ` ${date}`;
    else if (i < 40) date = `${date} `;
    else if (i < 50) date = date.replace(" ", "  ")
    else if (i < 60) date =  `${String.fromCharCode(97 + date[0])}${date.slice(1)}`;
    else if (i < 70) date =  date.replace(/\//g, "")
    else if (i < 80) date =  date.replace(/\:/g, "")
    else if (i < 90) date =  date.replace(/\//g, "").replace(/\:/g, "")
    else if (i < 100) date = (date + ("0123456789".repeat(4))).slice(0, i - 80 + 16);
    
    it(i+" - "+ date, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #date').click()
      cy.get('body > .container > .form-group > .input-group > #date').type(date)
      cy.get('#date-button').contains("Invalid");
    });
  })

});

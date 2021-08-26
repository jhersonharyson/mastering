const link = "http://127.0.0.1:5500/";

const listOfPasswords = Array(100)
  .fill(1)
  .map((_, index) => {
    let password = "";
    for (let i = 0; i < 8; i++) {
      const letter = 97 + Math.ceil(Math.random() * (122 - 97));
      password += String.fromCharCode(letter);
    }
    const usedIndex = [];
    const usedUppercaseIndex = [];
    const usedNumberIndex = [];

    let uppercaseIndex = Math.ceil(Math.random() * 7);
    usedIndex.push(uppercaseIndex);
    usedUppercaseIndex.push(uppercaseIndex);

    if (index > 50) {
      uppercaseIndex = Math.ceil(Math.random() * 7);
      while (usedIndex.includes(uppercaseIndex)) {
        uppercaseIndex = Math.ceil(Math.random() * 7);
      }
      usedIndex.push(uppercaseIndex);
      usedUppercaseIndex.push(uppercaseIndex);
    }

    let numberIndex = Math.ceil(Math.random() * 7);
    while (usedIndex.includes(numberIndex)) {
      numberIndex = Math.ceil(Math.random() * 7);
    }
    usedIndex.push(numberIndex);
    usedNumberIndex.push(numberIndex);

    if (index > 50) {
      numberIndex = Math.ceil(Math.random() * 7);
      while (usedIndex.includes(numberIndex)) {
        numberIndex = Math.ceil(Math.random() * 7);
      }
      usedIndex.push(numberIndex);
      usedNumberIndex.push(numberIndex);
    }

    return password
      .split("")
      .map((char, index) =>
        !usedUppercaseIndex.includes(index) ? char : char.toUpperCase()
      )
      .map((char, index) => (!usedNumberIndex.includes(index) ? char : index))
      .join("");
  });

describe("E3 - Password is Valid", () => {
  listOfPasswords.map((password, i) => {
    it(i + " - " + password, () => {
      cy.viewport(1360, 568);

      cy.visit(link);
      cy.get(
        "body > .container > .form-group > .input-group > #password"
      ).click();
      cy.get("body > .container > .form-group > .input-group > #password").type(
        password
      );
      cy.get("#password-button").contains("Valid");
    });
  });
});

describe("E3 - Password is Invalid", () => {
  listOfPasswords.map((password, i) => {

    if (i < 6) password = password.substr(0, i+1)
    if (i < 20) password = password.toLowerCase();
    else if (i < 40) password = password.replace(/\d/g, "A");
    else if (i < 60) password = password.replace(/\d/g, "A").toLowerCase();
    else if (i < 80) password = listOfPasswords.slice(i-60, 100).join("").split("").slice(0, i-60+9).join("")
    else if (i < 100) password = password.split("").map((char, i) => `${password.charCodeAt(i)}`[0]).join("") 

    it(i + " - " + password, () => {
      cy.viewport(1360, 568);
      cy.visit(link);
      cy.get("body > .container > .form-group > .input-group > #password").click();
      cy.get("body > .container > .form-group > .input-group > #password").type(password);
      cy.get("#password-button").contains("Invalid");
    });
  });
});

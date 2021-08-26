
const link = "http://127.0.0.1:5500/"

const names = ["James Mary",
"Robert Patricia",
"John Jennifer",
"Michael Linda",
"William Elizabeth",
"David Barbara",
"Richard Susan",
"Joseph Jessica",
"Thomas Sara",
"Charles Karen",
"Christopher Nancy",
"Daniel Lisa",
"Matthew Betty",
"Anthony Margaret",
"Mark Sandra",
"Donald Ashley",
"Steven Kimberly",
"Paul Emily",
"Andrew Donna",
"Joshua Michelle",
"Kenneth Dorothy",
"Kevin Carol",
"Brian Amanda",
"George Melissa",
"Edward Deborah",
"Ronald Stephanie",
"Timothy Rebecca",
"Jason Sharon",
"Jeffrey Laura",
"Ryan Cynthia",
"Jacob Kathleen",
"Gary Amy",
"Nicholas Shirley",
"Eric Angela",
"Jonathan Helen",
"Stephen Anna",
"Larry Brenda",
"Justin Pamela",
"Scott Nicole",
"Brandon Emma",
"Benjamin Samantha",
"Samuel Katherine",
"Gregory Christine",
"Frank Debra",
"Alexander Rachel",
"Raymond Catherine",
"Patrick Carolyn",
"Jack Janet",
"Dennis Ruth",
"Jerry Maria",
"Tyler Heather",
"Aaron Diane",
"Jose Virginia",
"Adam Julie",
"Henry Joyce",
"Nathan Victoria",
"Douglas Olivia",
"Zachary Kelly",
"Peter Christina",
"Kyle Lauren",
"Walter Joan",
"Ethan Evelyn",
"Jeremy Judith",
"Harold Megan",
"Keith Cheryl",
"Christian Andrea",
"Roger Hannah",
"Noah Martha",
"Gerald Jacqueline",
"Carl Frances",
"Terry Gloria",
"Sean Ann",
"Austin Teresa",
"Arthur Kathryn",
"Lawrence Sara",
"Jesse Janice",
"Dylan Jean",
"Bryan Alice",
"Joe Madison",
"Jordan Doris",
"Billy Abigail",
"Bruce Julia",
"Albert Judy",
"Willie Grace",
"Gabriel Denise",
"Logan Amber",
"Alan Marilyn",
"Juan Beverly",
"Wayne Danielle",
"Roy Theresa",
"Ralph Sophia",
"Randy Marie",
"Eugene Diana",
"Vincent Brittany",
"Russell Natalie",
"Elijah Isabella",
"Louis Charlotte",
"Bobby Rose",
"Philip Alexis",
"Johnny Kayla"]

describe("E1 - Name is Valid", () => {
  names.map((name, i) => {
    it(i+" - "+ name, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #name').click()
      cy.get('body > .container > .form-group > .input-group > #name').type(name)
      cy.get('#name-button').contains("Valid");
    });
  })

});

describe("E1 - Name is Invalid", () => {
  names.map((name, i) => {
    if(i < 10) name = name.toUpperCase()
    else if(i < 20) name = name.toLowerCase()
    else if(i < 30) name = name.split(" ")[0]
    else if(i < 40) name = `${name.split(" ")[0]}\s\s${name.split(" ")[1]}`
    else if(i < 50) name = `${name.split(" ")[0]}${name.split(" ")[1]}`
    else if(i < 60) name = `${name.split(" ")[0].slice(0, 2).toUpperCase()}${name.split(" ")[0].slice(2)}`
    else if(i < 70) name = `${i}`.padStart(5, i)
    else if(i < 80) name = `${i}`.padStart(5, i) + " " + `${i}`.padStart(5, i)
    else if(i < 90) name = ['@', "!", "&", "*", "(", ")", "%", "¨", "#", "-"][i-80]
    else if(i < 100) name = ['', "!", "&", "*", "(", ")", "%", "¨", "#", "-"][i-90] + name
    
    it(i+" - "+ name, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #name').click()
      cy.get('body > .container > .form-group > .input-group > #name').type(name)
      cy.get('#name-button').contains("Invalid");
    });
  })

});

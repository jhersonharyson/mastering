
const link = "http://127.0.0.1:5500/"

const listOfEmails = [
"pleasantSharon@wanadoo.br",
"defeatedJay@hotmail.br",
"anxiousWendy@bol.br",
"Aimeesmiling@hotmail.br",
"Karibusy@hotmail.br",
"homelessShannon@centurytel.br",
"Franciscocondemned@yahoo.br",
"blackGeorge@optonline.br",
"Darrellcondemned@bol.br",
"busyIvan18@frontiernet.br",
"outrageousMichelle@virgilio.br",
"gorgeousRandy@live.br",
"fineWesley@cox.br",
"stormyKurt@hotmail.br",
"Haleystupid@hotmail.br",
"confusedCaroline54@aim.br",
"superAaron@yahoo.br",
"Richardlovely@virgilio.br",
"eagerKari71@yahoo.br",
"Trishathoughtful@voila.br",
"unsightlyShana@yahoo.br",
"Ninamysterious@rediffmail.br",
"homelessBrianna@hotmail.br",
"nervousJordan65@chello.br",
"Sheilaquaint@sky.br",
"outrageousLacey@outlook.br",
"gorgeousMartha@bigpond.br",
"Carlstrange@bol.br",
"muddyMeghan0@bluewin.br",
"differentLuis@tiscali.br",
"grumpyJose@gmail.br",
"Reginatough@sympatico.br",
"Gregoryfine@rediffmail.br",
"Briannahealthy@optusnet.br",
"doubtfulRoberto@tin.br",
"impossibleJuan@live.br",
"tiredErin61@comcast.br",
"aggressiveBenjamin@arcor.br",
"fairShana@freenet.br",
"Annblushing@home.br",
"Frankcharming@frontiernet.br",
"poorCandice24@live.br",
"Seanscary@laposte.br",
"crazyRafael99@rambler.br",
"selfishMindy@zonnet.br",
"adorableKristopher@telenet.br",
"cloudyWesley@live.br",
"livelyRoberto89@mail.br",
"powerfulAlexis39@msn.br",
"Reneemisty@bigpond.br",
"cooperativeHillary37@live.br",
"Rubenawful@yahoo.br",
"Andreadisturbed@comcast.br",
"Colleenworried@me.br",
"depressedDennis86@sky.br",
"helpfulMaria12@live.br",
"gentleHannah@terra.br",
"Dianefierce@yahoo.br",
"annoyingBrittney@skynet.br",
"brainyDerrick8@live.br",
"Lindsayputrid@yahoo.br",
"tenderWhitney@sympatico.br",
"Robynnice@yahoo.br",
"ashamedStephanie@live.br",
"eagerTrisha@free.br",
"crowdedDrew68@tiscali.br",
"cleanMorgan30@frontiernet.br",
"mushyChristie@outlook.br",
"smilingBridget99@skynet.br",
"Annesuccessful@yahoo.br",
"doubtfulSummer47@hotmail.br",
"wickedTerrance83@yahoo.br",
"smilingKristy83@yahoo.br",
"averageJerry@yahoo.br",
"richDouglas@aliceadsl.br",
"Seanobnoxious@wanadoo.br",
"sparklingKeri@live.br",
"jitteryClayton@aol.br",
"wide-eyedFrancisco11@neuf.br",
"vivaciousSeth@yahoo.br",
"Caravivacious@planet.br",
"Richarddelightful@planet.br",
"Russellinnocent@web.br",
"uninterestedJoy59@rocketmail.br",
"healthyKayla39@qq.br",
"badBrandy@live.br",
"Tashaenvious@free.br",
"faithfulAutumn70@yahoo.br",
"splendidMathew69@yahoo.br",
"helpfulColleen@live.br",
"repulsiveCarmen@yahoo.br",
"Williealert@ntlworld.br",
"cheerfulBrittney24@rediffmail.br",
"Christinedoubtful@yahoo.br",
"thoughtfulMelinda21@aliceadsl.br",
"friendlyTheresa@shaw.br",
"Jaimefoolish@yahoo.br",
"Hannahmodern@hotmail.br",
"vivaciousTracy@yahoo.br",
"fierceRandy@gmail.br",
]

describe("E2 - Email is Valid", () => {
  listOfEmails.map(email=> email.replace(/\d/g, "").toLowerCase()).map((email, i) => {
    it(i+" - "+ email, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #email').click()
      cy.get('body > .container > .form-group > .input-group > #email').type(email)
      cy.get('#email-button').contains("Valid");
    });
  })
});

describe("E2 - Email is Invalid", () => {
  listOfEmails.concat("@", "a@.br", "T@teste.br").map((email, i) => {
    it(i+" - "+ email, () => {
      cy.viewport(1360, 568);
  
      cy.visit(link);
      cy.get('body > .container > .form-group > .input-group > #email').click()
      cy.get('body > .container > .form-group > .input-group > #email').type(email)
      cy.get('#email-button').contains("Invalid");
    });
  })
});


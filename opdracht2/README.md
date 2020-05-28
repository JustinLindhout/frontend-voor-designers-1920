# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Ik heb een carousel met foto's gemaakt die te bedienen is met pijltjes op het scherm. Het was ook de bedoeling om het carousel te bedienen met de pijltoetsen op het toetsenbord, dit is helaas niet gelukt.

https://justinlindhout.github.io/frontend-voor-designers-1920/opdracht2/demo/index.html

## interface
Leg de interface uit.
De gebruiker kan met de pijlen op het scherm door de foto's heen gaan, dit kan beide kanten op. Zo geef je gebruiker het gevoel dat zij in controle zijn van wat er gebeurd.
De pijlen zien er zo uit dat het aangeeft dat je kan sliden tussen meerdere foto's. Appearance follows behavior.
Het is niet me geulkt om principles 8 goed uit te voeren.

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

Ik heb de slider werkend gekregen doormiddel van buttons, met deze buttons kan je door de foto's sliden. Mijn idee was om ook tussen de foto's te kunnen sliden doormiddel van de pijltoetsen op het toetsenbord. Dit is mij helaas nog niet gelukt.
## code

De foto's in mijn carousel staan zonder css in een lange horizontale rijd= naast elkaar. Door de overflow van de slider op hidden te zetten zie je enkel 1 afbeelding. Over de foto's zit een container waar de slider in zit.
Met javascript en Jquery heb ik de slider laten bewegen. Iedere keer dat slider wordt geactiveerd worden de afbeeldingen met css opgeschoven.

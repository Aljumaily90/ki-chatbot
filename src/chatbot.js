const readlineSync = require('readline-sync');

// Funktion, um den Chatbot zu starten
function startChat() {
    console.log("Willkommen beim KI-Chatbot!");

    // Benutzername abfragen
    let userName = readlineSync.question("Wie heisst du? ");
    while (!userName) {
        console.log("Bitte gib einen gültigen Namen ein.");
        userName = readlineSync.question("Wie heißt du? ");
    }
    console.log(`Hallo ${userName}, schön dich kennenzulernen!`);

    // Stimmung abfragen
    let userMood = readlineSync.question("Wie geht es dir heute? ");
    while (!userMood) {
        console.log("Bitte gib eine Antwort ein.");
        userMood = readlineSync.question("Wie geht es dir heute? ");
    }
    if (userMood.toLowerCase() === 'gut' || userMood.toLowerCase() === 'sehr gut') {
        console.log("Das freut mich zu hören!");
    } else {
        console.log("Das tut mir leid. Ich hoffe, dein Tag wird besser!");
    }

    // Programmiererfahrung abfragen
    let programmingExperience = readlineSync.question("Wie lange programmierst du schon? ");
    while (!programmingExperience) {
        console.log("Bitte gib eine gültige Antwort ein.");
        programmingExperience = readlineSync.question("Wie lange programmierst du schon? ");
    }
    console.log(`${programmingExperience}, das ist toll!`);

    // Lieblingsprogrammiersprache abfragen
    let favoriteLanguage = readlineSync.question("Was ist deine Lieblingsprogrammiersprache? ");
    while (!favoriteLanguage) {
        console.log("Bitte gib eine Programmiersprache ein.");
        favoriteLanguage = readlineSync.question("Was ist deine Lieblingsprogrammiersprache? ");
    }
    if (favoriteLanguage.toLowerCase() === 'javascript') {
        console.log("JavaScript ist eine tolle Sprache, um Webanwendungen zu erstellen!");
    } else {
        console.log(`${favoriteLanguage} ist auch eine interessante Sprache!`);
    }

    // Benutzer fragen, ob er weiter sprechen möchte
    let continueChat = readlineSync.question("Möchtest du weiter mit mir sprechen? (ja/nein) ");
    if (continueChat.toLowerCase() === 'ja') {
        startChat(); // Chat erneut starten
    } else {
        console.log("Danke fürs Gespräch. Bis zum nächsten Mal!");
    }
}

// Starte den Chatbot
startChat();

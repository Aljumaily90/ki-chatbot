const readlineSync = require('readline-sync');

// Funktion, um den Chatbot zu starten
function startChat() {
    console.log("Willkommen beim KI-Chatbot!");

    // Benutzername abfragen
    let userName = readlineSync.question("Wie heisst du? ");
    console.log(`Hallo ${userName}, schön dich kennenzulernen!`);

    // Stimmung abfragen
    let userMood = readlineSync.question("Wie geht es dir heute? ");
    if (userMood.toLowerCase() === 'gut' || userMood.toLowerCase() === 'sehr gut') {
        console.log("Das freut mich zu hören!");
    } else {
        console.log("Das tut mir leid. Ich hoffe, dein Tag wird besser!");
    }

    // Neue Frage hinzufügen
    let programmingExperience = readlineSync.question("Wie lange programmierst du schon? ");
    console.log(`${programmingExperience}, das ist toll!`);

    // Weitere Frage zur Programmierung
    let favoriteLanguage = readlineSync.question("Was ist deine Lieblingsprogrammiersprache? ");
    if (favoriteLanguage.toLowerCase() === 'javascript') {
        console.log("JavaScript ist eine tolle Sprache, um Webanwendungen zu erstellen!");
    } else {
        console.log(`${favoriteLanguage} ist auch eine interessante Sprache!`);
    }

    console.log("Danke fürs Gespräch. Bis zum nächsten Mal!");
}

// Starte den Chatbot
startChat();
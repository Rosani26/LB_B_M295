const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const tasks = [
    { id: 1, name: "E-Mails beantworten", description: "Antworten auf Kundenanfragen und interne E-Mails schreiben", done: false, dueDate: "2022-06-30" },
    { id: 2, name: "Treffen mit Kunden vereinbaren", description: "Telefonate führen und Termine für Meetings vereinbaren", done: false, dueDate: "2022-07-05" },
    { id: 3, name: "Präsentation für das Meeting vorbereiten", description: "Eine Präsentation mit aktuellen Daten und Zahlen vorbereiten", done: false, dueDate: "2022-07-15" },
    { id: 4, name: "Code-Review durchführen", description: "Den Code eines Kollegen überprüfen und Feedback geben", done: true, dueDate: "2022-07-01" },
    { id: 5, name: "Dokumentation aktualisieren", description: "Die Dokumentation des Codes auf den neuesten Stand bringen", done: false, dueDate: "2022-07-10" },
    { id: 6, name: "Testfälle schreiben", description: "Automatisierte Testfälle schreiben und ausführen", done: false, dueDate: "2022-07-20" },
    { id: 7, name: "Fehlerbehebung im Backend durchführen", description: "Fehler im Backend identifizieren und beheben", done: false, dueDate: "2022-08-01" },
    { id: 8, name: "UX-Verbesserungen umsetzen", description: "Vorschläge für UX-Verbesserung ausarbeiten und implementieren", done: false, dueDate: "2022-08-15" }
];

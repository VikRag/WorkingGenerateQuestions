import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9TQ-sc88MStF7-zVqdKPS6ovIcp0YJm0",
    authDomain: "generate-questions-117e6.firebaseapp.com",
    projectId: "generate-questions-117e6",
    storageBucket: "generate-questions-117e6.appspot.com", // Corrected URL
    messagingSenderId: "291566258786",
    appId: "1:291566258786:web:7e94d63a8404ecc21e5f3b",
    measurementId: "G-J6NKLH053R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized successfully!");

// Function to upload objects into Firebase Firestore
async function uploadQuestionsToFirestore(dataArray) {
    try {
        for (const item of dataArray) {
            await addDoc(collection(db, "questions"), item); // Add to Firestore
            console.log("Document successfully written for:", item.question);
        }
        console.log("All documents uploaded successfully!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

// Sample data array
const data = [
    { grade: 1, subject: "Math", question: "What is 1 + 1?", answers: ["1", "2", "3", "4"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 2 + 2?", answers: ["1", "2", "3", "4"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 3 + 1?", answers: ["2", "3", "4", "5"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 5 - 2?", answers: ["1", "2", "3", "4"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 6 - 3?", answers: ["2", "3", "4", "5"], correctAnswer: "3" },
];

// Attach to window for global access
window.uploadQuestionsToFirestore = uploadQuestionsToFirestore;
window.data = data;

console.log("Script loaded, functions attached to window!");

// script.js

const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const responses = {
  '¿Qué es inteligencia artificial?': 'La inteligencia artificial (IA) es la capacidad de una máquina para realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, la resolución de problemas y la toma de decisiones.',
  '¿Cuáles son las aplicaciones de la IA?': 'Las aplicaciones de la IA son diversas, incluyendo asistentes virtuales, conducción autónoma, análisis de datos, reconocimiento de voz y visión, entre otras.',
  '¿Qué es un asistente virtual?': 'Un asistente virtual es un programa de computadora que utiliza la IA para realizar tareas y responder a preguntas, como Google Assistant o Amazon Alexa.',
  // Agrega más respuestas aquí
};

sendButton.addEventListener('click', () => {
  const userQuery = userInput.value.trim();
  const response = responses[userQuery];

  if (response) {
    chatLog.innerHTML += `<p>Tú: ${userQuery}</p><p>IA: ${response}</p>`;
    userInput.value = '';
  } else {
    chatLog.innerHTML += `<p>Tú: ${userQuery}</p><p>IA: Lo siento, no entiendo tu pregunta.</p>`;
    userInput.value = '';
  }
});
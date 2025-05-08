import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: import.meta.env.PUBLIC_N8N_WEBHOOK_URL,
  target: '#n8n-chat',
  mode: 'window',
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: 'es',
  initialMessages: ['Hola! 👋', '¿Cómo podemos ayudarte? 😃'],
  i18n: {
    es: {
      title: 'Somos Barbería Don Fede 💇🏽‍♂️',
      subtitle: 'Estamos listos para atender tu consulta',
      inputPlaceholder: 'Escribí tu pregunta...',
      footer: '',
      getStarted: 'Nueva conversación',
    },
  },
});

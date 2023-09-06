import React from 'react';
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';

const botName = 'DocsBot';

const config = {
  botName: botName,
  lang: 'no',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm bot. I’m here to help you explain how I can help you`
    ),
    
    createCustomMessage('Test', 'custom'),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [],
};

export default config;
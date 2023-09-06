import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleService = () => {
    const botMessage = createChatBotMessage('we are providing Math , Calculas and english etc');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        console.log("helloooo",children,child)
        return React.cloneElement(child, {
            
          actions: {
            handleHello,
            handleService,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
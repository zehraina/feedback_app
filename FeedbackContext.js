import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState([]);

  const addFeedback = (data) => {
    setFeedbackData((prevData) => [...prevData, data]);
  };

  const resolveBill = (index) => {
    setFeedbackData((prevData) => {
      const updatedData = [...prevData];
      if (updatedData[index].type === 'bill') {
        updatedData[index].resolved = true;
      }
      return updatedData;
    });
  };

  return (
    <FeedbackContext.Provider value={{ feedbackData, addFeedback, resolveBill }}>
      {children}
    </FeedbackContext.Provider>
  );
};

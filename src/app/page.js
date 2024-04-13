'use client'
import React, { useState } from 'react';

const TelegramPage = () => {
  const [channelUsername, setChannelUsername] = useState('ft360_ir'); // Set default value

  const handleInputChange = (event) => {
    setChannelUsername(event.target.value);
  };

  const handleOpenTelegram = () => {
    // Check if the Telegram app is available
    window.location.href = `tg://resolve?domain=${channelUsername}`;
    const isTelegramAppAvailable = window.navigator.userAgent.includes('Telegram');
    // 
    // if (isTelegramAppAvailable) {
    //   // Open Telegram app with the provided channel username
    // } else {
    //   // Telegram app not available, provide feedback to the user
    //   alert('The Telegram app is not installed on this device.');
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Open Telegram Channel</h1>
      <input
        type="text"
        placeholder="Enter Telegram Channel Username"
        value={channelUsername}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleOpenTelegram}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Open Telegram
      </button>
    </div>
  );
};

export default TelegramPage;

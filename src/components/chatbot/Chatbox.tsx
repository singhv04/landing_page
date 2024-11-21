"use client";

import { allIcons } from "@/icons/all-icons";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChatLogoIcon from "../logo/ChatLogoIcon";
import UserResponse from "./UserResponse";
import BotResponse from "./BotResponse";
import { fetchUserIP } from "@/utils/FetchUserIP";

const Chatbox: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: string }[]
  >([]);
  const [userIP, setUserIP] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const RETENTION_TIME = 60000; // 60 seconds in milliseconds

  // Load messages from localStorage and check expiration
  const loadMessages = async () => {
    try {
      const ipData = await fetchUserIP(); // Fetch user IP and location
      if (ipData && ipData.ip) {
        const { ip } = ipData; // Destructure IP
        setUserIP(ip); // Update state with the IP

        // Retrieve stored messages from localStorage
        const storedData = localStorage.getItem(`chatbox_${ip}`);
        if (storedData) {
          const { messages, timestamp } = JSON.parse(storedData);

          // Check if retention time has expired
          if (Date.now() - timestamp > RETENTION_TIME) {
            localStorage.removeItem(`chatbox_${ip}`);
          } else {
            setMessages(messages);
          }
        }
      } else {
        console.error("Failed to fetch IP or IP is missing.");
      }
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  // Save messages to localStorage with a timestamp
  const saveMessages = (updatedMessages: typeof messages) => {
    if (userIP) {
      const data = {
        messages: updatedMessages,
        timestamp: Date.now(),
      };
      localStorage.setItem(`chatbox_${userIP}`, JSON.stringify(data));
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    saveMessages(messages);
  }, [messages, userIP]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleClose = () => {
    window.parent.postMessage({ action: "closeChatbox" }, "*");
  };

  const handleSubmit = () => {
    if (message.trim()) {
      const newMessage = { id: Date.now(), text: message, sender: "user" };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setMessage("");

      setTimeout(() => {
        const botResponse = {
          id: Date.now(),
          text: "This is a response from the bot.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.ctrlKey) {
        setMessage((prev) => prev + "\n");
      } else {
        event.preventDefault();
        handleSubmit();
      }
    }
  };

  const { chatClose, send } = allIcons;

  return (
    <div className="bg-gray-900 w-full h-screen rounded-lg shadow-lg flex flex-col border border-emerald-500/25 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 flex items-center justify-end p-3 text-white">
        <div>
          <div onClick={handleClose} className="text-gray-500 cursor-pointer">
            {chatClose}
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto text-white">
        <div className="flex flex-col justify-center items-center pb-3">
          <div className="relative h-16 w-16 rounded-full border-2 border-emerald-500/25 overflow-hidden">
            <Image
              src="/logo.png"
              fill
              quality={100}
              alt="AutomaAi logo Icon"
              className="object-cover"
            />
          </div>
          <h1 className="text-xl my-3">Automa-AI</h1>
          <p className="text-sm text-gray-400">
            Our Virtual Assistant is here to help you
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <div className="self-end pb-1">
            <ChatLogoIcon />
          </div>
          <div className="flex-col space-y-3">
            <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
              <p>
                Hello, we are AutomaAI, and we specialize in using AI Solutions
                to save businesses time and money.
              </p>
            </div>
            <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
              <p>
                Which AI solution are you interested in for your business? We
                offer a range of services from AI chatbots to predictive
                analytics.
              </p>
            </div>
          </div>
        </div>
        {messages.map((msg) =>
          msg.sender === "bot" ? (
            <BotResponse key={msg.id} text={msg.text} />
          ) : (
            <UserResponse key={msg.id} text={msg.text} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-800">
        <div className="flex items-center justify-center gap-2">
          <div className="flex-1">
            <textarea
              ref={textareaRef}
              rows={1}
              value={message}
              onChange={handleChange}
              onInput={handleInput}
              onKeyDown={handleKeyDown} // Attach the updated keydown handler
              className="w-full bg-gray-900 py-2 px-3 rounded-lg focus:outline-none text-white text-sm resize-none overflow-y-auto"
              style={{ maxHeight: "10rem" }}
              placeholder="Type here..."
            />
          </div>
          <div
            onClick={handleSubmit}
            className="-mt-1.5 text-emerald-500 cursor-pointer"
          >
            {send}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;

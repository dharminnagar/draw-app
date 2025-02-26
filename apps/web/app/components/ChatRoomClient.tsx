"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const { socket, loading } = useSocket();
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats] = useState<{ message: string }[]>([]);

  useEffect(() => {
    setChats(messages);
  }, [messages]);

  useEffect(() => {
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );

      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat") {
          if (parsedData.roomId === id) {
            setChats((prevChats) => [
              ...prevChats,
              { message: parsedData.message },
            ]);
          }
        }
      };
    }
  }, [socket, loading, id]);

  return (
    <div>
      {/* {chats.map((chat, index) => (
        <div key={index}>{chat.message}</div>
      ))} */}

      {chats.map((chat, index) => {
        return <div key={index}>{chat.message}</div>;
      })}

      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button
        onClick={() => {
          socket?.send(
            JSON.stringify({
              type: "chat",
              message: currentMessage,
              roomId: id,
            })
          );
          setCurrentMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
}

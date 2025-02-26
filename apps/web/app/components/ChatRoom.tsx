import axios from "axios";
import { BACKEND_URL } from "../room/[slug]/config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string) {
  try {
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    return response.data.messages;
  } catch (error) {
    console.error(error);
  }
}

export async function ChatRoom({ id }: { id: string }) {
  const messages = await getChats(id);

  return (
    <div>
      <ChatRoomClient messages={messages} id={id} />
    </div>
  );
}

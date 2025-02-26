import { ChatRoom } from "../../components/ChatRoom";
import { BACKEND_URL } from "./config";
import axios from "axios";

async function getRoom(slug: string) {
  try {
    const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
    return response.data.room.id;
  } catch (error) {
    console.error(error);
  }
}

export default async function ChatRoom1({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const roomId = await getRoom(slug);
  return <ChatRoom id={roomId} />;
}

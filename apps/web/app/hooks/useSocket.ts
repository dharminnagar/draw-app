import { useEffect, useState } from "react";
import { WS_URL } from "../room/[slug]/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxODBhZTJmNy1jNzI5LTQxMjYtOTkyMC1jNGU3ZGY4NzlmYjEiLCJpYXQiOjE3NDA1NTI1NDd9.Nugv1VCSsceGvtyfXSLyH5hpJi7nMcWrifWZFmI7m7o`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}

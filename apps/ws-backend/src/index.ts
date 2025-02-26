import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

interface IJwtPayload extends JwtPayload {
  userId?: number;
}

wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    ws.close();
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";

  const decoded = jwt.verify(token, JWT_SECRET) as IJwtPayload;

  if (!decoded || !decoded.userId) {
    ws.close();
    return;
  }

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
});

"use client";
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          className={styles.container}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <input
            type="text"
            placeholder="Enter room slug"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button
            onClick={() => {
              router.push(`/room/${roomId}`);
            }}
          >
            Join Room
          </button>
        </div>
      </main>
    </div>
  );
}

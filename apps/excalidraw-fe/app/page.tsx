// pages/index.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Pen, Share2, Users, Layers, Save } from "lucide-react";

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Excalidraw</h1>
            </div>
        </div>
    );
}

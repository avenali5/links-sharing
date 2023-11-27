"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import Builder from "@/components/Builder/Builder";
import Forms from "@/components/Forms/Forms";
import Preview from "@/components/Preview/Preview";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  const [preview, setPreview] = useState(false);

  return (
    <main className='max-width'>
      <Header setPreview={setPreview} />
      <Layout>
        <Builder />
        <Forms setPreview={setPreview} />
      </Layout>
      <Preview setPreview={setPreview} preview={preview} />
    </main>
  );
}

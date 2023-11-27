"use client";
import FinalResult from "@/components/FinalResult/FinalResult";
import React from "react";
import "../globals.css";

type Props = {
  searchParams: any;
};

export default function Page({ searchParams }: Props) {
  return (
    <div>
      <FinalResult searchParams={searchParams} />
    </div>
  );
}

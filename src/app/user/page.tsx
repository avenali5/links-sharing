"use client";
import FinalResult from "@/components/FinalResult/FinalResult";
import React from "react";
import "../globals.css";
import { SearchParams } from "@/utils/types/types";

type Props = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: Props) {
  return (
    <div>
      <FinalResult searchParams={searchParams} />
    </div>
  );
}

"use client";
import React, { useState } from "react";

import { NavBar } from "@/app/components/navbar";

export default function ButtonCustomizer() {
  return (
    <main className="h-screen flex flex-col gap-10 text-center">
      <NavBar title={"Snippets"} />
      <p>Under Development</p>
      <p>If you would like to contribute it go to the main repo</p>
    </main>
  );
}

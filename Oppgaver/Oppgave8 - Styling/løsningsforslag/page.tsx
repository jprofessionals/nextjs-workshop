
import React from "react";
import "./globals.css";
import {RowAlignContainer} from "@/src/common/row-align-container/RowAlignContainer";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        ...
        <div className="workshop">
          Workshop stil
        </div>
        ...
        <RowAlignContainer border={true}>
            <p>Linker her: </p>
            <Link href="/oppgave8">Oppgave 8</Link>
        </RowAlignContainer>
        ...
      </main>
  );
}
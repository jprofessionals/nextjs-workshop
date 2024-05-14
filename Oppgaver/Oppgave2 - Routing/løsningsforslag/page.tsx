import Link from "next/link";
import {RowAlignContainer} from "@/src/common/RowAlignContainer";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ...
        <RowAlignContainer border={true}>
            <p>Linker her: </p>
            <Link href="/oppgave2">Oppgave 2</Link>
        </RowAlignContainer>
      ...
    </main>
  );
}

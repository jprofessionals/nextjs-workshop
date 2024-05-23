import React from "react";
import {RowAlignContainer} from "@/src/common/row-align-container/RowAlignContainer";
// import ReactComponentExample from "@/src/common/react-component-example/ReactComponentExample";
// import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="workshop">
             Workshop med Jpro - React/Next.js
        </div>

        {/* <ReactComponentExample/> */}

        <RowAlignContainer border={true}>
          <p>Link til oppgaver: </p>
        </RowAlignContainer>

      </main>
  );
}

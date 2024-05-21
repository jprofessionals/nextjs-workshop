'use client';

import BackButton from "@/src/common/back-button/BackButton";
import Link from "next/link";
import React from "react";
 import {useRouter} from "next/navigation";
import {RowAlignContainer} from "@/src/common/row-align-container/RowAlignContainer";

export default function Oppgave2() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <main>
            <h1>Oppgave 2</h1>
            <RowAlignContainer border={false}>
                <BackButton/>
                <button onClick={handleBack}>Tilbake</button>
                <Link href="/oppgave2/nesteNivaa">Link til neste nivå</Link>
            </RowAlignContainer>
        </main>
    );
}

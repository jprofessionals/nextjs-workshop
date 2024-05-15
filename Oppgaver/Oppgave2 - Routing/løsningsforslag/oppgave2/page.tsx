'use client';

import BackButton from "@/src/common/BackButton";
import Link from "next/link";
import React from "react";
import {RowAlignContainer} from "@/src/common/RowAlignContainer";
import {useRouter} from "next/navigation";

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

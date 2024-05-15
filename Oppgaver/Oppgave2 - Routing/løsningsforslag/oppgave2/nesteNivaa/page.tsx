'use client';

import BackButton from "@/src/common/back-button/BackButton";
import {RowAlignContainer} from "@/src/common/row-align-container/RowAlignContainer";
import React from "react";

export default function NesteNivaa() {

    return (
        <main>
            <h1>Oppgave 2 - Neste nivå</h1>
            <RowAlignContainer border={false}>
                <BackButton/>
            </RowAlignContainer>
        </main>
    );
}

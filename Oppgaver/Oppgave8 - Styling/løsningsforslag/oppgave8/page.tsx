import BackButton from "@/src/common/back-button/BackButton";
import React from "react";
import styles from "./style.module.css";

export default async function Oppgave8(){
    return (
        <main>
            <div>Oppgave 8</div>
            <BackButton/>

            <div className={`workshop ${styles.workshopOverride}`} style={{ backgroundColor: "blue"}}>
                Workshop stil
            </div>
        </main>
    )
}
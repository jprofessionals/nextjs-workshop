import BackButton from "@/src/common/back-button/BackButton";
import React from "react";
import "./globals.css";

export default async function Oppgave5(){
    return (
        <>
            <div>Oppgave 8</div>
            <BackButton/>

            <div className="workshop" style={{ backgroundColor: "blue"}}>
                Workshop stil
            </div>
        </>
    )
}
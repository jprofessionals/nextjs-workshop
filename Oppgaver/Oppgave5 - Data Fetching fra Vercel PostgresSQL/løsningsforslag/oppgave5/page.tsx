import { sql } from "@vercel/postgres";
import Image from "next/image";
import BackButton from "@/src/common/back-button/BackButton";
import React from "react";

export default async function Oppgave5(){
    const { rows } = await sql`SELECT id, brand, image_url from cars`;

    return (
        <main>
            <div>Antall biler: {rows?.length}</div>
            <BackButton/>

            {rows.map((row) => (
                <div key={row.id}>
                    {row.brand}
                    <Image src={row.image_url} width={500} height={500} alt={`Image of ${row.brand} car`}/>
                </div>
            ))}
        </main>
    );
}
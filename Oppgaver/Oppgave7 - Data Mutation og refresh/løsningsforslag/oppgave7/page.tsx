import { sql } from "@vercel/postgres";
import Image from "next/image";
import BackButton from "@/src/common/back-button/BackButton";
import React from "react";
import {SubmitButton} from "./submit-button";
import {revalidatePath} from "next/cache";

export default async function Oppgave7(){
    const { rows } = await sql`SELECT id, brand from developers`;

    const handleSubmit = async (formData: FormData) => {
        'use server'
        await sql`INSERT INTO developers (name) VALUES (${formData.get('name') as string})`
        revalidatePath('/oppgave7')
    }

    return (
        <main>
            <div>Antall biler: {rows?.length}</div>
            <BackButton/>

            {rows.map((row) => (
                <div key={row.id}>
                    {row.name}
                </div>
            ))}
            <form>
                <label htmlFor={'name'}>Developer name: </label>
                <input type={'text'} name={'name'} id={'name'}/>
                <SubmitButton formAction={handleSubmit}>Submit</SubmitButton>
            </form>
        </main>
    );
}
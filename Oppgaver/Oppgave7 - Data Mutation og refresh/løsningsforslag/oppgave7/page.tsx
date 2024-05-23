import { sql } from "@vercel/postgres";
import Image from "next/image";
import BackButton from "@/src/common/back-button/BackButton";
import React from "react";
import {SubmitButton} from "./submit-button";
import {revalidatePath} from "next/cache";

export default async function Oppgave7(){
    const { rows } = await sql`SELECT id, brand, image_url from cars`;

    const handleSubmit = async (formData: FormData) => {
        'use server'
        await sql`INSERT INTO cars (brand, image_url) VALUES (${formData.get('brand') as string}, ${formData.get('picture') as string})`
        revalidatePath('/oppgave7')
    }

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
            <form>
                <label htmlFor={'picture'}>Picture: </label>
                <input type={'url'} name={'picture'} id={'picture'}/>
                <label htmlFor={'brand'}>Brand: </label>
                <input type={'text'} name={'brand'} id={'brand'}/>
                <SubmitButton formAction={handleSubmit}>Submit</SubmitButton>
            </form>
        </main>
    );
}
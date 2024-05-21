import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function Oppgave5(){
    const { rows } = await sql`SELECT id, brand, image_url from cars`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    {row.brand}
                    <Image src={row.image_url} width={500} height={500} alt={`Image of ${row.brand} car`}/>
                </div>
            ))}
        </div>
    );
}
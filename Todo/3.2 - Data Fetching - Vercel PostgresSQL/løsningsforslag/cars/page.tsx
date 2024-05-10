import { sql } from "@vercel/postgres";

export default async function Cars(){
    const { rows } = await sql`SELECT id, brand, image_url from cars`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    {row.brand}
                    <img src={row.image_url} width={200}></img>
                </div>
            ))}
        </div>
    );
}
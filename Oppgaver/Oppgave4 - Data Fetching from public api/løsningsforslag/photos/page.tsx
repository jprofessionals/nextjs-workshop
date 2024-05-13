'use client';

import { useEffect, useState } from "react";

export default function Photos() {

    type Photo = {
        id: number;
        albumId: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    };

    const [photos, setPhotos] = useState<Photo[]>([]);

    const fetchData = async ()=>  {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');

        if (res.ok) {
            const result = await res.json();
            setPhotos(result);
        }
    }

    useEffect(() => {
       fetchData();
    }, []);


    return (
        <main>
            <div>Antall bilder: {photos?.length}</div>

            {photos?.map(photo =>
                <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
            )}
        </main>
    );
}

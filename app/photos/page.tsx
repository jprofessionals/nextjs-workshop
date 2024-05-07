'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";

export default function Photos() {
    const router = useRouter();
    const [photos, setPhotos] = useState<[]>([]);

    const fetchData = async ()=>  {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        } else {
            const result = await res.json();
            setPhotos(result);
        }
    }

    useEffect(() => {
       fetchData();
    }, []);

    const handleBack = () => {
        router.back();
    }

    return (
        <main>
            <div>Antall bilder: {photos?.length}</div>

            {photos?.map(photo =>
                <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
            )}
        </main>
    );
}

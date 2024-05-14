'use client';

import React, { useEffect, useState } from "react";
import BackButton from "@/src/common/BackButton";
import Image from "next/image";

export default function Oppgave4() {

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
            <BackButton/>

            {photos?.slice(0, 5).map(photo =>
                <>
                    <Image src={photo.thumbnailUrl} width="150" height="150" alt={photo.title}/>
                    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
                </>
            )}
        </main>
    );
}

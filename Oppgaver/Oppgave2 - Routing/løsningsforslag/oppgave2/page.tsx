'use client';

import { useRouter } from 'next/navigation';
import BackButton from "@/src/common/BackButton";

export default function RouteOne() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <main>
            <h1>Route one</h1>
            <div>
                <button onClick={handleBack}>Tilbake</button>
            </div>
            <div>
                <BackButton/>
            </div>
        </main>
    );
}

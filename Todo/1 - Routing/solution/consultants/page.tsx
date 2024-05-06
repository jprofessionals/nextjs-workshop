'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={handleBack}>Tilbake</button>
        </main>
    );
}

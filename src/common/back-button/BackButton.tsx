'use client';

import styles from './styles.module.css'
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <button
            onClick={handleBack}
            className={styles.backButton}
        >
             Tilbake
        </button>
    );
}

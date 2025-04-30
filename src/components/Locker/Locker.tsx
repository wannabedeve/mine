'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollUnlocker() {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            document.body.style.overflow = 'auto';
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => router.events.off('routeChangeComplete', handleRouteChange);
    }, []);

    return null;
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import './style.css';

type LightboxProps = {
    src: string;
    onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
    const [showStates, setShowStates] = useState({
        lightbox: false,
        imgBox: false,
        img: false,
        button: false,
    });

    // Trigger animations step-by-step
    useState(() => {
        const timeouts = [
            setTimeout(() => setShowStates(s => ({ ...s, lightbox: true })), 100),
            setTimeout(() => setShowStates(s => ({ ...s, imgBox: true })), 700),
            setTimeout(() => setShowStates(s => ({ ...s, img: true })), 1000),
            setTimeout(() => setShowStates(s => ({ ...s, button: true })), 1500),
        ];

        return () => timeouts.forEach(clearTimeout);
    });

    const handleClose = () => {
        setShowStates({ lightbox: false, imgBox: false, img: false, button: false });
        setTimeout(onClose, 650);
    };

    return (
        <div
            className={clsx('lightbox', { appearBefore: showStates.lightbox })}
            id="lightbox"
            onClick={e => (e.target as HTMLElement).id === 'lightbox' && handleClose()}
        >
            <div className={clsx('img-box', { appear: showStates.imgBox })}>
                <img
                    src={src}
                    alt="Gallery"
                    className={clsx({ imgAppear: showStates.img })}
                />
                hello
                <button
                    className={clsx('close', { appear: showStates.button })}
                    onClick={handleClose}
                >
                    X
                </button>
            </div>
        </div>
    );
};

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const galleryImages = [
        'https://unsplash.it/800',
        'https://unsplash.it/801',
        'https://unsplash.it/802',
        'https://unsplash.it/803',
        'https://unsplash.it/804',
        'https://unsplash.it/805',
    ];

    return (
        <section className="gallery">
            <div className="container">
                <div className="grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="gallery-box">
                            <img
                                src={src}
                                alt="Gallery"
                                className="gallery-img cursor-pointer"
                                onClick={() => setSelectedImg(src)}
                            />
                            hello
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <>
                    <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
                    <style>{`body { overflow: hidden; }`}</style>
                </>
            )}
        </section>
    );
};

export default Gallery;

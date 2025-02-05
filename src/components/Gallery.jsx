"use client";
import { useState } from 'react';
import a1 from "@/images/a1.jpg"
import a2 from "@/images/a2.jpg"
import a3 from "@/images/a3.jpg"
import a4 from "@/images/a4.jpg"  
import Image from 'next/image';

export default function AfricaTours() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [a1, a2, a3, a4];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            
            <main>
                {/* ... other sections remain the same ... */}

                {/* Gallery Section - Fixed onClick placement */}
                <div className="grid grid-cols-12 gap-4 px-4 lg:px-0">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`md:col-span-${index % 2 === 0 ? 8 : 4} col-span-6  `}
                        >
                            <div 
                                className="group relative overflow-hidden rounded shadow cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={image}
                                    className="w-full lg:h-60 md:h-44 h-48 object-cover"
                                    alt=""
                                />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
                                {/* ... rest of gallery item ... */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox - Fixed Image component usage */}
                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
                        <button 
                            onClick={closeLightbox} 
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                        >
                            &times;
                        </button>
                        
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 text-white text-4xl hover:text-gray-300"
                        >
                            &#8249;
                        </button>

                        <div className="relative w-full h-[80vh] mx-4">
                            <Image
                                src={images[currentImage]}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button 
                            onClick={nextImage}
                            className="absolute right-4 text-white text-4xl hover:text-gray-300"
                        >
                            &#8250;
                        </button>
                    </div>
                )}
            </main>
            {/* ... rest of the components ... */}
        </>
    );
}
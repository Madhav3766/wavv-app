import { useState } from 'react';

export default function PopupPage() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            {isOpen && (
                <div className="relative bg-white text-black p-6 rounded-lg shadow-lg">
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-black hover:text-gray-700"
                    >
                        Close
                    </button>
                    <img
                        src="/path-to-your-image.jpg"
                        alt="Popup Image"
                        className="w-full h-auto rounded-md"
                    />
                </div>
            )}
        </div>
    );
} 
import { QRCode } from 'qrcode.react';
import Link from 'next/link';

export default function QRCodePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Scan the QR Code to Open the App</h1>
            <QRCode value="https://example.com/app-download" size={256} bgColor="#ffffff" fgColor="#000000" />
            <Link href="/">
                <button className="mt-4 px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors">
                    Return Home
                </button>
            </Link>
        </div>
    );
} 
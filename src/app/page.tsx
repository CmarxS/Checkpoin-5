'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/home" 
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700">Go to HomePage
      </Link>
    </div>
  );
}
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
    const router = useRouter();

    const onGoBack = (event) => {
        event.preventDefault();
        router.back();
    };

    return (
        <div className="min-h-screen bg-[#F2F4FF] flex flex-col items-center justify-center p-6 font-sans">
            {/* Container Card */}
            <div className="bg-white p-12 md:p-24 rounded-xl shadow-sm max-w-[540px] w-full text-center flex flex-col items-center">

                {/* Empty State Illustration Placeholder */}
                <div className="mb-10 text-8xl">🕵️‍♂️</div>

                <h1 className="text-[#3A4374] font-bold text-2xl mb-4">
                    404 - Page Not Found
                </h1>

                <p className="text-[#647196] text-md mb-10 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable. Let's get you back on track.
                </p>

                {/* Action Button */}
                <button
                    onClick={onGoBack}
                    className="bg-[#AD1FEA] hover:bg-[#C75AF6] text-white font-bold py-3 px-8 rounded-xl text-xs transition-colors shadow-sm"
                >
                    Go Back
                </button>
            </div>

            {/* Subtle branding footer */}
            <p className="mt-8 text-[#647196] text-sm font-medium opacity-50">
                Frontend Mentor Feedback Board
            </p>
        </div>
    );
};

export default NotFound;
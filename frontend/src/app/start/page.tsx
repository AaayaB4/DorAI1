// src/app/start/page.tsx
import Link from 'next/link';
import React from 'react';

const StartPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#f0f4fc]">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#5b21b6] mb-12">
        What are you looking for?
      </h1>
      <div className="flex flex-col gap-6 min-[400px]:flex-row">
        <Link
          href="/interviewee"
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#5b21b6] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5b21b6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5b21b6] disabled:pointer-events-none disabled:opacity-50"
        >
          Looking for a Job
        </Link>
        <Link
          href="/interviewer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-[#d8b4fe] bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#d8b4fe] hover:text-[#5b21b6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b4fe] disabled:pointer-events-none disabled:opacity-50"
        >
          Looking for Skilled People
        </Link>
      </div>
    </div>
  );
};

export default StartPage;

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const MainPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (splineContainerRef.current) {
        const rect = splineContainerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f0f4fc]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <DotIcon className="h-6 w-6 text-[#5b21b6]" />
          <span className="sr-only">DorAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#5b21b6]">
                    Revolutionize Your Hiring with DorAI
                  </h1>
                  <p className="max-w-[600px] text-[#374151] md:text-xl">
                    DorAI is an AI-powered interview platform that streamlines the hiring process, reduces bias, and
                    helps you find the best talent.
                  </p>
                </div>
                <ul className="grid gap-4 text-[#374151]">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <span>CV pre-processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <span>AI-led technical interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <span>Candidate ranking and feedback</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/start"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#5b21b6] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5b21b6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5b21b6] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#d8b4fe] bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#d8b4fe] hover:text-[#5b21b6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b4fe] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-full">
              <div 
                ref={splineContainerRef}
                className="relative h-[475px] w-full"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <Spline scene="https://prod.spline.design/t4b1j43moKSYIzGE/scene.splinecode" />
              </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e0e7ff]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5b21b6]">Benefits for Companies</h2>
                  <p className="max-w-[600px] text-[#374151] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    DorAI helps companies streamline their hiring process, reduce bias, and increase efficiency.
                  </p>
                </div>
                <ul className="grid gap-6 py-6 text-[#374151]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">Streamlined Hiring</h3>
                      <p className="text-muted-foreground">
                        Automate the initial screening process and focus on the most qualified candidates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">Reduced Bias</h3>
                      <p className="text-muted-foreground">
                        Our AI-powered system ensures a fair and objective assessment of candidates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">Increased Efficiency</h3>
                      <p className="text-muted-foreground">
                        Spend less time on administrative tasks and more on building your dream team.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5b21b6]">Benefits for Candidates</h2>
                  <p className="max-w-[600px] text-[#374151] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    DorAI provides candidates with a fair and personalized assessment process.
                  </p>
                </div>
                <ul className="grid gap-6 py-6 text-[#374151]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">Personalized Feedback</h3>
                      <p className="text-muted-foreground">
                        Receive detailed feedback on your performance to improve your skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">Fair Assessment</h3>
                      <p className="text-muted-foreground">
                        Our AI-powered system ensures a level playing field for all candidates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-[#d8b4fe]" />
                    <div>
                      <h3 className="text-lg font-bold">More Opportunities</h3>
                      <p className="text-muted-foreground">
                        Get matched with the right opportunities based on your skills and experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5b21b6]">Empowering Sustainable Development</h2>
              <p className="max-w-[600px] mx-auto text-[#374151] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                DorAI is committed to supporting the United Nations Sustainable Development Goals, with a focus on
                Quality Education, Decent Work and Economic Growth, and Reduced Inequalities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-[#374151]">
              <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#e0e7ff]">
                <SchoolIcon className="h-12 w-12 text-[#5b21b6]" />
                <h3 className="text-xl font-bold mt-4">Quality Education</h3>
                <p className="text-center mt-2">
                  DorAI's personalized feedback and fair assessment help candidates develop their skills and access more
                  educational opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#e0e7ff]">
                <WorkflowIcon className="h-12 w-12 text-[#5b21b6]" />
                <h3 className="text-xl font-bold mt-4">Decent Work</h3>
                <p className="text-center mt-2">
                  Our platform connects candidates with the right job opportunities, promoting economic growth and
                  decent work.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#e0e7ff]">
                <EqualIcon className="h-12 w-12 text-[#5b21b6]" />
                <h3 className="text-xl font-bold mt-4">Reduced Inequalities</h3>
                <p className="text-center mt-2">
                  By reducing bias and ensuring fair assessments, DorAI contributes to more equal opportunities for all.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#5b21b6] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5b21b6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5b21b6] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign Up for DorAI
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-[#374151]">&copy; 2024 DorAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#374151]" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default MainPage;

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}
function EqualIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
}

function SchoolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function WorkflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
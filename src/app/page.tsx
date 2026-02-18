import React, { Suspense } from "react";
import Sidebar from "@/components/sidebar";
import HomePage from "@/components/homePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F4FF] p-4 md:p-10 lg:px-40 flex flex-col md:flex-row gap-6 font-sans">
      <aside className="flex flex-col gap-6 w-full md:w-1/4 min-w-[255px]">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col gap-6">
        <Suspense fallback={<div />}> 
          <HomePage />
        </Suspense>
      </main>
    </div>
  );
}
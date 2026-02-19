'use client';
import React, { Suspense, useMemo, useState } from "react";
import Sidebar from "@/components/sidebar";
import HomePage from "@/components/homePage";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const [filterCategory, setFilterCategory] = useState('All');

  const suggestions = useSelector((state: any) => state.feedback?.suggestions ?? []) as any[];


  const roadmapCounts = useMemo(() => {
    return {
      planned: suggestions.filter((s) => s.status === 'planned').length,
      inProgress: suggestions.filter((s) => s.status === 'in-progress').length,
      live: suggestions.filter((s) => s.status === 'live').length
    };
  }, [suggestions]);

  return (
    <div className="min-h-screen bg-[#F2F4FF] p-4 md:p-10 lg:px-40 flex flex-col md:flex-row gap-6 font-sans">
      <aside className="flex flex-col gap-6 w-full md:w-1/4 min-w-[255px]">
        <Sidebar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          roadmapCounts={roadmapCounts}
          openRoadmap={() => router.push('/roadmap')}
          openAddFeedback={() => router.push('/add')}
        />
      </aside>
      <main className="flex-1 flex flex-col gap-6">
        <Suspense fallback={<div />}>
          <HomePage
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        </Suspense>
      </main>
    </div>
  );
}
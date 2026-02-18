'use client';
import React, { useMemo, useState } from "react";
import FeedbackModal from "@/components/feedbackModal";
import SuggestionCard from "./cards/feedbackCard";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import path from "path";

const ProductFeedbackApp = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [sortOption, setSortOption] = React.useState('Most Upvotes');

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname(); // gets current path
    const searchParams = useSearchParams(); // gets query parameters

    const openModal = () => {
        setIsModalVisible(true);
        // router.push('/add'); 
    };
    const closeModal = () => {
        setIsModalVisible(false);
        // router.push('/'); 
    };


    // redux data
    const suggestions = useSelector((state) => state.feedback.suggestions);

    // ui state local
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortBY, setSortBY] = useState('Most Upvotes');

    pathname === '/add' && openModal(); // Open modal if URL is /add

    const roadmapCounts = useMemo(() => {
        return {
            planned: suggestions.filter((s) => s.status === 'Planned').length,
            inProgress: suggestions.filter((s) => s.status === 'In-Progress').length,
            live: suggestions.filter((s) => s.status === 'Live').length
        };
    }, [suggestions]);

    const handleAdd = (payload) => {
        dispatch(addSuggestion(payload));
        closeModal();
    }
    const handleUpvotes = (id) => {
        dispatch(toggleUpvote(id));
    }

    // Mock Data
    // const suggestions = [
    //     {
    //         id: 1,
    //         title: "Add tags for solutions",
    //         desc: "Easier to search for solutions based on a specific stack.",
    //         category: "Enhancement",
    //         upvotes: 112,
    //         comments: 2
    //     },
    //     {
    //         id: 2,
    //         title: "Add a dark theme option",
    //         desc: "It would help people with light sensitivities and who prefer dark mode.",
    //         category: "Feature",
    //         upvotes: 99,
    //         comments: 4
    //     },
    //     {
    //         id: 3,
    //         title: "Q&A sections are confusing",
    //         desc: "The current layout makes it hard to distinguish between questions and answers.",
    //         category: "UX",
    //         upvotes: 52,
    //         comments: 0
    //     }
    // ];

    return (
        <div className="">

            {/* Header/Sort Bar */}
            <div className="bg-[#373F68] px-6 py-4 rounded-xl flex justify-between items-center text-white mb-6">
                <div className="flex items-center gap-8">
                    <h2 className="font-bold text-lg">{suggestions.length} Suggestions</h2>
                    <div className="text-sm opacity-90 flex items-center">
                        <span className="mr-2">Sort by:</span>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="bg-transparent font-bold cursor-pointer focus:outline-none text-gray-400"
                        >
                            <option value="Most Upvotes">Most Upvotes</option>
                            <option value="Least Upvotes">Least Upvotes</option>
                            <option value="Most Comments">Most Comments</option>
                            <option value="Least Comments">Least Comments</option>
                        </select>
                    </div>
                </div>
                <button onClick={openModal} className="bg-[#AD1FEA] hover:bg-[#C75AF6] px-6 py-3 rounded-xl font-bold text-xs transition-colors">
                    + Add Feedback
                </button>
            </div>

            {/* Conditional Rendering: List vs Empty State */}
            <div className="flex flex-col">
                {suggestions.length > 0 ? (
                    suggestions.map((item) => (
                        <SuggestionCard
                            key={item.id}
                            upvotes={item.upvotes}
                            title={item.title}
                            desc={item.desc}
                            category={item.category}
                            comments={item.comments}
                        />
                    ))
                ) : (
                    /* No Suggestions Found State */
                    <div className="bg-white rounded-xl py-24 flex flex-col items-center text-center shadow-sm">
                        <div className="mb-10 text-6xl">🕵️‍♂️</div>
                        <h2 className="text-[#3A4374] font-bold text-2xl mb-4">There is no feedback yet.</h2>
                        <p className="text-[#647196] max-w-sm mb-10">
                            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
                        </p>
                        <button onClick={openModal} className="bg-[#AD1FEA] hover:bg-[#C75AF6] px-6 py-3 rounded-xl text-white font-bold text-xs transition-colors">
                            + Add Feedback
                        </button>
                    </div>
                )}
            </div>
            <FeedbackModal isVisible={isModalVisible} onCancel={closeModal} onSubmit={(values) => console.log(values)} />

        </div>
    );
};

export default ProductFeedbackApp;
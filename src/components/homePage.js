'use client';
import React, { useMemo, useState, useEffect } from "react";
import FeedbackModal from "@/components/feedbackModal";
import SuggestionCard from "./cards/feedbackCard";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestion, updateSuggestion, toggleUpvote, deleteSuggestion } from '@/store/feedbackSlice';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductFeedbackApp = ( { filterCategory, setFilterCategory } ) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [editingFeedback, setEditingFeedback] = React.useState(null);
    // ui state local
    const [sortOption, setSortOption] = React.useState('Most Upvotes');
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname(); // gets current path
    const searchParams = useSearchParams(); // gets query parameters

    const openModal = () => {
        setIsModalVisible(true);
        setEditingFeedback(null);
    };
    const closeModal = () => {
        setIsModalVisible(false);
        setEditingFeedback(null);
        // router.push('/'); 
    };

    // redux data
    const suggestions = useSelector((state) => state.feedback.suggestions);

    useEffect(() => {
        if (pathname === '/add') openModal();
    }, [pathname]);

    const handleAdd = (payload) => {
        dispatch(addSuggestion(payload));
        closeModal();
    }
    const handleEdit = (payload) => {
        dispatch(updateSuggestion({ id: editingFeedback.id, ...payload }));
        closeModal();
    }
    const handleUpvotes = (id) => {
        dispatch(toggleUpvote(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteSuggestion(id));
    }

    const handleView = (item) => {
        router.push(`/details/${item.id}`);
    }

    const filtered = suggestions.filter((s) => filterCategory === 'All' || s.category === filterCategory);

    const sorted = React.useMemo(() => {
        return [...filtered].sort((a, b) => {
            if (sortOption === 'Most Upvotes') return b.upvotes - a.upvotes;
            if (sortOption === 'Least Upvotes') return a.upvotes - b.upvotes;
            if (sortOption === 'Most Comments') return b.comments - a.comments;
            if (sortOption === 'Least Comments') return a.comments - b.comments;
            return 0;
        });
    }, [filtered, sortOption]);

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
                {sorted.length > 0 ? (
                    sorted.map((item) => (
                        <SuggestionCard
                            key={item.id}
                            id={item.id}
                            upvotes={item.upvotes}
                            upvoted={item.upvoted}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            comments={item.comments}
                            onView={() => handleView(item)}
                            onUpvote={handleUpvotes}
                            onEdit={() => { setEditingFeedback(item); setIsModalVisible(true); }}
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
            <FeedbackModal isVisible={isModalVisible} onCancel={closeModal} onSubmit={editingFeedback ? handleEdit : handleAdd} editingFeedback={editingFeedback} onDelete={handleDelete} />

        </div>
    );
};

export default ProductFeedbackApp;
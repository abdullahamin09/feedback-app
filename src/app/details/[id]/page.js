'use client';
import React, { useMemo, useState, useEffect } from "react";
import FeedbackDetail from "@/components/feedbackDetail";
import FeedbackModal from "@/components/feedbackModal";
import { useRouter, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpvote, addComment, deleteSuggestion } from "@/store/feedbackSlice";

export default function Page () {
    const router = useRouter();
    const params = useParams();
    const { id } = params || {};
    const suggestionsId = Number(id);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const suggestions = useSelector((state) => (state.feedback && state.feedback.suggestions) ? state.feedback.suggestions : []);
    const comments = useSelector((state) => {
        const c = (state.feedback && state.feedback.comments) ? state.feedback.comments : [];
        const entry = Array.isArray(c)
            ? c.find((item) => item.suggestionId === suggestionsId)
            : c[suggestionsId];
        return entry?.comments || [];
    });

    const feedback = useMemo(() => {
        return suggestions.find((s) => s.id === suggestionsId);
    }, [suggestions, suggestionsId]);

    useEffect(() => {
        if (!feedback) {
            router.push('/');
        }
    }, [feedback, router]);

    if (!feedback) {
        return null;
    }

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const handleOnBack = (event) => {
        if (event && event.preventDefault) event.preventDefault();
        router.back();
    };

    const handleUpvote = (id) => {
        dispatch(toggleUpvote(id));
    };

    const handleAddComment = (text) => {
        if (!text || !text.trim()) return;
        const comment = {
            id: Date.now(),
            user: {
                image: "/assets/user-current.png",
                name: "You",
                username: "you"
            },
            content: text.trim(),
            createdAt: Date.now()
        };
        dispatch(addComment({ suggestionId: suggestionsId, comment }));
    };



    const handleEditFeedback = (event) => {
        if (event && event.preventDefault) event.preventDefault();
        openModal();
    };

    return (
        <div className=" bg-[#F2F4FF]">
            <FeedbackDetail feedback={feedback} comments={comments} onSubmit={handleAddComment} onBack={handleOnBack} onEdit={handleEditFeedback} onUpvote={handleUpvote} />
            <FeedbackModal isVisible={isModalVisible} editingFeedback={feedback} onCancel={closeModal} onSubmit={(values) => console.log(values)} />
        </div>
    );
}
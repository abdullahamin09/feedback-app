'use client';

import { useState } from 'react';
import { usePathname, useRouter, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from 'lucide-react';
import FeedbackModal from './feedbackModal';
import { addSuggestion, updateSuggestion, deleteSuggestion } from '../store/feedbackSlice';

const Navbar = ({ suggestions = [], sortOption = 'Most Upvotes', setSortOption = () => {}, openModal = () => {} }) => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const feedbackItems = useSelector((state) => state.feedback ? state.feedback.suggestions : []);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFeedback, setEditingFeedback] = useState(null);
    
    // Get current feedback if on details page
    const currentFeedback = pathname.startsWith('/details') 
        ? feedbackItems.find(item => item.id === parseInt(params.id))
        : null;
    
    const handleOnBack = (event) => {
        event.preventDefault();
        router.back();
    }

    const handleOpenModal = () => {
        if (currentFeedback) {
            setEditingFeedback(currentFeedback);
        } else {
            setEditingFeedback(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingFeedback(null);
    };

    const handleAddFeedback = (values) => {
        if (editingFeedback) {
            dispatch(updateSuggestion({ id: editingFeedback.id, ...values }));
        } else {
            dispatch(addSuggestion(values));
        }
        handleCloseModal();
    };

    const handleDeleteFeedback = (id) => {
        dispatch(deleteSuggestion(id));
        handleCloseModal();
        router.push('/');
    };

    const buttonText = currentFeedback ? 'Edit Feedback' : '+ Add Feedback';
    
    return (
        <>
            <div className='bg-[#F2F4FF] py-6'>
                {pathname == '/' && (
                    null
                )}
                {(pathname == '/roadmap' || pathname.startsWith('/details')) && (
                    <>
                        <div className="max-w-7xl mx-auto bg-[#373F68] px-6 py-4 rounded-xl flex justify-between items-center text-white">
                            <button
                                className="flex items-center group text-white transition cursor-pointer"
                                onClick={handleOnBack}
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                <span className='group-hover:underline'>Go Back</span>
                            </button>
                            <button onClick={handleOpenModal} className="bg-[#AD1FEA] hover:bg-[#C75AF6] px-6 py-3 rounded-xl font-bold text-xs transition-colors">
                                {buttonText}
                            </button>
                        </div>
                    </>
                )}
            </div>
            <FeedbackModal
                isVisible={isModalOpen}
                onCancel={handleCloseModal}
                onSubmit={handleAddFeedback}
                editingFeedback={editingFeedback}
                onDelete={handleDeleteFeedback}
            />
        </>
    );
}

export default Navbar;
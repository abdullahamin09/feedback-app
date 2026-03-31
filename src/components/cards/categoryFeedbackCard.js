'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronUp, MessageCircle } from 'lucide-react';

const CategoryFeedbackCard = ({ id, title, description, category, status, statusColor, initialVotes = 0, comments = 0 }) => {
    const router = useRouter();
    const [voteCount, setVoteCount] = useState(initialVotes);
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = () => {
        if (!hasVoted) {
            setVoteCount(prev => prev + 1);
            setHasVoted(true);
        } else {
            setVoteCount(prev => prev - 1);
            setHasVoted(false);
        }
    };

    const handleCardClick = () => {
        router.push(`/details/${id}`);
    };

    return (
        <div className="bg-white group rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={handleCardClick}>
            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full ${statusColor?.dot || 'bg-gray-400'}`}>
                    </div>
                    <div className="text-sm capitalize">
                        {status}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#4661E6] transition-colors">
                        {title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                        {description}
                    </p>

                    {/* Category Tag */}
                    <span className="bg-[#F2F4FF] text-[#4661E6] px-4 py-1.5 rounded-lg text-xs font-semibold">
                        {category}
                    </span>
                </div>

                {/* Voting Section */}
                <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleVote();
                            }}
                            className={`flex gap-1 items-center px-3 py-2 rounded-lg transition-colors ${hasVoted
                                ? 'bg-purple-100 hover:bg-purple-200'
                                : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            <ChevronUp className={`w-5 h-5 ${hasVoted ? 'text-purple-600' : 'text-gray-600'}`} />
                            <span className={`font-bold ${hasVoted ? 'text-purple-600' : 'text-gray-900'}`}>
                                {voteCount}
                            </span>
                        </button>
                    </div>
                    {/* Comments Section */}
                    <div className="flex items-center text-gray-500" onClick={(e) => e.stopPropagation()}>
                        <MessageCircle className="w-5 h-5 mr-1" />
                        <span className="font-medium">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryFeedbackCard;
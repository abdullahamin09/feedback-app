'use client';
import  { useState } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';

const CategoryFeedbackCard = ({ id, title, description, category, initialVotes = 12, comments = 0 }) => {
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

    return (
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                {/* Voting Section */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={handleVote}
                        className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${hasVoted
                                ? 'bg-purple-100 hover:bg-purple-200'
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                    >
                        <ChevronUp className={`w-5 h-5 ${hasVoted ? 'text-purple-600' : 'text-gray-600'}`} />
                        <span className={`font-bold ${hasVoted ? 'text-purple-600' : 'text-gray-900'}`}>
                            {voteCount}
                        </span>
                        <span className="text-xs text-gray-500">Votes</span>
                    </button>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                        {description}
                    </p>

                    {/* Category Tag */}
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Comments Section */}
                <div className="flex items-center text-gray-500">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span className="font-medium">{comments}</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryFeedbackCard;
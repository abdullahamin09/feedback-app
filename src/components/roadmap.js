'use client';
import { useRouter } from 'next/navigation';
import CategoryFeedbackCard from './cards/categoryFeedbackCard';
import { ArrowLeft, Plus } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";

// Category Section Component
const CategorySection = ({ name, items, onVote }) => {
  let statusColor = {};
  if (items[0]?.status === 'planned') {
    statusColor = { dot: 'bg-orange-400', label: 'Ideas prioritized for research' };
  } else if (items[0]?.status === 'in-progress') {
    statusColor = { dot: 'bg-purple-500', label: 'Currently being developed' };
  } else if (items[0]?.status === 'live') {
    statusColor = { dot: 'bg-blue-400', label: 'Released features' };
  }
  return (
    <div className="space-y-4">
      {/* Category Header */}
      <div >
        <div className="flex items-baseline ">
          <h3 className="text-xl font-semibold text-gray-800 capitalize">
            {name}
          </h3>
          <span className="ml-2 text-sm text-gray-500">
            ({items.length})
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {statusColor.label}
        </div>
      </div>

      {/* Feedback Items for this category */}
      <div className="space-y-4">
        {items.map((item) => (
          <CategoryFeedbackCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            statusColor={statusColor}
            initialVotes={item.votes}
            comments={item.comments}
          />
        ))}
      </div>
    </div>
  );
};

// Main Feedback Board Component
const FeedbackBoard = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const feedbackItems = useSelector((state) => state.feedback ? state.feedback.suggestions : []);

  // Group items by category
  const groupedItems = feedbackItems.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {});

  const handleOnBack = (event) => {
    event.preventDefault();
    router.back();
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          onClick={handleOnBack}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className='group-hover:underline'>Go Back</span>
        </button>
        <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Add Feedback
        </button>
      </div>

      {/* Roadmap */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Roadmap</h2>
      </div>

      {/* Categories and Feedback Items */}
      <div className="space-x-6 flex">
        {Object.entries(groupedItems).map(([categoryName, items]) => (
          <CategorySection
            key={categoryName}
            name={categoryName}
            items={items}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackBoard;
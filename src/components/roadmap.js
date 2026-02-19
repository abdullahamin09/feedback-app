'use client';
import { useRouter } from 'next/navigation';
import CategoryFeedbackCard from './cards/categoryFeedbackCard';
import { ArrowLeft, Plus } from 'lucide-react';



// Category Section Component
const CategorySection = ({ name, items, onVote }) => {
  return (
    <div className="space-y-4">
      {/* Category Header */}
      <div className="flex items-baseline">
        <h3 className="text-xl font-semibold text-gray-800">
          {name}
        </h3>
        <span className="ml-2 text-sm text-gray-500">
          ({items.length})
        </span>
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
  const router = useRouter();
  const feedbackItems = [
    {
      id: 1,
      category: "UI/UX",
      title: "Add dark mode support",
      description: "It would be great to have a dark mode option for late night coding sessions",
      votes: 24,
      comments: 8
    },
    {
      id: 2,
      category: "UI/UX",
      title: "Improve mobile responsiveness",
      description: "The dashboard layout breaks on smaller screens",
      votes: 18,
      comments: 12
    },
    {
      id: 3,
      category: "Feature Request",
      title: "Export data to CSV",
      description: "Allow users to export their feedback data in CSV format",
      votes: 12,
      comments: 5
    },
    {
      id: 4,
      category: "Feature Request",
      title: "Integrate with Slack",
      description: "Send notifications to Slack when new feedback is submitted",
      votes: 8,
      comments: 3
    },
    {
      id: 5,
      category: "Bug",
      title: "Fix login authentication",
      description: "Users are experiencing issues when logging in with Google",
      votes: 32,
      comments: 15
    },
  ];

  // Group items by category
  const groupedItems = feedbackItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleOnBack = (event) => {
    event.preventDefault();
    router.back();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
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
      <div className="space-y-8">
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
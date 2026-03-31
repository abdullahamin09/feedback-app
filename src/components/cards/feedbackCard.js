const FeedbackCard = ({ id, upvotes, upvoted, title, description, category, comments, onView, onUpvote, onEdit }) => {
  const hasVoted = !!upvoted;
  return (
    <div onClick={() => onView && onView()} className="bg-white p-7 rounded-xl flex items-center shadow-sm hover:cursor-pointer group mb-5 last:mb-0">
      {/* Upvote Box */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onUpvote && onUpvote(id);
        }}
        className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${hasVoted ? 'bg-purple-100 hover:bg-purple-200' : 'bg-gray-50 hover:bg-gray-100'} mr-10`}
      >
        <span className={`text-xs font-bold ${hasVoted ? 'text-purple-600' : 'text-gray-600'}`}>^</span>
        <span className={`font-bold text-xs ${hasVoted ? 'text-purple-600' : 'text-gray-900'}`}>{upvotes}</span>
        <span className="text-xs text-gray-500">Votes</span>
      </button>

      {/* Description Content */}
      <div className="flex-1">
        <h3 className="text-[#3A4374] font-bold text-lg group-hover:text-[#4661E6] transition-colors">
          {title}
        </h3>
        <p className="text-[#647196] text-md my-2">
          {description}
        </p>
        <span className="bg-[#F2F4FF] text-[#4661E6] px-4 py-1.5 rounded-lg text-xs font-semibold">
          {category}
        </span>
      </div>

      {/* Comments Counter */}
      <div className="flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit && onEdit();
          }}
          className="text-[#4661E6] hover:text-[#7C91F9] font-semibold text-sm"
        >
          Edit
        </button>
        <div className="flex items-center gap-2">
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
            <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.109-3.025-.312l-3.385 1.379z" fill="#CDD2EE" fillRule="nonzero" />
          </svg>
          <span className="font-bold text-[#3A4374]">{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;  
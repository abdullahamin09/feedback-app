const FeedbackCard = ({ upvotes, title, desc, category, comments }) => {
  return (
    <div className="bg-white p-7 rounded-xl flex items-center shadow-sm hover:cursor-pointer group mb-5 last:mb-0">
      {/* Upvote Box */}
      <div className="bg-[#F2F4FF] group-hover:bg-[#CFD7FF] min-w-[40px] h-12 rounded-lg flex flex-col items-center justify-center mr-10 transition-colors">
        <span className="text-[#4661E6] text-xs font-bold">^</span>
        <span className="text-[#3A4374] text-xs font-bold tracking-tighter">{upvotes}</span>
      </div>

      {/* Description Content */}
      <div className="flex-1">
        <h3 className="text-[#3A4374] font-bold text-lg group-hover:text-[#4661E6] transition-colors">
          {title}
        </h3>
        <p className="text-[#647196] text-md my-2">
          {desc}
        </p>
        <span className="bg-[#F2F4FF] text-[#4661E6] px-4 py-1.5 rounded-lg text-xs font-semibold">
          {category}
        </span>
      </div>

      {/* Comments Counter */}
      <div className="flex items-center gap-2">
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
          <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.109-3.025-.312l-3.385 1.379z" fill="#CDD2EE" fillRule="nonzero" />
        </svg>
        <span className="font-bold text-[#3A4374]">{comments}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;  
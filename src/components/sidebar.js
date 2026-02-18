const FeedbackSidebar = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[255px] font-sans">
      
      {/* 1. Header Card: Dark Navy background with rounded corners */}
      <div className="bg-[#373F68] p-6 rounded-xl flex flex-col justify-end min-h-[137px] shadow-sm">
        <h1 className="text-white font-bold text-xl tracking-tight">
          Frontend Mentor
        </h1>
        <p className="text-white/75 text-sm font-medium">
          Feedback Board
        </p>
      </div>

      {/* 2. Categories Card: Interactive filter tags */}
      <div className="bg-white p-6 rounded-xl flex flex-wrap gap-x-2 gap-y-3 shadow-sm">
        {['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'].map((category) => (
          <button 
            key={category}
            className="bg-[#F2F4FF] text-[#4661E6] hover:bg-[#CFD7FF] px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-colors focus:bg-[#4661E6] focus:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      {/* 3. Roadmap Card: Status tracking and Add Feedback button */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#3A4374] font-bold text-lg">Roadmap</h2>
          <a href="#" className="text-[#4661E6] underline text-[13px] font-semibold hover:text-[#8397F8]">
            View
          </a>
        </div>

        <ul className="space-y-3">
          {/* Planned Item */}
          <li className="flex justify-between items-center text-[#647196]">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#F49F85]"></span>
              <span className="text-md">Planned</span>
            </div>
            <span className="font-bold">2</span>
          </li>
          {/* In-Progress Item */}
          <li className="flex justify-between items-center text-[#647196]">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#AD1FEA]"></span>
              <span className="text-md">In-Progress</span>
            </div>
            <span className="font-bold">3</span>
          </li>
          {/* Live Item */}
          <li className="flex justify-between items-center text-[#647196]">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#62BCFA]"></span>
              <span className="text-md">Live</span>
            </div>
            <span className="font-bold">1</span>
          </li>
        </ul>

        {/* Primary Action Button */}
        <button className="w-full mt-6 bg-[#AD1FEA] hover:bg-[#C75AF6] text-white font-bold py-3 px-4 rounded-xl text-[13px] transition-colors">
          + Add Feedback
        </button>
      </div>

    </div>
  );
};

export default FeedbackSidebar;
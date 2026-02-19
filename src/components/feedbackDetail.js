'use client';
import React, { useState } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

const FeedbackDetail = ({ feedback, onBack, onEdit }) => {
  const [commentText, setCommentText] = useState('');
  const maxChars = 250;

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 font-sans bg-[#F2F4FF] min-h-screen">

      {/* 1. Top Navigation Bar */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="text-[#647196] font-bold flex items-center gap-2 cursor-pointer group"
        >
          <span>＜</span><span className='group-hover:underline'> Go Back</span>
        </button>
        <Button
          onClick={onEdit}
          type="primary"
          className="bg-[#4661E6] hover:bg-[#7C91F9] h-11 px-6 rounded-xl font-bold border-none"
        >
          Edit Feedback
        </Button>
      </div>

      {/* 2. Main Feedback Card */}
      <div className="bg-white p-7 rounded-xl flex items-center shadow-sm mb-6">
        <div className="bg-[#F2F4FF] min-w-[40px] h-12 rounded-lg flex flex-col items-center justify-center mr-8">
          <span className="text-[#4661E6] text-xs font-bold">^</span>
          <span className="text-[#3A4374] text-xs font-bold tracking-tighter">
            {feedback?.upvotes || 0}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-[#3A4374] font-bold text-lg">{feedback?.title || "Feedback Title"}</h3>
          <p className="text-[#647196] my-2">{feedback?.desc || "Feedback description text goes here."}</p>
          <span className="bg-[#F2F4FF] text-[#4661E6] px-4 py-1.5 rounded-lg text-xs font-semibold">
            {feedback?.category || "Category"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-50 text-xl">💬</span>
          <span className="font-bold text-[#3A4374]">{feedback?.comments || 0}</span>
        </div>
      </div>

      {/* 3. Comments Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
        <h2 className="text-[#3A4374] font-bold text-lg mb-8">
          {feedback?.comments || 0} Comments
        </h2>

        {/* Sample Comment Item */}
        <div className="flex gap-6 pb-8 border-b border-[#8C92B3]/10 last:border-none">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
            {/* User Avatar Placeholder */}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-[#3A4374] font-bold text-sm">Comment Name</h4>
                <p className="text-[#647196] text-sm">@username</p>
              </div>
              <button className="text-[#4661E6] font-semibold text-xs hover:underline">Reply</button>
            </div>
            <p className="text-[#647196] text-md leading-relaxed">
              This is a placeholder for the comment text. It should be clear and easy to read.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Add Comment Form */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-[#3A4374] font-bold text-lg mb-6">Add Comment</h2>
        <TextArea
          rows={3}
          placeholder="Type your comment here"
          maxLength={maxChars}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="bg-[#F7F8FD] border-none p-4 rounded-lg focus:ring-1 focus:ring-[#4661E6] mb-4"
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-[#647196] text-sm">
            {maxChars - commentText.length} Characters left
          </span>
          <Button
            type="primary"
            className="bg-[#AD1FEA] hover:bg-[#C75AF6] h-11 px-6 rounded-xl font-bold border-none"
          >
            Post Comment
          </Button>
        </div>
      </div>

    </div>
  );
};

export default FeedbackDetail;
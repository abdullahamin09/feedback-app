'use client';
import React, { useState } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

const FeedbackDetail = ({ feedback, comments, onSubmit, onBack, onEdit, onUpvote }) => {
  const [commentText, setCommentText] = useState('');
  const maxChars = 250;

  const formatRelativeTime = (timestamp) => {
    if (!timestamp) return 'Just now';
    const now = Date.now();
    const ms = typeof timestamp === 'number' ? timestamp : new Date(timestamp).getTime();
    if (Number.isNaN(ms)) return 'Just now';
    const diff = now - ms;
    if (diff < 60 * 1000) return 'Just now';
    const minutes = Math.floor(diff / (60 * 1000));
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d`;
    const weeks = Math.floor(days / 7);
    return `${weeks}w`;
  };

  const handleAddComment = () => {
    if (commentText.trim() === '') return;
    if (onSubmit) onSubmit(commentText);
    setCommentText('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 min-h-screen">

      {/* 2. Main Feedback Card */}
      <div className="bg-white p-7 rounded-xl flex items-center shadow-sm mb-6">
        <button
          onClick={() => onUpvote && onUpvote(feedback?.id)}
          className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${feedback?.upvoted ? 'bg-purple-100 hover:bg-purple-200' : 'bg-gray-50 hover:bg-gray-100'} mr-10`}
          type="button"
        >
          <span className={`text-xs font-bold ${feedback?.upvoted ? 'text-purple-600' : 'text-gray-600'}`}>
            ^
          </span>
          <span className={`font-bold text-xs ${feedback?.upvoted ? 'text-purple-600' : 'text-gray-900'}`}>
            {feedback?.upvotes || 0}
          </span>
          <span className="text-xs text-gray-500">Votes</span>
        </button>
        <div className="flex-1">
          <h3 className="text-[#3A4374] font-bold text-lg">{feedback?.title || "Feedback Title"}</h3>
          <p className="text-[#647196] my-2">{feedback?.description || "Feedback description text goes here."}</p>
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
          {comments.length} Comments
        </h2>

        {comments.length === 0 ? (
          <p className="text-[#647196]">No comments yet. Be the first to comment.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-6 pb-8 border-b border-[#8C92B3]/10 last:border-none">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                {comment.user?.image ? (
                  <img src={comment.user.image} alt={comment.user.name} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-[#3A4374] font-bold text-sm">{comment.user?.name || 'Anonymous'}</h4>
                    <p className="text-[#647196] text-sm text-opacity-80">@{comment.user?.username || 'user'} • {formatRelativeTime(comment.createdAt || comment.date)}</p>
                  </div>
                  <button className="text-[#4661E6] font-semibold text-xs hover:underline">Reply</button>
                </div>
                <p className="text-[#647196] text-md leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))
        )}
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
            onClick={handleAddComment}
          >
            Post Comment
          </Button>
        </div>
      </div>

    </div>
  );
};

export default FeedbackDetail;


import { initialSuggestions, initialComments } from '@/data/initialData';
import { createSlice } from "@reduxjs/toolkit";
import { Replace, ReplaceAll } from 'lucide-react';

const initialState = {
    suggestions: initialSuggestions,
    comments: initialComments
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {

        addSuggestion: (state, action) => {
            const payload = action.payload;
            const newSuggestions = {
                id: Date.now(),
                title: payload.title,
                description: payload.desc,
                category: payload.category || "Feature",
                upvotes: 0,
                comments: 0,
                status: payload.status || "Planned",
                upvoted: false
            };
            state.suggestions.push(newSuggestions);

        },
        updateSuggestion: (state, action) => {
            const update = action.payload;
            const index = state.suggestions.findIndex((s) => s.id === update.id);
            if (index !== -1) {
                state.suggestions[index] = {
                    ...state.suggestions[index],
                    ...update
                };
            }
        },
        deleteSuggestion: (state, action) => {
            const id = action.payload;
            state.suggestions = state.suggestions.filter((s) => s.id !== id);
            delete state.comments[id];
        },

        toggleUpvote: (state, action) => {
            const id = action.payload;
            const item = state.suggestions.find((s) => s.id === id);
            if (item) {
                item.upvoted = !item.upvoted;
                item.upvotes += item.upvoted ? 1 : -1;
            }
        },

        addComment: (state, action) => {
            const { suggestionId, comment } = action.payload;
            if (!state.comments[suggestionId]) {
                state.comments[suggestionId] = [];
            }
            state.comments[suggestionId].push(comment);
            const item = state.suggestions.find((s) => s.id === suggestionId);
            if (item) {
                item.comments += 1;
            }
        },

        replaceAll: (state, action) => {
            return action.payload;
        }
 
    }
});

export const { addSuggestion, updateSuggestion, deleteSuggestion, toggleUpvote, addComment, replaceAll } = feedbackSlice.actions;

export default feedbackSlice.reducer;
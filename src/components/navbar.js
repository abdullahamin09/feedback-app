const Navbar = () => {
    return (
        <div>
            <div className="bg-[#373F68] px-6 py-4 rounded-xl flex justify-between items-center text-white mb-6">
                <div className="flex items-center gap-8">
                    <h2 className="font-bold text-lg">{suggestions.length} Suggestions</h2>
                    <div className="text-sm opacity-90 flex items-center">
                        <span className="mr-2">Sort by:</span>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="bg-transparent font-bold cursor-pointer focus:outline-none text-gray-400"
                        >
                            <option value="Most Upvotes">Most Upvotes</option>
                            <option value="Least Upvotes">Least Upvotes</option>
                            <option value="Most Comments">Most Comments</option>
                            <option value="Least Comments">Least Comments</option>
                        </select>
                    </div>
                </div>
                <button onClick={openModal} className="bg-[#AD1FEA] hover:bg-[#C75AF6] px-6 py-3 rounded-xl font-bold text-xs transition-colors">
                    + Add Feedback
                </button>
            </div>
        </div>
    );
}

export default Navbar;
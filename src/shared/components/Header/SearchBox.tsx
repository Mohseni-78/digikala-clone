import React, { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  return (
    <form className="w-full flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm bg-white">
      <input
        type="text"
        placeholder="جستجو در دیجیکالا"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-red-600 text-white px-5 py-2 text-sm hover:bg-red-700 transition"
      >
        جستجو
      </button>
    </form>
  );
};

export default SearchBox;

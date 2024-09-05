import React, { useState } from "react";

function PodcastForm({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Apple Podcast URL"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Scrape Podcast
        </button>
      </div>
    </form>
  );
}

export default PodcastForm;

import React from 'react';
import { SearchResult } from '../types/search';
import { ExternalLink } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  searchTime?: string;
  totalResults?: string;
}

export function SearchResults({ results, searchTime, totalResults }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="w-full max-w-2xl space-y-6">
      {searchTime && totalResults && (
        <p className="text-sm text-gray-500">
          About {totalResults} results ({searchTime} seconds)
        </p>
      )}
      
      {results.map((result, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
          <a
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {result.pagemap?.cse_thumbnail?.[0] && (
              <img
                src={result.pagemap.cse_thumbnail[0].src}
                alt=""
                className="float-right ml-4 rounded-lg w-20 h-20 object-cover"
              />
            )}
            <h2 className="text-lg font-semibold text-blue-600 group-hover:underline mb-1 flex items-center gap-2">
              {result.title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h2>
            <p className="text-sm text-gray-600 mb-2">{result.link}</p>
            <p className="text-sm text-gray-700">{result.snippet}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
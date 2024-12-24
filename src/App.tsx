import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { SearchResult } from './types/search';
import { searchApi } from './services/searchApi';
import { Navigation } from 'lucide-react';
import { SocialLinks } from './components/SocialLinks';

function App() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInfo, setSearchInfo] = useState<{
    time: string;
    total: string;
  } | null>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setSearchInfo(null);
      return;
    }

    try {
      setIsLoading(true);
      const response = await searchApi(query);
      setResults(response.items || []);
      setSearchInfo({
        time: response.searchInformation.formattedSearchTime,
        total: response.searchInformation.formattedTotalResults,
      });
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Navigation className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">NaviFly</h1>
            </div>
            <p className="text-gray-600 mb-4">Navigate the web instantly</p>
            <SocialLinks />
          </div>

          <SearchBar onSearch={handleSearch} isLoading={isLoading} />

          <SearchResults
            results={results}
            searchTime={searchInfo?.time}
            totalResults={searchInfo?.total}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
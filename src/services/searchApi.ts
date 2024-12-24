import { SearchResponse } from '../types/search';

const SEARCH_API_KEY = 'AIzaSyDUGmuVBzQ-gqrLU5jH2Km9LOhgcBALcq4';
const SEARCH_ENGINE_ID = 'd36c7009ece534169';

export const searchApi = async (query: string): Promise<SearchResponse> => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
      query
    )}`
  );
  
  if (!response.ok) {
    throw new Error('Search request failed');
  }
  
  return response.json();
};
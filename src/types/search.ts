export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    cse_thumbnail?: Array<{
      src: string;
      width: string;
      height: string;
    }>;
  };
}

export interface SearchResponse {
  items: SearchResult[];
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
}
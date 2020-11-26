export interface YoutubeChanel {
  etag: string;
  kind: string;
  regionCode: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  items: YoutubeVideoList[];
}

export interface YoutubeVideoList {
  id: {
    kind: string;
    videoId: string;
  };
  etag: string;
  kind: string;
  snippet: any;
}

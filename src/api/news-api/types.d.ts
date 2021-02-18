/**
 * The identifier id and a display name.
 */
export interface NewsApiSource {
  /**
   * The identifier id.
   */
  id: string | null;

  /**
   * Name for the source this article came from.
   */
  name: string;
}

export type ApiNewsResponseStatus = 'ok' | 'error';

export interface NewsApiResponse {
  /**
   * If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.
   */
  status: ApiNewsResponseStatus;

  /**
   * Error code
   */
  code?: string;

  /**
   * Error message
   */
  error?: string;

  /**
   * The total number of results available for your request.
   */
  totalResults: number;

  /**
   * The results of the request.
   */
  articles: Array<NewsApiArticle>;
}

/**
 * The results of the request.
 */
export interface NewsApiArticle {
  /**
   * The identifier id and a display name.
   */
  source: NewsApiSource;

  /**
   * The author of the article.
   */
  author: string | null;

  /**
   * The headline or title of the article.
   */
  title: string;

  /**
   * A description or snippet from the article.
   */
  description: string | null;

  /**
   * The direct URL to the article.
   */
  url: string;

  /**
   * The URL to a relevant image for the article.
   */
  urlToImage: string | null;

  /**
   * The date and time that the article was published, in UTC (+000)
   */
  publishedAt: string;

  /**
   * The unformatted content of the article, where available. This is truncated to 200 chars.
   */
  content: string | null;
}

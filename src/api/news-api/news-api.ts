import axios from 'axios';
import {NewsApiResponse, NewsApiArticle} from './types';

// TODO: Get API_KEY from .env file
const API_KEY = 'bf701fd467f742d8b9a1565e8ab21b87';

// TODO: Use axios for proper API managing
const createNewsAPI = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    headers: {
      'X-Api-Key': API_KEY,
    },
  });

  // TODO: Could standardise the fetch process
  const getHeadlines = async (
    country = 'us',
    page = 1,
    limit = 20,
  ): Promise<NewsApiArticle[]> => {
    const response = await api.get<NewsApiResponse>(
      `v2/top-headlines?country=${country}&page=${page}&pageLimit=${limit}`,
    );

    if (response.data.status === 'error') {
      throw new Error('getArticles status is error');
    }

    return response.data.articles;
  };

  const getStoriesForSearchTerm = async (
    query = 'programming',
    page = 1,
    limit = 20,
  ): Promise<NewsApiArticle[]> => {
    const response = await api.get<NewsApiResponse>(
      `v2/everything?q=${query}&page=${page}&pageLimit=${limit}`,
    );

    if (response.data.status === 'error') {
      throw new Error('getArticles status is error');
    }

    return response.data.articles;
  };

  return {getHeadlines, getStoriesForSearchTerm};
};

// TODO: Get URL for API from .env file
export const NewsAPI = createNewsAPI('https://newsapi.org/');

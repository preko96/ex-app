import React, {useCallback, useEffect, useState} from 'react';
import {ArticlesList} from './articles-list';
import {NewsApiArticle} from '../../../api/news-api/types';
import {NewsAPI} from '../../../api/news-api/news-api';

interface HeadlinesProps {
  onPressHeadline: (article: NewsApiArticle) => void;
}

export const Headlines: React.FC<HeadlinesProps> = React.memo(
  function Headlines({onPressHeadline}) {
    // TODO have a proper fetch mechanism or use a proper state management solution as now the state and headlines scoped only to this component
    // TODO Proper error handling
    // TODO Loading indicator for better UX
    const [headlines, setHeadlines] = useState<NewsApiArticle[]>([]);
    const getHeadlines = useCallback(async () => {
      try {
        const res = await NewsAPI.getHeadlines();
        setHeadlines(res);
      } catch (e) {
        console.warn(e);
      }
    }, []);

    useEffect(() => {
      getHeadlines();
    }, [getHeadlines]);

    const handlePressHeadline = useCallback(
      (article) => {
        onPressHeadline(article);
      },
      [onPressHeadline],
    );

    return (
      <ArticlesList
        articles={headlines}
        onPressHeadline={handlePressHeadline}
      />
    );
  },
);

import React from 'react';
import {NewsApiArticle} from '../../../api/news-api/types';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import {ArticlesListItem} from './articles-list-item';

interface NewsListProps {
  articles: NewsApiArticle[];
  onPressHeadline: (article: NewsApiArticle) => void;
}

const ItemSeparator: React.FC = () => <View style={{paddingBottom: 16}} />;

const keyExtractor = (item: NewsApiArticle) => item.publishedAt;

export const ArticlesList: React.FC<NewsListProps> = React.memo(
  function ArticlesList({articles, onPressHeadline}) {
    const renderItem: ListRenderItem<NewsApiArticle> = ({item}) => (
      <TouchableOpacity onPress={() => onPressHeadline(item)}>
        <ArticlesListItem article={item} />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  },
);

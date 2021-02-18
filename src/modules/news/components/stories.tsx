import React, {useCallback, useEffect, useState} from 'react';
import {NewsApiArticle} from '../../../api/news-api/types';
import {NewsAPI} from '../../../api/news-api/news-api';
import {
  FlatList,
  ListRenderItem,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {StoryItem} from './story-item';

interface StoriesProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onPressStory: (article: NewsApiArticle) => void;
}

const ItemSeparator: React.FC = React.memo(function ItemSeparator() {
  return <View style={{marginRight: 16}} />;
});

const keyExtractor = (item: NewsApiArticle) => item.publishedAt;

export const Stories: React.FC<StoriesProps> = React.memo(function Stories({
  contentContainerStyle,
  style,
  onPressStory,
}) {
  // TODO have a proper fetch mechanism or use a proper state management solution as now the state and headlines scoped only to this component
  // TODO Proper error handling
  // TODO Loading indicator for better UX
  const [stories, setStories] = useState<NewsApiArticle[]>([]);
  const getStories = useCallback(async () => {
    try {
      const res = await NewsAPI.getStoriesForSearchTerm();
      setStories(res);
    } catch (e) {
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    getStories();
  }, [getStories]);

  const renderItem: ListRenderItem<NewsApiArticle> = useCallback(
    ({item}) => (
      <TouchableOpacity onPress={() => onPressStory(item)}>
        <View style={{borderRadius: 16, overflow: 'hidden'}}>
          <StoryItem article={item} />
        </View>
      </TouchableOpacity>
    ),
    [onPressStory],
  );

  return (
    <FlatList
      horizontal
      data={stories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparator}
      style={style}
      contentContainerStyle={contentContainerStyle}
    />
  );
});

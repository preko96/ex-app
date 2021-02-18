import React from 'react';
import {NewsApiArticle} from '../../../api/news-api/types';
import {Image, Text, View} from 'react-native';
import {COLORS} from '../../../theme/colors';

interface NewsListItemProps {
  article: NewsApiArticle;
}

export const ArticlesListItem: React.FC<NewsListItemProps> = React.memo(
  function ArticlesListItem({article}) {
    return (
      <View style={{flexDirection: 'row'}}>
        {/*TODO: Have a fallback when the url is invalid*/}
        {article.urlToImage && (
          <Image
            source={{uri: article.urlToImage, height: 92, width: 92 * 1.25}}
            style={{borderRadius: 8}}
          />
        )}
        <View style={{paddingRight: 8}} />
        <View style={{flexShrink: 1}}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.darkestGray,
              fontWeight: '500',
            }}
            numberOfLines={2}>
            {article.title}
          </Text>
          <View style={{paddingBottom: 4}} />
          <Text
            style={{fontSize: 14, color: COLORS.darkGray}}
            numberOfLines={2}>
            {article.description}
          </Text>
        </View>
      </View>
    );
  },
);

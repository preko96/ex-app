import React from 'react';
import {NewsApiArticle} from '../../../api/news-api/types';
import {Image, Text, View, useWindowDimensions} from 'react-native';

interface StoryItemProps {
  article: NewsApiArticle;
}

export const StoryItem: React.FC<StoryItemProps> = React.memo(
  function StoryItem({article: {title, urlToImage}}) {
    const {width} = useWindowDimensions();

    return (
      <View style={{height: 192, width}}>
        {/*TODO: Have a fallback image in case urlToImage is invalid*/}
        {urlToImage && (
          <Image
            source={{uri: urlToImage}}
            style={{position: 'absolute', height: '100%', width: '100%'}}
          />
        )}
        <Text
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 16,
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
    );
  },
);

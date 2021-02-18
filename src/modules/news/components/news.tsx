import React, {useCallback} from 'react';
import {Stories} from './stories';
import {SafeAreaTop} from '../../../components/safe-area-top/safe-area-top';
import {ScrollView, Text, View} from 'react-native';
import {Headlines} from './headlines';
import {COLORS} from '../../../theme/colors';
import {NewsApiArticle} from '../../../api/news-api/types';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {NewsScreenNavigationProp} from '../screens/news-screen';

export const News: React.FC = React.memo(function News() {
  const navigation = useNavigation<NewsScreenNavigationProp>();
  const handlePressArticle = useCallback(
    (article: NewsApiArticle) => {
      navigation.dispatch(
        CommonActions.navigate({name: 'DetailedNewsScreen', params: {article}}),
      );
    },
    [navigation],
  );

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 16}}>
        <SafeAreaTop />
        {/*TODO: Extract to new Title component*/}
        <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.blue}}>
          Stories
        </Text>
        <View style={{paddingBottom: 16}} />
        <Stories
          style={{marginLeft: -16, paddingHorizontal: 16}}
          onPressStory={handlePressArticle}
        />
        <View style={{paddingBottom: 24}} />
        <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.blue}}>
          Headlines
        </Text>
        <View style={{paddingBottom: 16}} />
        <Headlines onPressHeadline={handlePressArticle} />
      </View>
    </ScrollView>
  );
});

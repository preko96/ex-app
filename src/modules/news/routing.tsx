import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewsApiArticle} from '../../api/news-api/types';
import {NewsScreen} from './screens/news-screen';
import DetailsNewsScreen from '../detailed-news/screens/detailed-news-screen';

export type NewsStackNavigatorParams = {
  NewsScreen: undefined;
  DetailedNewsScreen: {article: NewsApiArticle};
};

const Stack = createStackNavigator<NewsStackNavigatorParams>();

export function NewsNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="DetailedNewsScreen" component={DetailsNewsScreen} />
    </Stack.Navigator>
  );
}

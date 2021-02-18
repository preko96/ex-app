import React from 'react';
import {News} from '../components/news';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NewsStackNavigatorParams} from '../routing';

export type NewsScreenNavigationProp = StackNavigationProp<
  NewsStackNavigatorParams,
  'NewsScreen'
>;

export type NewsScreenRouteProp = RouteProp<
  NewsStackNavigatorParams,
  'NewsScreen'
>;

interface NewsScreenProps {
  navigation: NewsScreenNavigationProp;
  route: NewsScreenRouteProp;
}

export const NewsScreen: React.FC<NewsScreenProps> = React.memo(
  function NewsScreen() {
    return <News />;
  },
);

import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {NewsStackNavigatorParams} from '../../news/routing';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Animated, Image, ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../../theme/colors';

type DetailedNewsScreenNavigationProp = StackNavigationProp<
  NewsStackNavigatorParams,
  'DetailedNewsScreen'
>;

export type DetailedNewsScreenRouteProp = RouteProp<
  NewsStackNavigatorParams,
  'DetailedNewsScreen'
>;

interface DetailsNewsScreenProps {
  navigation: DetailedNewsScreenNavigationProp;
  route: DetailedNewsScreenRouteProp;
}

export const DetailsNewsScreen: React.FC<DetailsNewsScreenProps> = React.memo(
  function DetailsNewsScreen() {
    const route = useRoute<DetailedNewsScreenRouteProp>();
    const {article} = route.params;
    return (
      <ScrollView>
        {/*TODO: Have a proper fallback mechanism*/}
        {article.urlToImage && (
          <Image source={{uri: article.urlToImage, height: 192 * 1.5}} />
        )}
        <View style={{padding: 16}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: COLORS.darkestGray,
            }}>
            {article.title}
          </Text>
          <View style={{paddingBottom: 16}} />
          <Text
            style={{
              fontSize: 16,
              color: COLORS.darkGray,
            }}>
            {article.description}
          </Text>
        </View>
      </ScrollView>
    );
  },
);

export default DetailsNewsScreen;

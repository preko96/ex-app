import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

export const SafeAreaTop: React.FC = React.memo(function SafeAreaTop() {
  const insets = useSafeAreaInsets();
  const style = useMemo(() => ({paddingBottom: insets.top}), [insets]);
  return <View style={style} />;
});

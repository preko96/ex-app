import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

export const SafeAreaBottom: React.FC = React.memo(function SafeAreaBottom() {
  const insets = useSafeAreaInsets();
  const style = useMemo(() => ({paddingBottom: insets.bottom}), [insets]);
  return <View style={style} />;
});

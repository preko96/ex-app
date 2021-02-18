/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useMemo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {NewsNavigator} from './src/modules/news/routing';
import {COLORS} from './src/theme/colors';

declare const global: {HermesInternal: null | {}};

// TODO: Extract inline styles or move to styled-components as inline styling gonna cause extra unnecessary computations

const App: React.FC = function App() {
  const theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {...DefaultTheme.colors, background: COLORS.lighestGray},
    }),
    [],
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <NewsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

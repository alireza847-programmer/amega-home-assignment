/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@emotion/react';
import RootWrapper from 'components/rootWrapper';
import React from 'react';
import {configureApiWrapper} from 'react-api-wrapper-hook';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Routes from 'routes';
import {theme} from 'themes/emotion';
import client from 'utils/api/client';

function App(): React.JSX.Element {
  configureApiWrapper(client);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <RootWrapper>
          <Routes />
        </RootWrapper>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    <SafeAreaView style={styles.topFlex}>
      <View
        style={[
          styles.container,
          Platform.OS !== 'ios' && styles.androidContainer,
        ]}
      >
        <Text style={styles.textHeader}>
          Here are some boxes of different colors
        </Text>
        <View style={styles.colorsContainer}>
          <Text style={[styles.colors, styles.cyan]}>Cyan #2aa198</Text>
          <Text style={[styles.colors, styles.blue]}>Blue #268bd2</Text>
          <Text style={[styles.colors, styles.magenta]}>Magenta #d33682</Text>
          <Text style={[styles.colors, styles.orange]}>Orange #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const { statusBarHeight } = Constants;

const styles = StyleSheet.create({
  topFlex: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  androidContainer: {
    marginTop: statusBarHeight,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  colorsContainer: {
    flex: 1,
    alignItems: 'stretch',
  },

  colors: {
    marginVertical: 5,
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },

  cyan: {
    backgroundColor: '#2aa198',
  },

  blue: {
    backgroundColor: '#268bd2',
  },

  magenta: {
    backgroundColor: '#d33682',
  },

  orange: {
    backgroundColor: '#cb4b16',
  },
});

// Dependencies
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

// React
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          Platform.OS !== 'ios' && styles.androidContainer,
        ]}
      >
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName={'Cyan'} hexCode={'#2aa198'} />
        <ColorBox colorName={'Blue'} hexCode={'#268bd2'} />
        <ColorBox colorName={'Magenta'} hexCode={'#d33682'} />
        <ColorBox colorName={'Orange'} hexCode={'#cb4b16'} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const { statusBarHeight } = Constants;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  androidContainer: {
    paddingTop: statusBarHeight,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

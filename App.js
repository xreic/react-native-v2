import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          Platform.OS !== 'ios' && styles.androidContainer,
        ]}
      >
        <Text>☹️👉📱</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const { statusBarHeight } = Constants;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  androidContainer: {
    marginTop: statusBarHeight,
  },
});

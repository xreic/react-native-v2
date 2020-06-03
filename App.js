import React from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const { statusBarHeight } = Constants;

  return (
    <SafeAreaView>
      <View
        style={Platform.OS !== 'ios' ? { paddingTop: statusBarHeight } : {}}
      >
        <Text>Why no work</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

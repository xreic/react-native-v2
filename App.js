// Dependencies
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

// Components
import ColorBox from './components/ColorBox';

// Helpers
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={[
          styles.container,
          Platform.OS !== 'ios' && styles.androidContainer,
        ]}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

export default App;

const { statusBarHeight } = Constants;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  androidContainer: {
    paddingTop: statusBarHeight,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

/**
 * If there is a key property in the data
 * Then keyExtractor is not required within the FlatList
 */
const COLORS_NoKeyExtractor = [
  { colorName: 'Base03', hexCode: '#002b36', key: '1' },
];

import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';

// Components
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <SafeAreaView style={styles.viewArea}>
      <FlatList
        style={[
          styles.container,
          Platform.OS !== 'ios' && styles.androidContainer,
        ]}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </SafeAreaView>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
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

// Dependencies
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Components
import PalettePreview from '../components/PalettePreview';

// Helpers
import COLOR_PALETTES from '../utils/colors';

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <View>
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        </View>
      )}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

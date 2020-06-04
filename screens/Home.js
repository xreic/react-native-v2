// Dependencies
import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Components
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const handleFetch = useCallback(async () => {
    const results = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (results.ok) {
      const palettes = await results.json();
      setColorPalettes(palettes);
    }
  });

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
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

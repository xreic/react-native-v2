// Dependencies
import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

// Components
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  const handleFetch = useCallback(async () => {
    const results = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (results.ok) {
      const palettes = await results.json();
      setColorPalettes(palettes);
    }
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetch();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

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
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.modalHeader}>Add a new palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  modalHeader: {
    color: '#2aa198',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
});

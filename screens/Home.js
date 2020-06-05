// Dependencies
import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

// Components
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
          <Text>Launch Modal</Text>
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
});

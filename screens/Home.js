// Dependencies
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Helpers
import COLOR_PALETTES from '../utils/colors';

const Home = ({ navigation }) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPalette', item);
            }}
          >
            <Text>{item.paletteName}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Home;

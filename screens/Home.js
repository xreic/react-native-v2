// Dependencies
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Helpers
import {
  COLORS as SOLARIZED,
  RAINBOW,
  FRONTEND_MASTERS,
} from '../utils/colors';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: SOLARIZED,
          });
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

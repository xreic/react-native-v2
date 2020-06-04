import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={styles.colorsContainer}>
      <Text style={[styles.colors, boxColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  colorsContainer: {
    marginVertical: 5,
    alignItems: 'stretch',
  },

  colors: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

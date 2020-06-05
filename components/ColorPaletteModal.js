import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const ColorPaletteModal = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>Name of your new palette</Text>
      <TextInput style={styles.input} onChangeText={setValue} />
      <Text>{value}</Text>
    </View>
  );
};

export default ColorPaletteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
  },
});

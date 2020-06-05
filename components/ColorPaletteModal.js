// Dependencies
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Helpers
import { COLORS } from '../utils/colors';
import ColorSelection from './ColorSelection';

const ColorPaletteModal = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSwitch = (value, color) => {
    if (value === false) {
      setSelectedColors((colors) => [...colors, color]);
    } else {
      setSelectedColors((colors) =>
        colors.filter(
          (selectedColor) => selectedColor.colorName !== color.colorName,
        ),
      );
    }
  };

  const handleSubmit = () => {
    if (inputValue.length < 1 && Object.keys(selectedColors).length < 3) {
      Alert.alert(
        'You must enter a name for your new palette and the palette must have at least three (3) colors',
      );
    } else if (inputValue.length < 1) {
      Alert.alert('New palette must have at least 3 colors');
    } else if (Object.keys(selectedColors).length < 3) {
      Alert.alert('Palette must have at least three (3) colors');
    } else {
      const newColorPalette = {
        paletteName: inputValue,
        colors: selectedColors,
      };

      navigation.navigate('Home', { newColorPalette });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name of your new palette</Text>
      <TextInput style={styles.input} onChangeText={setInputValue} />
      <FlatList
        style={styles.list}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorSelection
            colorName={item.colorName}
            hexCode={item.hexCode}
            isSelected={
              !!selectedColors.find(
                (color) => color.colorName === item.colorName,
              )
            }
            handleSwitch={handleSwitch}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit!</Text>
      </TouchableOpacity>
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

  list: { marginVertical: 25 },

  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2aa198',
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
  },
});

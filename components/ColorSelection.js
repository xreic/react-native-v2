import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const ColorSelection = ({ colorName, isSelected, handleSwitch }) => {
  return (
    <View style={styles.selection}>
      <Text>{colorName}</Text>
      <Switch
        onValueChange={() => handleSwitch(colorName)}
        value={!!isSelected}
      />
    </View>
  );
};

export default ColorSelection;

const styles = StyleSheet.create({
  selection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'transparent',
    borderBottomColor: 'lightgray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

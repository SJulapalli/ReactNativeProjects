import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';


const MyApp = () => {
  return (
      <View id="Parent View">
        <View style={styles.dark}>
          <p id="par"></p>
        </View>
      </View>
      );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: "#496F7D",
    color: 'white'
  },

  light: {
    backgroundColor: '#FFFFFF',

  }
});

export default MyApp;
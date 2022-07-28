import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react';


const MyApp = () => {
  const [hours, setHours] = useState(0);
  const [workDone, setWorkDone] = useState(false);
  return (
    <View id="Parent View">
      <View style={styles.dark}>
        <p id="par">Suhas made this website. {myFunction("Suhas", 19)}. <br></br>
                    Suhas has worked for {hours} hours today. <br></br>
        </p>
      </View>
      <Button title={"Click to increase hours worked"}
              onPress={() => {setHours(hours + 1)}}
              disabled={workDone}></Button>
      <Button title={"Press to decrease hours worked"}
              onPress={() => {setHours(hours - 1)}}
               disabled={workDone}></Button>
       <Button id={"ligma"} title={workDone? "Work Completed": hours >= 4? "Click to complete work" : "Work not yet complete"}
              color={hours >= 4? 'green': 'red'}
              disabled={workDone}
              onPress={() => {if (hours >= 4) {
                                setWorkDone(true);
                              }}}>
      </Button>
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

function myFunction(name, age) {
  return `${name} is ${age} years old!`;
}

export default MyApp;
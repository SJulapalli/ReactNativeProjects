import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  const window = useWindowDimensions();

  return (
    <ScrollView id="Parent View" style={{maxHeight: 2729}}>
      <View styles={{flexDirection: 'row'}}>
        <Button title="Home" disabled={true} onPress={() => navigation.navigate('Home')} />
        <Button title="About Us" onPress={() => navigation.navigate('About')} />
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>
      
      <View style={[styles.dark, {justifyContent: 'center', height: 506, flexDirection: 'row'}]}>
        <Text id="Page Header" style={{fontSize: 40, color: 'white', alignSelf: 'center'}}>This is what we do</Text>
        <Image source={require('./assets/people_working.png')} style={{width: 600, height: 400, alignSelf: 'center'}} />
      </View>

      <View style={[styles.light, {height: 669, paddingRight: 40}]}>
        <Text id="Offer Header" style={{alignSelf: 'center', fontSize: 35, padding: 40, paddingBottom: 20}}>What We Offer</Text>
        <View id="Padding" style={{paddingBottom: 50}}>
          <View id="Underline" style={{backgroundColor: '#35BBA8', alignSelf: 'center', width: 196, height: 5}}></View>
        </View>
        <Text id="Offer1" style={{color: "#496F7D", alignSelf: 'flex-start', fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
        <Text id="Offer1" style={{color: "#496F7D", alignSelf: 'flex-end', fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
        <Text id="Offer1" style={{color: "#496F7D", alignSelf: 'flex-start', fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
      </View>

      <View style={styles.contacts}>
        <Text style={{color: 'white', fontSize: 30, padding: 10, paddingBottom: 30}}>Contact Us</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/email.png')} style={{width: 33, height: 33}} />
          <Text style={{color: 'white', fontSize: 20, paddingRight: 100}}>umd.dreamx@gmail.com</Text>            
          
          <Image source={require('./assets/instagram.png')} style={{width: 30, height: 30}} />
          <Text style={{color: 'white', fontSize: 20}}>@umd.dreamx</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function AboutPage({ navigation }) {
  const [hours, setHours] = React.useState(0);
  const [workDone, setWorkDone] = React.useState(false);
  return (
    <View id="Parent View">
      <View styles={{flexDirection: 'row'}}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="About Us" disabled={true} onPress={() => navigation.navigate('About')} />
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

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
}

function myFunction(name, age) {
  return `${name} is ${age} years old!`;
}

function ApplyPage({ navigation }) {
  return (
    <ScrollView>
      <View styles={{flexDirection: 'row'}}>
        <Button title="Home" onPress={() => navigation.navigate('About')} />
        <Button title="About Us" onPress={() => navigation.navigate('About')} />
        <Button title="Apply" disabled={true} onPress={() => navigation.navigate('Apply')} />
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          /* headerStyle: {
            backgroundColor: "#496F7D"
          },
          headerTintColor: 'white',
          headerTitle: "", */
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
        />
        <Stack.Screen
          name="Apply"
          component={ApplyPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: "#496F7D",
    color: 'white'
  },

  light: {
    backgrounColor: 'white',
    color: "#496F7D",
  },

  contacts: {
    backgroundColor: "#496F7D",
    height: 150,
    color: 'white',
    alignItems: 'center',
  },
});

export default MyApp;
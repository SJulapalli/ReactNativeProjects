import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-web';

const MyApp = () => {
  const window = useWindowDimensions();
  return (
    <ScrollView id="Parent View" style={{maxHeight: 2729}}>
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
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, getDoc, addDoc } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDWwltK77Jzc9aUW9YiBUPCqZA_KFVfm_c",
  authDomain: "dreamx-website.firebaseapp.com",
  projectId: "dreamx-website",
  storageBucket: "dreamx-website.appspot.com",
  messagingSenderId: "750047116875",
  appId: "1:750047116875:web:0ed68b4bcfd4d92a9c57ce",
  measurementId: "G-RFZVKLG9PQ"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const dbRef = collection(db, "Applicants");

function update(fname, lname, email, msg) {
  var data = {
    first_name: fname,
    last_name: lname,
    email: email,
    message: msg,
  };
  addDoc(dbRef, data).then(docRef => {console.log("Document has been added successfully")}).catch(error => {console.log(error)});
}

function HomeScreen({ navigation }) {
  const window = useWindowDimensions();

  return (
    <ScrollView id="Parent View">
      <View style={[styles.dark, {flexDirection: 'row'}]}>
        <TouchableOpacity disabled={true} style={[styles.headerButton, {width: window.width / 3, height: 50, backgroundColor: '#496F7D'}]} onPress={() => navigation.navigate('Home')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3}]} onPress={() => navigation.navigate('About')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3}]} onPress={() => navigation.navigate('Apply')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Apply</Text>
        </TouchableOpacity>
      </View>
      
      <View style={[styles.dark, {justifyContent: 'center', height: 435, flexDirection: 'row'}]}>
        <Text id="Page Header" style={{fontSize: 40, color: 'white', alignSelf: 'center', textAlign: 'center', margin: window.width/20}}>This is what we do</Text>
        <Image source={require('./assets/people_working.png')} style={{width: window.width * 3 / 4, height: window.height * 4 / 9, maxWidth: 600, maxHeight: 900, alignSelf: 'center', marginRight: window.width / 15}} />
      </View>

      <View style={[styles.light, {marginBottom: 40}]}>
        <Text id="Offer Header" style={{alignSelf: 'center', fontSize: 35, margin: 40}}>{window.width}</Text>
        <View id="Padding" style={{paddingBottom: 50}}>
          <View id="Underline" style={{backgroundColor: '#35BBA8', alignSelf: 'center', width: 196, height: 5}}></View>
        </View>
        <Text id="Offer1" style={{color: "#496F7D", 
        marginLeft: window.width <= 750 ? 40 : window.width <= 900 ? 40 + window.width / 10: window.width <= 1200 ? 40 + window.width / 9 : 100 + window.width * .175, fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
        <Text id="Offer1" style={{color: "#496F7D", alignSelf: 'flex-end', 
        marginRight: window.width <= 750 ? 40 : window.width <= 900 ? 40 + window.width / 10: window.width <= 1200 ? 40 + window.width / 9 : 100 + window.width * .175, fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
        <Text id="Offer1" style={{color: "#496F7D", 
        marginLeft: window.width <= 750 ? 40 : window.width <= 900 ? 40 + window.width / 10: window.width <= 1200 ? 40 + window.width / 9 : 100 + window.width * .175, fontSize: 18}}>
          {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
      </View>

      <View style={[styles.contacts, {height: 130}]}>
        <Text style={{color: 'white', fontSize: 30, padding: 10, paddingBottom: 20}}>Contact Us</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/email.png')} style={{width: 33, height: 33}} />
          <Text style={{color: 'white', fontSize: 20, paddingRight: 100}}> umd.dreamx@gmail.com</Text>            

          <Image source={require('./assets/instagram.png')} style={{width: 30, height: 30}} />
          <Text style={{color: 'white', fontSize: 20}}> @umd.dreamx</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function AboutPage({ navigation }) {
  const window = useWindowDimensions();

  return (
    <View id="Parent View" style={{maxHeight: 1305}}>
      <View style={[styles.dark, {flexDirection: 'row'}]}>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3, height: 50}]} onPress={() => navigation.navigate('Home')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true} style={[styles.headerButton, {width: window.width / 3, backgroundColor: '#496F7D'}]} onPress={() => navigation.navigate('About')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3}]} onPress={() => navigation.navigate('Apply')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Apply</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{fontSize: 35, color: '#496F7D', alignSelf: 'center', padding: 15, paddingBottom: 40}}>About Us</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#496F7D', fontSize: 18, paddingBottom: 30, paddingTop: 10}}>
        {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#496F7D', fontSize: 18, marginBottom: 25}}>
        {`          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim 
          ad minimveniam, quis nostrud 
          exercitation ullamco laboris nisi
          ut aliquip ex ea commodo`}
        </Text>
      </View>
      
      <View style={[styles.contacts, {height: 320}]}>
        <Text style={{color: 'white', fontSize: 30, padding: 10, paddingBottom: 20}}>Contact Us</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/email.png')} style={{width: 33, height: 33}} />
          <Text style={{color: 'white', fontSize: 20, paddingRight: 100}}> umd.dreamx@gmail.com</Text>            
          
          <Image source={require('./assets/instagram.png')} style={{width: 30, height: 30}} />
          <Text style={{color: 'white', fontSize: 20}}> @umd.dreamx</Text>
        </View>
      </View>
    </View>
  );
}

function ApplyPage({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const window = useWindowDimensions();

  return (
    <ScrollView>
      <View style={[styles.dark, {flexDirection: 'row'}]}>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3, height: 50}]} onPress={() => navigation.navigate('Home')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, {width: window.width / 3}]} onPress={() => navigation.navigate('About')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true} style={[styles.headerButton, {width: window.width / 3, backgroundColor: '#496F7D'}]} onPress={() => navigation.navigate('Apply')}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Apply</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize: 35, color: '#496F7D', alignSelf: 'center', textAlign: 'center',
                    padding: 15, paddingBottom: 10}}>
                      Considering applying? Fill out the fields below and we'll reach out!
      </Text>

      <View style={{padding: 30}}>
        <TextInput style={styles.fields} placeholder={`First \& Middle Name`} onChangeText={text => setFirstName(text)} />
        <TextInput style={styles.fields} placeholder={`Last Name`} onChangeText={text => setLastName(text)} />
        <TextInput style={styles.fields} placeholder={`Email`} onChangeText={text => setEmail(text)} />
        <TextInput multiline={true} style={[styles.fields, {paddingBottom: 400}]} placeholder={`Message (Optional)`} onChangeText={text => setMessage(text)} />
        <TouchableOpacity onPress={() => update(firstName, lastName, email, message)} style={{height: 35, width: window.width / 2, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0ECDEB', borderColor: '#707070', borderWidth: .1, borderRadius: 3}}>
          <Text style={{color: 'white', fontSize: 24}}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.contacts, {height: 130}]}>
        <Text style={{color: 'white', fontSize: 30, padding: 10, paddingBottom: 20}}>Contact Us</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/email.png')} style={{width: 33, height: 33}} />
          <Text style={{color: 'white', fontSize: 20, paddingRight: 100}}> umd.dreamx@gmail.com</Text>            
          
          <Image source={require('./assets/instagram.png')} style={{width: 30, height: 30}} />
          <Text style={{color: 'white', fontSize: 20}}> @umd.dreamx</Text>
        </View>
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

  fields: {
    padding: 10,
    marginBottom: 20,
    borderColor: '#707070',
    borderWidth: .1,
    fontSize: 24
  },

  headerButton: {
    backgroundColor: '#3B5A65',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MyApp;
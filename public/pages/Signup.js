import { useState } from "react";
import { setCurrentHypeTrainContinuumSignalConnection } from '../../LegendaryHypeTrainContinuumSignalConnection.js';
import { getHypeUserWithHypeUserName, createHypeUser, HypeAccessEncryptionProtocol } from '../../server.js';
import { TouchableOpacity } from "react-native-gesture-handler";
import {  TextInput, onChangeText, StyleSheet } from "react-native";

export default function SignupPage() {
 

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [username, setUsername] = useState("");
        const [displayname, setDisplayName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [usernameTaken, setUsernameTaken] = useState(false);
    

  const HandleSignup = (event) => {
      
      event.preventDefault();
      
      const hypeUserIdentificationCredentials = getHypeUserWithHypeUserName([username]);
      
      const hypeUD = hypeUserCredentialshypeUserIdentificationCredentials.hypeContinuumNetworkPortalLocation.HypeID;
      
      // Check if username is taken
      if (hypeUD != null && username === hypeUD.HypeUsername) 
      {
          setUsernameTaken(true);
          
          return;
      }
      
      // Process the signup form data here
      console.log(`First name: ${firstName}, Last name: ${lastName}, Email: ${email}`);
      
      const hypeAccessKeyInputEn = HypeAccessEncryptionProtocol.encryptHypeAccessKey(password);
      
      const hypeUserData = await createHypeUser(username, displayname, firstName, lastName, email, hypeAccessKeyInputEn, "");
      
      setCurrentHypeTrainContinuumSignalConnection(hypeUserData.HypeID, username, displayname, email);
      
      return;
};

  return (
        <View style={style.container}>
     
        <View style={styles.inputView}>

        <TextInput
           style={styles.inputText}
          placeholder="First Name"
          type="text"
          id="firstName"
          value={firstName}
          onChangeText={event => setFirstName(event)}
          />
          </View>

          <View style={styles.inputView}>


        <TextInput
        placeholder="Last Name"
        style={styles.inputText}
          type="text"
          id="lastName"
          value={lastName}
          onChangeText={event => setLastName(event)}
          />
          </View>
          <View>

        
        <TextInput
          placeholder="Display Name"
          
          style={styles.inputText}
          
          type="text"
          
          id="displayname"
          
          value={displayname}
          
          onChangeText={event => setDisplayName(event)}
        />
        
        <TextInput
          placeholder="Username"
          style={styles.inputText}
          type="text"
          id="username"
          value={username}
          onChangeText={event => setUsername(event)}
          />
          </View>

          <View>

        <TextInput
        placeholder="Email"
        style={styles.inputText}
          type="email"
          id="email"
          value={email}
          onChangeText={event => setEmail(event)}
          />
          </View>

          <View style={styles.inputView}>
        <TextInput
        placeholder="Password"
        style={styles.inputText}
          type="password"
          id="password"
          value={password}
          onChangeText={(event) => setPassword(event.target.value)}
          />
          </View>
         <TouchableOpacity type="submit" >
        <Image source = {require('../HypeAssests/HypeTrainSignUpButtonClickedHoveredIcon.png')}/>
        <Text> Signup</Text>
        </TouchableOpacity>  
       
    </View>
    
    );
}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        color: "darkmagenta" ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
        flex: 1,
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#003f5c',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: 'white',
    },
});

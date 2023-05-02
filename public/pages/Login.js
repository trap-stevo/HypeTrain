import { getHypeUserWithHypeUserName, getHypeUserCredentials, HypeAccessEncryptionProtocol } from '../../server.js';
import { setCurrentHypeTrainContinuumSignalConnection } from '../../LegendaryHypeTrainContinuumSignalConnection.js';
import {StyleSheet,TextInput,onChangeText, Text ,TouchableOpacity,Image ,View} from 'react-native';
import { useState } from 'react';


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const HandleLogin = (event) => {
    event.preventDefault();
    
    // Check if login is successful
    if (username !== "example" || password !== "password") 
    {
      setLoginFailed(true);
      
      return;
    }
    
    // Process the login form data here
    console.log(username, password);
    
    const inputAccessKeyEn = HypeAccessEncryptionProtocol.encryptHypeAccessKey(password);
    
    const hypeUserIdentificationCredentials = getHypeUserWithHypeUserName([username]);
    
    const hypeUD = hypeUserCredentialshypeUserIdentificationCredentials.hypeContinuumNetworkPortalLocation.HypeID;
    
    if (hypeUD == null) 
    { 
         setLoginFailed(true); 
         
         return;
    }
    
    const hypeUserAccessCredentials = getHypeUserCredentials([hypeUD]);
    
    const hypeUserAccessEnProtocol = hypeUserAccessCredentials.hypeContinuumNetworkPortalLocation.HypeAccessKey;
    
    if (hypeUserAccessEnProtocol == null) 
    {
         setLoginFailed(true); 
         
         return;
    }
    
    if (HypeAccessEncryptionProtocol.compareHypeAccessKey(inputAccessKeyEn, hypeUserAccessEnProtocol) == true)
    {
         setLoginFailed(false); 
         
         setCurrentHypeTrainContinuumSignalConnection(hypeUD, username, hypeUserCredentialshypeUserIdentificationCredentials.hypeContinuumNetworkPortalLocation.HypeDisplayName, hypeUserCredentialshypeUserIdentificationCredentials.hypeContinuumNetworkPortalLocation.HypeEmail);
         
         return;
    }
    
    setLoginFailed(true); 
    
    return;
  };

  return (
    <View style={{ }}>

<View style={styles.inputView}>

        <TextInput
        placeholder='Username'
          type="text"
          id="username"
          value={username}
          onChangeText={event => setUsername (event)}
          />
        </View>

        <View style={styles.inputView}>

        <TextInput
        placeholder='Password'
          type="password"
          id="password"
          value={password}
          onChangeText={event => setPassword(event)}
          />
          </View>  
        {loginFailed && <p style={{ color: "red" }}>Incorrect username or password</p>}
        <TouchableOpacity type="submit">
        {/* <Image source = {require("../HypeAssests/HypeTrainUniverseBeaconButtonIcon.png")}/>
        <Text> Login</Text> */}
        </TouchableOpacity>
      
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black", 
        color: "darkmagenta",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
        textAlign: 'center',
        marginBottom: 40,
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
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 16,
        paddingLeft: 10,
    },

    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
    },
})

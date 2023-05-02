const currentHypeTrainContinuumSignalConnection = {
     currentHypeUD : -1,
     
     currentHypeUsername : "",
     
     currentHypeDisplayName : "",
     
     currentHypeEmail : ""
};

export function setCurrentHypeTrainContinuumSignalConnection(hypeUD, hypeUsername, hypeDisplayName, hypeEmail)
{
     currentHypeTrainContinuumSignalConnection = {
          currentHypeUD : hypeUD,
          
          currentHypeUsername : hypeUsername,
          
          currentHypeDisplayName : hypeDisplayName,
          
          currentHypeEmail : hypeEmail
     }
     
     return currentHypeTrainContinuumSignalConnection;
}

export function getCurrentHypeTrainContinuumSignalConnection()
{
     return currentHypeTrainContinuumSignalConnection;
}

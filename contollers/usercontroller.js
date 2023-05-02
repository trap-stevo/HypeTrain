class HypeContinuumDataAccess
{
   static hypeContinuumAccess = null;
   
   static continuumAccess() 
   {
        if (HypeContinuumDataAccess.hypeContinuumAccess == null) {
            HypeContinuumDataAccess.hypeContinuumAccess = new HypeContinuumDataAccess();
        }
        
        return this.hypeContinuumAccess;
   }
   
    HypeAccessEncryptionProtocol = 
   {
     encryptHypeAccessKey : (hypeAccessKey ) =>
          bcrypt.genSalt(10)
          .then((salt => bcrypt.hash(hypeAccessKey, salt)))
          .then(hash => hash),
          
     compareHypeAccessKey : (pureHypeAccessKey , hashAccessKey) =>
          bcrypt.compare(pureHypeAccessKey, hashAccessKey)
          .then(resp => resp)
   }
   
   getHypeUsers()
   {
        const hypeTrainBeaconSignalData = HypeTrainBeaconActivation('SELECT * FROM HypeUsers');
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
   }
   
   getHypeUserWithHypeUserName(hypeUserNames)
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT HIL.HypeIdentificationID,  HIL.HypeUsername, HIL.HypeDisplayname,FROM ((HypeIdentificationList AS HIL INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID) INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID) WHERE HIL.HypeUsername = ?', hypeUserNames);
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
   }
   
   getHypeUsersCredentials()
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface');
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
   }
   
   getHypeUser(iDs)
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUsers AS HU WHERE HU.HypeID = ?', iDs);
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
   }
   
   getHypeUserDisplayNameData(iDs)
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeNameList AS HU WHERE HIL.HypeNameID = ?', iDs);
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
   }
   
   getHypeUserCredentials(iDs)
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface AS HCI WHERE HCI.HypeCredentialID = ?', iDs);
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
   }
   
   getHypeUserProfileContents(iDs)
   {
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeProfileContents AS HPC WHERE HPC.HypeProfileContentID = ?', iDs);
        
        return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
   }
   
   async createHypeUserIdentification (hypeUserName, hypeDisplayName, hypeEmail)
   {
        checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeIdentificationInterface (HypeIdentificationID INT NOT NULL PRIMARY KEY, HypeUsername VARCHAR(99), HypeDisplayName VARCHAR(99), HypeEmail VARCHAR(6999))');
        
        const hypeIdentityID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserIdentities, 0, 49151);
        
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeIdentificationInterface VALUES (?, ?, ?, ?)', [hypeIdentificationID, hypeUserName, hypeDisplayName, hypeEmail]);
        
        return hypeIdentityID;
   }
   
   async createHypeUserCredential(hypeAccessKey)
   {
        checkHypeDataInstance("CREATE TABLE IF NOT EXISTS HypeCredentialsInterface (HypeCredentialID INT NOT NULL PRIMARY KEY, HypeAccessKey BINARY(64))");
        
        const hypeCredentialID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserCredentials, 0, 49151);
        
        const encryptedHypeAccessKey = await HypeAccessEncryptionProtocol.encryptHypeAccessKey(hypeAccessKey);
        
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCredentialsInterface VALUES (?, ?)', [hypeCredentialID, encryptedHypeAccessKey]);
        
        return hypeCredentialID;
   }
   
   async createHypeUserDisplayNameData(hypeFirstName, hypeLastName)
   {
        checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeNameList (HypeNameID INT NOT NULL PRIMARY KEY, HypeFirstName VARCHAR(99), HypeLastName VARCHAR(99))');
        
        const hypeNameID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserDisplayNameData, 0, 49151);
        
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeNameList VALUES (?, ?, ?)', [hypeNameID, hypeFirstName, hypeLastName]);
        
        return hypeNameID;
   }
   
   async createHypeUserProfileContents(hypeProfilePicPath)
   {
        checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeProfileContents (HypeProfileContentID INT NOT NULL PRIMARY KEY, HypeProfilePic LONGBLOB)');
        
        const hypeProfileContentID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserProfileContents, 0, 49151);
        
        const hypeProfilePicData = null; // replace with BINARY image encode function
        
        const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeNameList VALUES (?, ?)', [hypeProfileContentID, hypeProfilePicData]);
        
        return hypeProfileContentID;
   }
   
   createHypeUsers(
        hypeUsername,
        hypeDisplayName,
        hypeFirstName,
        hypeLastName,
        hypeEmail,
        hypeAccessKey,
        hypeProfilePicPath
   )
   {
        const hypeID =  confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUser, 0, 49151);
        
        const hypeCredentialID = createHypeUserCredential(hypeAccessKey);
        
        const hypeIdentificationID = createHypeUserIdentification(hypeUserName, hypeDisplayName, hypeEmail);
        
        const hypeProfileContentsID = createHypeUserProfileContents(hypeProfilePicPath);
        
        const hypeNameID = createHypeUserDisplayNameData(hypeFirstName, hypeLastName);
        
        checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeUsers (HypeID INT NOT NULL PRIMARY KEY, HypeProfileContentID INT, HypeCredentialID INT, HypeIdentificationID INT,HypeNameID INT,  FOREIGN KEY (HypeNameID) REFERENCES HypeNameList(HypeNameID), FOREIGN KEY (HypeProfileContentID) REFERENCES HypeProfileContents(HypeProfileContentID), FOREIGN KEY (HypeProfileContentID) REFERENCES HypeProfileContents(HypeProfileContentID), FOREIGN KEY (HypeCredentialID) REFERENCES HypeCredentialsInterface(HypeCredentialID), FOREIGN KEY (HypeCredentialID) REFERENCES HypeCredentialsInterface(HypeCredentialID), FOREIGN KEY (HypeIdentificationID) REFERENCES HypeIdentificationList(HypeIdentificationID))');
        
        return hypeTrainBeaconActivation('INSERT INTO HypeUsers VALUES (?, ?, ?, ?, ?)', [hypeID, hypeProfileContentsID, hypeCredentialID, hypeIdentificationID, hypeNameID]);
   }
   
   hypeUserDataModel = {
        hypeUsername : "",
        hypeDisplayName : "",
        hypeFirstName : "",
        hypeLastName : "",
        hypeEmail : "",
        hypeAccessKey : "",
        hypeProfilePicPath : ""
   };
}

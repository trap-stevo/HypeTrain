/*
     Dependencies:
          npm i bcrypt
          npm i -D @types/bcrypt
*/

//Node.js

// import { HypeTrainBeaconActivation } from './serverAssests/HypeTrainConfiguration/LegendaryHypeTrainContinuumWarper.js';

// import { hypeTrainContinuumReach } from '../../LegendaryHypeTrainContinuumBeacon.js';

async function hypeTrainBeaconActivation(hypeBeaconProtocol) {
     try
     {
          const hypeContinuumConnectionProtocol = hypeBeaconProtocol;
         
          const hypeBeaconReachModel = [];
         
          const hypeBeachReachData = await hypeTrainContinuumReach({ continuumReachStatement : hypeContinuumConnectionProtocol, hypeTrainBeaconData : hypeBeaconReachModel});
         
          res.status(200).json({ hypeContinuumNetworkPortalLocation : hypeBeaconReachData })
     }
     catch (hypeReachError)
     {
          res.status(500).json({ hypeContinuumNetworkPortalError : hypeReachError.message })
     }
}


// import HypeAccessEncryptionProtocol from "./serverAssests/HypeTrainConfiguration/LegendaryHypetrainContinuumAccessVoid.js"




var hypeTrainMySQL = require('mysql');
const path = require("path")

const express = require("express")
const bodyParser = require("body-parser");
const logger = require("morgan")
const cors = require ("cors") 

const routes = require("./routes/api/index.js")
const app = express();

app.use(cors());
app.set("View engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

const PORT = 8080;

app.use(routes)
const legendaryHypeTrainContinuumConnection = hypeTrainMySQL.createConnection({
     host     : process.env.RDS_HOSTNAME,
     
     user     : process.env.RDS_USERNAME,
     
     password : process.env.RDS_PASSWORD,
     
     port     : process.env.RDS_PORT
});

//  default async function hypeTrainBeaconActivation(hypeBeaconProtocol) {
//      try
//      {
//           const hypeContinuumConnectionProtocol = hypeBeaconProtocol;
         
//           const hypeBeaconReachModel = [];
         
//           const hypeBeachReachData = await hypeTrainContinuumReach({ continuumReachStatement : hypeContinuumConnectionProtocol, hypeTrainBeaconData : hypeBeaconReachModel});
         
//           res.status(200).json({ hypeContinuumNetworkPortalLocation : hypeBeaconReachData })
//      }
//      catch (hypeReachError)
//      {
//           res.status(500).json({ hypeContinuumNetworkPortalError : hypeReachError.message })
//      }
// }


//  const HypeAccessEncryptionProtocol = 
// {
//      encryptHypeAccessKey : (hypeAccessKey : string) =>
//              bcrypt.genSalt(10)
//              .then((salt => bcrypt.hash(hypeAccessKey, salt)))
//              .then(hash => hash),
    
//      compareHypeAccessKey : (pureHypeAccessKey : string, hashAccessKey : string) =>
//              bcrypt.compare(pureHypeAccessKey, hashAccessKey)
//              .then(resp => resp)
// }




 function getHypeUsers()
{
     const hypeTrainBeaconSignalData = HypeTrainBeaconActivation('SELECT * FROM HypeUsers');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUserWithHypeUserName(hypeUserNames)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT HIL.HypeIdentificationID,  HIL.HypeUsername, HIL.HypeDisplayname,FROM ((HypeIdentificationList AS HIL INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID) INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID) WHERE HIL.HypeUsername = ?', hypeUserNames);

    
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUsersCredentials()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUser(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUsers AS HU WHERE HU.HypeID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUserDisplayNameData(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeNameList AS HU WHERE HIL.HypeNameID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUserCredentials(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface AS HCI WHERE HCI.HypeCredentialID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUserProfileContents(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeProfileContents AS HPC WHERE HPC.HypeProfileContentID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUniverseNetwork(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUniverseNetworks AS HUN WHERE HUN.HypeNetworkID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeCart(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCarts AS HC WHERE HC.HypeCartID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUserIdentities(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeIdentificationInterface AS HII WHERE HII.HypeIdentificationID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeReaction(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeReactions AS HR WHERE HR.HypeReactionID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeComment(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCommentaryUniverse AS HCU WHERE HCU.HypeCommentID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeCartStation(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCartStationInterface AS HCSI WHERE HCSI.HypeCartStationID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeCaptions()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeCaption(iDs)
{
    const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface AS HCI WHERE HCI.HypeCaptionID = ?', iDs);
     
    return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeCaptionByCaption(hypeCaptions)
{
    const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface AS HCI WHERE HCI.HypeCaption = ?', hypeCaptions);
     
    return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUserIDWithHypeUserName(hypeUserNames)
{
    const hypeTrainBeaconSignalData = getHypeUserWithHypeUserName(hypeUserNames);
    
    if (hypeTrainBeaconSignalData == null) { return null; }
    
    return hypeTrainBeaconSignalData.HypeID
}

 function updateHypeCaption(hypeCaptionID, updatedHypeCaption)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('UPDATE HypeCaptionInterface AS HCI SET HypeCaption = ? WHERE HCI.HypeCaptionID = ?', [updatedHypeCaption, hypeCaptionID]);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function updateHypeCaptionUses(hypeCaptionID, updatedHypeCaptionUses)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('UPDATE HypeCaptionInterface AS HCI SET HypeCaptionUses = ? WHERE HCI.HypeCaptionID = ?',[updatedHypeCaptionUses, hypeCaptionID]);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}





function checkHypeDataInstance(hypeBeaconSignalProtocol)
{
     hypeTrainBeaconActivation(hypeBeaconSignalProtocol);
}










async function addHypeCartIntoHypeUniversalNetwork(hypeTopicID, currentInteractedHypeUserID, hypeTopicRelationID)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeUniverseNetworks ( HypeNetworkID INT NOT NULL PRIMARY KEY, HypeTopicID INT, CurrentInteractedHypeUserID INT, HypeTopicRelationID INT)');
     
     const hypeNetworkID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUniversalNetwork, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeUniverseNetworks VALUES (?, ?, ?, ?)', [hypeNetworkID, hypeTopicID, currentInteractedHypeUserID, hypeTopicRelationID]);
     
     return hypeNetworkID;
}
async function addHypeReactionsToHypeCart(hypeContentID, hypeReactionType, hypeReactionCount)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeReactions ( HypeReactionID INT NOT NULL PRIMARY KEY, HypeContentID INT, HypeReactionType INT,  HypeReactionCount BIGINT)');
     
     const hypeReactionID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeReaction, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeReactions VALUES (?, ?, ?, ?)', [hypeReactionID, hypeContentID, hypeReactionType, hypeReactionCount]);
     
     return hypeReactionID;
}
async function addHypeCommentaryUniverse(hypeCommentorID, hypeComment, hypeReactionID, mySQLHypeModifiedDateString, mySQLHypeDateString)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCommentaryUniverse ( HypeCommentID INT NOT NULL PRIMARY KEY, HypeCommentorID INT, HypeComment VARCHAR(699), HypeReactionID INT, HypeModifiedDate DATETIME,HypeDate DATETIME, FOREIGN KEY (HypeCommentorID) REFERENCES HypeUsers(HypeID), FOREIGN KEY (HypeReactionID) REFERENCES HypeReactions(HypeReactionID))');
     
     const hypeCommentID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeComment, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCommentaryUniverse VALUES (?, ?, ?, ?, ?, ?)', [hypeCommentID, hypeCommentorID, hypeComment, hypeReactionID, mySQLHypeModifiedDateString, mySQLHypeDateString]);
     
     return hypeCommentID;
}
async function addHypeCaption(hypeCaption)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCaptionInterface ( HypeCaptionID INT NOT NULL PRIMARY KEY, HypeCaption VARCHAR(6999),  HypeCaptionUses BIGINT))');
     
     const hypeCaptionData = getHypeCaptionByCaption([hypeCaption]);
     
     if (hypeCaptionData != null)
     {
          updateHypeCaptionUses(hypeCaptionData.HypeCaptionID, hypeCaptionData.HypeCaptionUses + 1);
          
          return hypeCaptionData.HypeCaptionID;
     }
     else
     {
          const hypeCaptionID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCaption, 0, 49151);
          
          const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCaptionInterface VALUES (?, ?, ?)', [hypeCaptionID, hypeCaption, 0]);
          
          return hypeCaptionID;
     }
}
async function addHypeCartIntoHypeCartStationInterface(hypeCaptionID, hypeCartTitle, hypes, hypeInteractions, hypeCommentID, hypeModifiedDateString, hypeDateString)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCartStationInterface (  HypeCartStationID INT NOT NULL PRIMARY KEY, HypeCaptionID INT, HypeCartTitle VARCHAR(699), Hypes BIGINT, HypeInteractions BIGINT,  HypeCommentID INT,  HypeModifiedDate DATETIME, HypeDate DATETIME,  FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID), FOREIGN KEY (HypeCaptionID) REFERENCES HypeCaptionInterface(HypeCaptionID))');
     
     const hypeCartStationID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCartStation, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCartStationInterface VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [hypeCartStationID, hypeCaptionID, hypeCartTitle, hypes, hypeInteractions, hypeCommentID, hypeModifiedDateString, hypeDateString]);
     
     return hypeCartStationID;
}
 async function createHypeCart(
     hypeCartTitle, 
     hypeCartCaption, 
     hypeUserName, 
     hypeTopicID, 
     hypeTopicRelationID,
     hypeReactionTypeID,
     hypeContentID,
     hypeModifiedDateData,
     hypeDateData
)
{
     const hypeCartID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCart, 0, 49151);
     
     const hypeUserID = getHypeUserIDWithHypeUserName([hypeUserName]);
     
     const hypeReachID = addHypeCartIntoHypeUniversalNetwork(hypeTopicID, -1, hypeTopicRelationID);
     
     const hypeCommentID = -1;
     
     const hypeCaptionID = addHypeCaption(hypeCartCaption);
     
     
     
     const isoHypeModifiedDateString = hypeModifiedDateData.toISOString();
     
     const isoHypeDateString  = hypeDateData.toISOString();
     
     cursor.execute("SET time_zone = '+00:00'")
     
     isoHypeModifiedDate = new Date(isoHypeModifiedDateString);
     
     isoHypeModifiedDate = new Date(isoHypeModifiedDateString);
     
     const isoHypeDate = new Date(isoHypeDateString);
     
     const mySQLHypeModifiedDateString = isoHypeModifiedDate.toJSON().slice(0, 19).replace('T', ' ');
     
     const mySQLHypeDateString = isoHypeDate.toJSON().slice(0, 19).replace('T', ' ');
     
     
     
     const hypeCartStationID = addHypeCartIntoHypeCartStationInterface(hypeCaptionID, hypeCartTitle, 0, 0, hypeCommentID, mySQLHypeModifiedDateString, mySQLHypeDateString);
     
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCarts (  HypeCartID INT NOT NULL PRIMARY KEY, HypeUserID INT, HypeCartStationID INT,  HypeReachID INT, HypeInteractions BIGINT, FOREIGN KEY (HypeUserID) REFERENCES HypeUsers(HypeID), FOREIGN KEY(HypeReachID) REFERENCES HypeUniverseNetworks(HypeNetworkID),           FOREIGN KEY(HypeCartStationID) REFERENCES HypeCartStationInterface(HypeCartStationID))');
     
     return hypeTrainBeaconActivation('INSERT INTO HypeCarts VALUES (?, ?, ?, ?, ?)', [hypeCartID, hypeUserID, hypeCartStationID, hypeReachID, 0]);
}

function createHypeUniverseGateKey(minKeyV, maxKeyV)
{
     return Math.floor(Math.random() * (maxKeyV - minKeyV) + minKeyV);
}

function confirmHypeUniversalGateWayID(gatewayKey, beaconReachFunction, minKeyV, maxKeyV)
{
     if (beaconReachFunction(gatewayKey) != null)
     {
          return confirmHypeUniversalGateWayID([createHypeUniverseGateKey(minKeyV, maxKeyV - 1)], beaconReachFunction);
     }
     else
     {
          return gatewayKey;
     }
}




function confirmHypeTrainUniversalContinuumSignalData(hypeBeaconData)
{
     if (hypeBeaconData.hypeContinuumNetworkPortalError != null) { return null; }
     
     return hypeBeaconData;
}







// -- HypeTrainNetworkCreationInterface
// CREATE TABLE IF NOT EXISTS HypeNameList (

//   HypeNameID INT NOT NULL PRIMARY KEY,

//   HypeFirstName VARCHAR(99),
  
//   HypeLastName VARCHAR(99)

// );



// CREATE TABLE IF NOT EXISTS HypeIdentificationList (

//   HypeIdentificationID INT NOT NULL PRIMARY KEY,

//   HypeUsername VARCHAR(99),
  
//   HypeDisplayName VARCHAR(99)

// );



// CREATE TABLE IF NOT EXISTS HypeProfileContents (

//   HypeProfileContentID INT NOT NULL PRIMARY KEY,

//   HypeProfilePic LONGBLOB

// );



// CREATE TABLE IF NOT EXISTS HypeCredentialsInterface (

//   HypeCredentialID INT NOT NULL PRIMARY KEY,

//   HypeAccessKey BINARY(64)

// );



// CREATE TABLE IF NOT EXISTS HypeReactions (

//   HypeReactionID INT NOT NULL PRIMARY KEY,
  
//   HypeContentID INT,
  
//   HypeReactionType INT,

//   HypeReactionCount BIGINT
// );





// CREATE TABLE IF NOT EXISTS HypeUsers (

//   HypeID INT NOT NULL PRIMARY KEY, 

//   HypeProfileContentID INT,

//   HypeCredentialID INT,
  
//   HypeIdentificationID INT,

//   HypeNameID INT,

//   FOREIGN KEY (HypeNameID) REFERENCES HypeNameList(HypeNameID),

//   FOREIGN KEY (HypeProfileContentID) REFERENCES HypeProfileContents(HypeProfileContentID),

//   FOREIGN KEY (HypeCredentialID) REFERENCES HypeCredentialsInterface(HypeCredentialID),
  
//   FOREIGN KEY (HypeIdentificationID) REFERENCES HypeIdentificationList(HypeIdentificationID)
// );



// CREATE TABLE IF NOT EXISTS HypeCommentaryUniverse (

//   HypeCommentID INT NOT NULL PRIMARY KEY,
  
//   HypeCommentorID INT,

//   HypeComment VARCHAR(699),
  
//   HypeReactionID INT,
  
//   HypeModifiedDate DATETIME,
  
//   HypeDate DATETIME,
  
//   FOREIGN KEY (HypeCommentorID) REFERENCES HypeUsers(HypeID),
  
//   FOREIGN KEY (HypeReactionID) REFERENCES HypeReactions(HypeReactionID) 
// );



// CREATE TABLE IF NOT EXISTS HypeUniverseNetworks (

//   HypeNetworkID INT NOT NULL PRIMARY KEY,

//   HypeTopicID INT,

//   CurrentInteractedHypeUserID INT,

//   HypeTopicRelationID INT

// );










// CREATE TABLE IF NOT EXISTS HypeCaptionInterface (
//   HypeCaptionID INT NOT NULL PRIMARY KEY,
  
//   HypeCaption VARCHAR(6999),
  
//   HypeCaptionUses BIGINT
// );


// CREATE TABLE IF NOT EXISTS HypeCartStationInterface (

//   HypeCartStationID INT NOT NULL PRIMARY KEY,
  
//   HypeCaptionID INT,

//   HypeCartTitle VARCHAR(699),
  
//   Hypes BIGINT,
  
//   HypeInteractions BIGINT,
  
//   HypeCommentID INT,
  
//   HypeModifiedDate DATETIME,
  
//   HypeDate DATETIME,
  
//   FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID) ,
  
//   FOREIGN KEY (HypeCaptionID) REFERENCES HypeCaptionInterface(HypeCaptionID) 
// );



// CREATE TABLE IF NOT EXISTS HypeCarts (

//   HypeCartID INT NOT NULL PRIMARY KEY,

//   HypeUserID INT,

//   HypeCartStationID INT,

//   HypeReachID INT,
  
//   HypeInteractions BIGINT,

//   FOREIGN KEY (HypeUserID) REFERENCES HypeUsers(HypeID),

//   FOREIGN KEY(HypeReachID) REFERENCES HypeUniverseNetworks(HypeNetworkID),
  
//   FOREIGN KEY(HypeCartStationID) REFERENCES HypeCartStationInterface(HypeCartStationID)
// );



// CREATE TABLE IF NOT EXISTS HypeContentNetwork (

//   HypeContentID INT NOT NULL PRIMARY KEY,
  
//   HypeCommentID INT,
  
//   HypeCartID INT,
  
//   FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID),
  
//   FOREIGN KEY (HypeCartID) REFERENCES HypeCarts(HypeCartID) 
// );










/*
     HypeUser Creation Protocol:
          Insert into HypeNameList  ->  HypeProfileContents  ->  HypeCredentialsInterface  ->  HypeIdentificationList  ->  *[ HypeUsers ]*  <-
    
    HypeCart Creation Protocol:
         Insert into HypeUniverseNetworks  ->  HypeReactions  ->  HypeCommentaryUniverse  ->  HypeCartStationInterface  ->  *[ HypeCarts ]*  <-
*/










/*
— Query HypeUsers at specific HypeID
SELECT * FROM HypeUsers WHERE HypeID = ?;


— Query all HypeUser’s names.
SELECT HNL.HypeNameID, HNL.HypeFirstName, HNL.HypeLastName
FROM HypeNameList AS HNL
INNER JOIN HypeUsers ON HNL.HypeNameID = HypeUsers.HypeID;

— Query HypeUser’s name at a specific HypeID.
SELECT HNL.HypeNameID, HNL.HypeFirstName, HNL.HypeLastName
FROM HypeNameList AS HNL
INNER JOIN HypeUsers ON HNL.HypeNameID = HypeUsers.HypeID WHERE HNL.HypeNameID = 1;



— Query all HypeUser’s by HypeNameID
SELECT HU.HypeID, HU.HypeProfileContentID, HU.HypeCredentialID, HU.HypeIdentificationID, HU.HypeNameID
FROM HypeUsers AS HU
INNER JOIN HypeNameList AS HNL ON HU.HypeID = HNL.HypeNameID;



— Query all HypeUser’s by HypeIdentificationID
SELECT HU.HypeID, HU.HypeProfileContentID, HU.HypeCredentialID, HU.HypeIdentificationID, HU.HypeNameID
FROM HypeUsers AS HU
INNER JOIN HypeIdentificationList AS HIL ON HU.HypeID = HIL.HypeIdentificationID;



— Query HypeUser’s by HypeIdentificationID that contains both HypeUsername / DisplayName
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID);



— Query HypeUser from HypeUsername
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeUsername = ?;



— Query HypeUser from HypeDisplayname
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeDisplayname = ?;



— Query HypeUser from HypeUsername containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeUsername like ?;



— Query HypeUser from HypeDisplayname containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeDisplayname like ?;



— Query HypeUser from HypeFirstName containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HNL.HypeFirstName like ?;



— Query HypeUser from HypeLastName containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HNL.HypeLastName like ?;










— Query all HypeCarts
SELECT * FROM HypeCarts;



— Query all HypeCarts empowered by HypeUsers’ HypeID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeUserID = HU.HypeID;



— Query HypeCarts associated by specified HypeCart HypeUserID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeUserID = ?;



— Query HypeCarts by HypeCartID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeCartID = ?;
*/



app.listen(PORT, () =>{
     console.log(`server is listenig on ${PORT}`);
})


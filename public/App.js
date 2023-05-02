import { registerRootComponent } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, StatusBar } from 'react-native';
import { MapkitProvider, Map, useMap, Marker } from 'react-mapkit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import LegendaryHUDBuildingManager from '../serverAssests/CustomUIFunctionality/UIBuilding/LegendaryHUDBuildingManager.js';
import { getCurrentHypeTrainContinuumSignalConnection } from '../../LegendaryHypeTrainContinuumSignalConnection.js';
import LegendaryHUDBuilder from '../serverAssests/CustomUIFunctionality/UIBuilding/LegendaryHUDBuilder.js';
import LoginPage from './pages/Login.js';

const currentHypeTrainContinuumConnection = getCurrentHypeTrainContinuumSignalConnection();

const legendaryBuilder = LegendaryHUDBuilder.legendaryBuilding();

const legendaryBuild = LegendaryHUDBuildingManager.build();

const HypePages = createNativeStackNavigator();

registerRootComponent(App);

const hypeTrainHoverSettings = legendaryBuild.ConfigureHoverAppearance(
    "transparent",
    '87%',
    null,
    null,
    null,
    '#c304fb',
    0.69,
    {
         width : 0,
         height : 7
    },
    15.69,
    -7 
);

export default function HypeTrainStationHub()
{ 
  return (
       <NavigationContainer>
            <HypePages.Navigator initialRouteName = "Login" >
                <HypePages.Screen
                    name='Login'
                    component={LoginPage}
                />
                 <HypePages.Screen 
                      name = "HypeTrainStationHub"
                      component = { HypeTrainHomeStation } 
                      options = {{ color : "#25292e", headerShown : false }}
                 />
                 
                 <HypePages.Screen 
                      name = "HypeTrainProfile" 
                      component = { HypeTrainProfile } 
                      options = {{ color : "#25292e", headerShown : false }}
                 />
            </HypePages.Navigator>
       </NavigationContainer>
  );
}

 const HypeTrainHomeStation = ({ navigation }) =>
{
  const hypeTrainStationHubWidth = Dimensions.get('screen').width;
  
  const hypeTrainStationHubHeight = Dimensions.get('screen').height;
  
  var mainTitleHoverSettings = legendaryBuild.ConfigureHoverAppearance(
    "transparent",
    '87%',
    'magenta',
    null,
    null,
    '#fa2999',
    0.269,
    {
         width : -69,
         height : 0
    },
    69.69,
    15
  );
  
  var mainTitleSettings = legendaryBuild.ConfigureHUDButton(
    'HypeTrain',
    null,
    0.69,
    null,
    'Superclarendon',
    null,
    31,
    'absolute',
    'magenta',
    'transparent',
    37,
    69.69,
    5,
    'center',
    'center',
    null,
    false,
    null,
    mainTitleHoverSettings,
    {},
    {},
    null,
    null,
    null,
    null,
    null,
    'center'
  );
  
  const hypeTrainProfileButtonSettings = legendaryBuild.ConfigureHUDButton(
    null,
    null,
    0.69,
    null,
    'Superclarendon',
    null,
    12,
    'absolute',
    '#099',
    'transparent',
    69 / 2,
    69,
    69,
    'center',
    'center',
    'row',
    false,
    null,
    hypeTrainHoverSettings,
    {
      image: require('./public/HypeAssests/HypeTrainHonorProfilePicIcon.png'),
    },
    {
      width: 69,
      height: 76,
    },
    0.269,
    {
         width : 0,
         height : 7
    },
    4.69,
    '#000',
    7
  );
  
  var topNavBarSettings = legendaryBuild.ConfigureView(
    'rgba(52, 52, 52, 0.47)',
    null,
    21,
    '69%',
    '21%',
    'absolute',
    0,
    '100%',
    'center',
    'center'
  );

  var stationMainHubViewSettings = legendaryBuild.ConfigureView(
    '#25292e',
    null,
    0,
    hypeTrainStationHubWidth,
    hypeTrainStationHubHeight,
    'absolute',
    0,
    '100%',
    'center',
    'center'
  );
  
  /*
  var stationSearchBarSettings = legendaryBuild.ConfigureHUDSearchBar(
    'Search community...',
    '#699',
    21,
    169,
    5,
    'transparent',
    'transparent',
    'transparent',
    0,
    0,
    'transparent',
    'transparent',
    null,
    null,
    true
  );
  */
  
  var stationHypeShowcaseScrollView = legendaryBuild.ConfigureScrollView(
    'transparent',
    true,
    false,
    true,
    '100%',
    '700%',
    'absolute'
  );
  
  /*
  var collectionViewShowcaseData = [
    {
         iD : 1,
         title : "Beautiful Sunsets",
         topShowcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7455.jpg?w=826&t=st=1682731096~exp=1682731696~hmac=5d07397047251ebbbee2b002dbb139f0e4e57a01bba762710c8eca34fa8d965c',
         showcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         bottomShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf'
    },
    {
         iD : 2,
         title : "Beautiful Pictures",
         topShowcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         showcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         bottomShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf'
    },
    {
         iD : 3,
         title : "Yo",
         topShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf',
         showcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         bottomShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf'
    },
    {
         iD : 4,
         title : "Yo",
         topShowcaseImgURL : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbeautiful-sunset&psig=AOvVaw3PocI6I3yyNL5UDd7XiaSZ&ust=1682817237416000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjA2qb1zf4CFQAAAAAdAAAAABAD',
         showcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         bottomShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf'
    },
    {
         iD : 5,
         title : "Yo",
         topShowcaseImgURL : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbeautiful-sunset&psig=AOvVaw3PocI6I3yyNL5UDd7XiaSZ&ust=1682817237416000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjA2qb1zf4CFQAAAAAdAAAAABAD',
         showcaseImgURL : 'https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1800&t=st=1682731123~exp=1682731723~hmac=b198b8a537401f62311d4484f3d24a35ef254aadeb596ccc02b6de13a932c914',
         bottomShowcaseImgURL : 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1800&t=st=1682731164~exp=1682731764~hmac=052cfc8596794bd76c070bc54c97a0bc57c57389e23bbbd913091a5c05c9fcdf'
    }
  ];
  
  var hypeStationShowcaseCollectionViewSettings = legendaryBuild.ConfigureHUDCollectionView(
    'transparent',
    'transparent',
    '76%',
    '5%',
    null,
    StatusBar.currentHeight || 0,
    null,
    15,
    0,
    null,
    true,
    false,
    1,
    item => item.iD,
    ({item}) => <legendaryBuilder.HUDShowcaseCardCell { ...item } />,
    '91%',
    false,
    false,
    1,
    null,
    null,
    null
  )
  */
  
  hypeTrainProfileButtonSettings.legendaryClickAction = () => navigation.navigate("HypeTrainProfile");
  
  hypeTrainProfileButtonSettings.legendaryHoverAppearance.legendaryHoverAction.hoverFunc = HopBoardOnTheHypeTrain;
  
  hypeTrainProfileButtonSettings.legendaryHoverAppearance.legendaryHoverAction.hoverFuncInput = { hudModalVisible : true };
  
  hypeTrainProfileButtonSettings.legendaryHoverAction = HopBoardOnTheHypeTrain;
  
  
  
  legendaryBuilder.SetUIComponent(mainTitleSettings, 'top', 27);
  
  legendaryBuilder.SetUIComponent(mainTitleSettings, 'left', '47%');
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileButtonSettings, 'top', 21);
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileButtonSettings, 'right', '5%');
  
  //legendaryBuilder.SetUIComponent(stationSearchBarSettings, 'containerStyle', -10, 'top');
  
  legendaryBuilder.SetUIComponent(topNavBarSettings, 'top', '10%');
  
  legendaryBuilder.SetUIComponent(topNavBarSettings, 'right', '15%');
  
  legendaryBuilder.SetUIComponent(stationHypeShowcaseScrollView, 'top', '32%');
  
  /*
  legendaryBuilder.SetUIComponent(hypeStationShowcaseCollectionViewSettings, 'left', '12.69%')
  
  legendaryBuilder.SetUIComponent(hypeStationShowcaseCollectionViewSettings, 'bottom', '-7%')
  
  <legendaryBuilder.HUDCollectionView 
       hudCollectionViewSettings = { hypeStationShowcaseCollectionViewSettings } 
        
       hudCollectionViewData = { collectionViewShowcaseData } 
  />
  
  <legendaryBuilder.HUDSearchBar searchBarData = { stationSearchBarSettings } />
  */
  
  return (
    <View style = { stationMainHubViewSettings }>
      <legendaryBuilder.HUDButton 
           buttonData = { hypeTrainProfileButtonSettings }
      />
      
      <LinearGradient 
              colors = {['transparent', '#3c375c']}
              
              locations = {[0.7969, 0.969]}
              
              style = { topNavBarSettings }
      />
      
      <View style = { topNavBarSettings }>
        
        
        <legendaryBuilder.HUDButton 
             buttonData = { mainTitleSettings }
        />
        
        
      </View>
      
      
    </View>
  );
}

const HypeTrainProfile = ({ navigation }) => {
  var hypeTrainProfilePageSettings = legendaryBuild.ConfigureView(
    '#2f263b',
    null,
    0,
    '100%',
    '100%',
    'absolute',
    0,
    '100%',
    'center',
    'center'
  );
  
  const hypeTrainProfilePageButtonSettings = legendaryBuild.ConfigureHUDButton(
    null,
    null,
    0.969,
    null,
    'Superclarendon',
    null,
    12,
    'absolute',
    '#099',
    'transparent',
    99 / 2,
    99,
    99,
    'center',
    'center',
    'row',
    false,
    null,
    hypeTrainHoverSettings,
    {
      image: require('./public/HypeAssests/HypeTrainHonorProfilePicIcon.png'),
    },
    {
      width: 99,
      height: 109,
    },
    0.269,
    {
         width : 0,
         height : 7
    },
    4.69,
    '#000',
    7
  );
  
  var hypeTrainBackButtonHoverAppearance = legendaryBuild.ConfigureHoverAppearance(
    'transparent',
    '69%',
    null,
    null,
    { 
      imageData : {
         image : require('./public/HypeAssests/LegendaryHypeTrainBackButtonIcon.png'),
         hoverImage : require('./public/HypeAssests/LegendaryHypeTrainBackButtonHoverIcon.png')
      },
      imageSizeData : {
         width : 76,
         height : 37
      },
      hover : false
    }
  )
  
  var hypeTrainBackButtonSettings = legendaryBuild.ConfigureHUDButton(
    null,
    null,
    null,
    10,
    null,
    null,
    null,
    'absolute',
    "transparent",
    "transparent",
    15,
    69,
    37,
    'center',
    'center',
    null,
    null,
    () => navigation.navigate("HypeTrainStationHub"),
    hypeTrainBackButtonHoverAppearance,
    {
         image: require('./public/HypeAssests/LegendaryHypeTrainBackButtonIcon.png'),
    },
    {
         width : 76,
         height : 37
    }
  );

  var hypeTrainCreateHypeCartButtonHoverAppearance = legendaryBuild.ConfigureHoverAppearance(
    'transparent',
    '69%',
    null,
    null,
    { 
      imageData : {
         image : require('./public/HypeAssests/HypeCartCreationButtonIcon.png'),
         hoverImage : require('./public/HypeAssests/HypeCartCreationClickHoveredButtonIcon.png')
      },
      imageSizeData : {
         width : 76,
         height : 37
      },
      hover : false
    }
  )
  
  var hypeTrainCreateHypeCartButtonSettings = legendaryBuild.ConfigureHUDButton(
    null,
    null,
    null,
    10,
    null,
    null,
    null,
    'absolute',
    "transparent",
    "transparent",
    15,
    99,
    99,
    'center',
    'center',
    null,
    null,
    /*() => navigation.navigate("HypeTrainHypeWorkHypeCartStagingHub")*/ null,
    hypeTrainCreateHypeCartButtonHoverAppearance,
    {
         image: require('./public/HypeAssests/HypeCartCreationButtonIcon.png'),
    },
    {
         width : 99,
         height : 99
    }
  );
  
  var hypeTrainHypeCartsButtonHoverAppearance = legendaryBuild.ConfigureHoverAppearance(
    'transparent',
    '69%',
    null,
    null,
    { 
      imageData : {
         image : require('./public/HypeAssests/HypeCartsButtonIcon.png'),
         hoverImage : require('./public/HypeAssests/HypeCartsClickHoveredButtonIcon.png')
      },
      imageSizeData : {
         width : 76,
         height : 37
      },
      hover : false
    }
  )
  
  var hypeTrainHypeCartsButtonSettings = legendaryBuild.ConfigureHUDButton(
    null,
    null,
    null,
    10,
    null,
    null,
    null,
    'absolute',
    "transparent",
    "transparent",
    15,
    105,
    105,
    'center',
    'center',
    null,
    null,
    /*() => navigation.navigate("HypeTrainHypeCartsDisplayer")*/ null,
    hypeTrainHypeCartsButtonHoverAppearance,
    {
         image: require('./public/HypeAssests/HypeCartsButtonIcon.png'),
    },
    {
         width : 105,
         height : 105
    }
  );

  var hypeTrainProfileDisplayNameLabelSettings = legendaryBuild.ConfigureHUDButton(
    currentHypeTrainContinuumConnection.currentHypeDisplayName ? currentHypeTrainContinuumConnection.currentHypeDisplayName : "",
    true,
    1.0,
    10,
    'Superclarendon',
    'bold',
    23.69,
    'absolute',
    "#590D57",
    "transparent",
    15,
    169,
    37,
    'left',
    'center',
    null,
    null
  );
  
  var hypeTrainProfileUsernameHoverAppearance = legendaryBuild.ConfigureHoverAppearance(
    'transparent',
    '69%',
    '#630D61',
    null,
    null,
    '#590D57',
    0.269,
    {
      width : 0,
      height : 7
    },
    5.69,
    7
  )
  
  var hypeTrainProfileUsernameLabelSettings = legendaryBuild.ConfigureHUDButton(
    currentHypeTrainContinuumConnection.currentHypeUsername ? currentHypeTrainContinuumConnection.currentHypeUsername : "",
    true,
    1.0,
    10,
    'Superclarendon',
    'italic',
    15.69,
    'absolute',
    "#630D61",
    "transparent",
    15,
    169,
    37,
    'left',
    'center',
    null,
    null,
    null,
    hypeTrainProfileUsernameHoverAppearance
  );
  
  var hypeTrainProfileNameDisplayViewSettings = legendaryBuild.ConfigureView(
    '#281f38',
    null,
    47,
    '31.69%',
    '15%',
    'absolute',
    0,
    '69%',
    'center',
    'center',
    null
  );
  
  legendaryBuilder.SetUIComponent(hypeTrainBackButtonSettings, 'top', 21);
  
  legendaryBuilder.SetUIComponent(hypeTrainBackButtonSettings, 'left', '5%');


  
  legendaryBuilder.SetUIComponent(hypeTrainProfilePageButtonSettings, 'left', '5%');
  
  legendaryBuilder.SetUIComponent(hypeTrainProfilePageButtonSettings, 'bottom', '7%');


  
  legendaryBuilder.SetUIComponent(hypeTrainProfileNameDisplayViewSettings, 'left', '7.69%');
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileNameDisplayViewSettings, 'bottom', '5.69%');
  


  legendaryBuilder.SetUIComponent(hypeTrainProfileDisplayNameLabelSettings, 'left', '15.69%');
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileDisplayNameLabelSettings, 'bottom', '14.69%');
  
  
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileUsernameLabelSettings, 'left', '11.869%');
  
  legendaryBuilder.SetUIComponent(hypeTrainProfileUsernameLabelSettings, 'bottom', '7.69%');
  
  
  
  legendaryBuilder.SetUIComponent(hypeTrainCreateHypeCartButtonSettings, 'bottom', "81.99%");
  
  legendaryBuilder.SetUIComponent(hypeTrainCreateHypeCartButtonSettings, 'left', "78.69%");
  
  
  
  legendaryBuilder.SetUIComponent(hypeTrainHypeCartsButtonSettings, 'bottom', "83.99%");
  
  legendaryBuilder.SetUIComponent(hypeTrainHypeCartsButtonSettings, 'left', "69.69%");
  
  return (
    <View style = { hypeTrainProfilePageSettings } >
         <LinearGradient 
              colors={['transparent', '#533f5a', '#461c54']}
              
              locations = {[0.69, 0.699, 0.969]}
              
              style = { hypeTrainProfilePageSettings }
         />
         
         <View style = { hypeTrainProfileNameDisplayViewSettings } >
              <LegendaryBuilder.HUDGradientTextLabel 
               { ...hypeTrainProfileDisplayNameLabelSettings } 
               { ...{ 
                 viewBoxPositionVector : "147 57 69 90", 
                 viewBoxHeight : "5000",
                 viewBoxWidth : "369",
                 gradientID : "displayNameHype",
                 fontSize : "21"
               }} 
               { ...{gradientColors : [
                    {
                         color : "#390B38",
                         colorOffset : "69%"
                    },
                    {
                         color : "#EB59E7",
                         colorOffset : "227%"
                    }
               ]}}
               
              />
         </View>
         
         <legendaryBuilder.HUDButton buttonData = { hypeTrainProfilePageButtonSettings } />
         
         <legendaryBuilder.HUDButton buttonData = { hypeTrainBackButtonSettings } />
         
         <legendaryBuilder.HUDButton buttonData = { hypeTrainProfileUsernameLabelSettings } />
         
         <legendaryBuilder.HUDButton buttonData = { hypeTrainCreateHypeCartButtonSettings } />
         
         <legendaryBuilder.HUDButton buttonData = { hypeTrainHypeCartsButtonSettings } />
    </View>
  );
}

const ActivateHypeMap = () => {
  const { map, mapProps, setRotation } = useMap();

  return (
    <>
      <Map {...mapProps} />
    </>
  );
};

const CreateHypeMap = (centerCoords, marker, languageID) => (
  <MapkitProvider tokenOrCallback={'HypeTrain'} language={languageID}>
    <Map center={[centerCoords.lat, centerCoords.long]}></Map>
  </MapkitProvider>
);







function HUDFlatListView(hudFlatListData, data, renderItem) 
{
  return (
    <FlatList style = { hudFlatListData.flatListData } >
      data = {data}
      renderItem = renderItem
    </FlatList>
  );
}

function HUDCarousel(hudCarouselSettings) 
{
  const cellPressed = (e) => {
    e.preventDefault();
    
    console.log('pressed');
  };
  
  return (
    <AliceCarousel
      autoPlay

      autoPlayInterval="3000"
      
      style = { hudCarouselSettings.style } 
    >
      <TouchableOpacity width="380" height="169" onClick={cellPressed}>
        {' '}
        <img src={image1} className="sliderimg" alt="" />
        press
      </TouchableOpacity>

      <TouchableOpacity width="380" height="169" onClick={cellPressed}>
        {' '}
        <img src={image2} className="sliderimg" alt="" /> press{' '}
      </TouchableOpacity>
      
      <TouchableOpacity>
        <iframe
          width="380"
          height="169"
          src="https://www.youtube.com/embed/Nf6r09N6_8M"
          title="This New Spy Game is Hilarious"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>{' '}
      </TouchableOpacity>
    </AliceCarousel>
  );
}

function HopBoardOnTheHypeTrain(hudModalConfiguration)
{
  return (
     <legendaryBuilder.HUDModal { ...hudModalConfiguration } />
  );
}

const styles = StyleSheet.create({
  itemContainer : {
       backgroundColor: 'transparent',
       padding : 7.69
  },
  item: {
    backgroundColor: 'transparent',
    padding: 30.69,
    borderRadius : 15,
    width : "90%",
    height : "90.69%",
    shadowColor : '#000',
    shadowOffset : {
      width : 7,
      height : 10
    },
    shadowOpacity : 0.269,
    shadowRadius : 5.69,
    elevation : 7
  },
  title: {
    fontSize: 27,
    color : '#43B4C8',
    fontFamily : 'Calibri',
    fontWeight : 'bold',
  },
  imageCell: {
    width : 150,
    height : 150
  },
});

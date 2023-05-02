import React from 'react';
import { View, StyleSheet, Dimensions, Text } from "react-native";
import LegendaryHUDBuildingManager from "../UIBuilding/LegendaryHUDBuildingManager.js";
import LegendaryHUDGradientTextLabel from '../LegendaryHUDGradientTextLabel.js';
import LegendaryHUDBuilder from "../UIBuilding/LegendaryHUDBuilder.js";

export const sliderWidth = Dimensions.get('window').width / 3.69;

export const itemWidth = Math.round(sliderWidth * 0.7);




export type LegendaryHUDShowcaseCardViewModel =
{
  iD : String,

  showcaseTitle : String,
  
  topShowcaseImgURL : String,
  
  showcaseImgURL : String,
  
  bottomShowcaseImgURL : String
}

const LegendaryHUDShowcaseCardCell = ({ itemData, itemIndex }) => {
  const legendaryBuilder = LegendaryHUDBuilder.legendaryBuilding();
  
  const legendaryHUDCardCellSettings = StyleSheet.create({
  legendaryHUDCardCellViewSettings : LegendaryHUDBuildingManager.build().ConfigureView(
       "transparent",
       null,
       15,
       itemWidth + 31,
       287,
       null,
       null,
       "91%",
       null,
       null,
       null,
       "#000",
       {
            width : 69,
            height : 20
       },
       0.0969,
       4.69,
       9,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       15,
       15,
       null,
       30
  ),
  
  legendaryHUDCardCellHUDButtonViewSettings : LegendaryHUDBuildingManager.build().ConfigureHUDButton(
    null,
    null,
    0.969,
    null,
    null,
    null,
    null,
    null,
    '#099',
    'transparent',
    15,
    itemWidth,
    "3000%",
    'center',
    'center',
    'row',
    false,
    null,
    null,
    null,
    null
  ),
  
  legendaryHUDCardCellTopShowcaseImageViewSettings : LegendaryHUDBuildingManager.build().ConfigureHypeTrainImageViewer(
       itemData.topShowcaseImgURL,
       null,
       itemWidth / 1.4369,
       "105.69%",
       15,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       'fill',
       "100%",
       null,
       null,
       null,
       null,
       0.269,
       {
            width : 0,
            height : 5
       },
       4.69,
       "#000",
       7
  ),
  
  legendaryHUDCardCellShowcaseImageViewSettings : LegendaryHUDBuildingManager.build().ConfigureHypeTrainImageViewer(
       itemData.showcaseImgURL,
       null,
       itemWidth / 1.4369,
       "105.69%",
       15,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       'fill',
       "69%"
  ),
  
  legendaryHUDCardCellBottomShowcaseImageViewSettings : LegendaryHUDBuildingManager.build().ConfigureHypeTrainImageViewer(
       itemData.showcaseImgURL,
       null,
       itemWidth / 1.4369,
       "105.69%",
       15,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       'fill',
       "31%"
  ),
  
  hypeTrainShowcaseTitleLabelSettings : LegendaryHUDBuildingManager.build().ConfigureHUDButton(
    itemData.showcaseTitle,
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
  )
  });
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellTopShowcaseImageViewSettings, 'bottom', 480.69)
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellTopShowcaseImageViewSettings, 'left', "21%")
  
  
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellShowcaseImageViewSettings, 'bottom', "50.69%")
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellShowcaseImageViewSettings, 'left', "55%")
  
  
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellBottomShowcaseImageViewSettings, 'bottom', "54.69%")
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellBottomShowcaseImageViewSettings, 'left', "32.69%")
  
  
  
  legendaryBuilder.SetUIComponent(legendaryHUDCardCellSettings.legendaryHUDCardCellHUDButtonViewSettings, 'bottom', 100)
  
  return (
    <View style = { legendaryHUDCardCellSettings.legendaryHUDCardCellViewSettings } key = { itemIndex }>
       <View style = {{ backgroundColor : "transparent", width : 100, height : 99.69, right : 55.69, bottom : -220.69, zIndex : 1}} >
          <LegendaryHUDGradientTextLabel 
               { ...legendaryHUDCardCellSettings.hypeTrainShowcaseTitleLabelSettings } 
               { ...{ 
                 viewBoxPositionVector : "147 69 69 90", 
                 viewBoxHeight : "6000",
                 viewBoxWidth : "369",
                 gradientID : "showcaseHypeCartTitle",
                 fontSize : "22.69"
               }} 
               { ...{gradientColors : [
                    {
                         color : "#F6FDFF",
                         colorOffset : "81.69%"
                    },
                    {
                         color : "#9845FC",
                         colorOffset : "227%"
                    }
               ]}}
               
           />
           
      </View>
       <View style = {{ backgroundColor : "transparent", width : 100, height : 169, left : "21%", bottom : 1 }} >
            <legendaryBuilder.LegendaryHypeTrainImager
                 legendaryHypeTrainImagerSettings = { legendaryHUDCardCellSettings.legendaryHUDCardCellBottomShowcaseImageViewSettings }
            />
       </View>
       
       <View style = {{ backgroundColor : "transparent", width : 100, height : 187.69, left : 18.69, bottom : 172.69 }} >
            <legendaryBuilder.LegendaryHypeTrainImager
                 legendaryHypeTrainImagerSettings = { legendaryHUDCardCellSettings.legendaryHUDCardCellShowcaseImageViewSettings }
            />
       </View>
       
       <legendaryBuilder.LegendaryHypeTrainImager
            legendaryHypeTrainImagerSettings = { legendaryHUDCardCellSettings.legendaryHUDCardCellTopShowcaseImageViewSettings }
       />
       
       
       
       <legendaryBuilder.HUDButton 
            buttonData = { legendaryHUDCardCellSettings.legendaryHUDCardCellHUDButtonViewSettings }
       />
    </View>
  )
}



export default LegendaryHUDShowcaseCardCell;
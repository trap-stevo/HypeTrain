import LegendaryHUDButton from "../LegendaryHUDButton.js";
import LegendaryHUDModal from "../LegendaryHUDModal.js";
import LegendaryHUDImager from "../LegendaryHUDImager.js";
import LegendaryHUDTextLabel from "../LegendaryHUDTextLabel.js";
import LegendaryHUDTextField from "../LegendaryHUDTextField.js";
import LegendaryHUDShowcaseCardCell from "../CustomUICells/LegendaryHUDShowcaseCardCell.js";
import LegendaryHUDCollectionView from "../LegendaryHUDCollectionView.js";
import { SearchBar } from "react-native-elements";
import { ScrollView, Image, Text } from "react-native";
import React from 'react';










function SetUpHUDButton(hudButtonD)
{
     const [legendaryButton, setLegendaryButton] = React.useState([hudButtonD.buttonData]);
     
     const [legendaryHoverState, setLegendaryHoverState] = React.useState({ hovered : true });
     
     const checkForHUDImageHover = () => {
          setLegendaryHoverState({ hovered : !legendaryHoverState.hovered })
          
          setLegendaryButton(legendaryButton.map((legendaryElement) => {
               legendaryElement.hovered = legendaryHoverState.hovered
               
               return legendaryHoverState === true ? { ...legendaryElement, hovered : legendaryHoverState} : { 
                                                       ...legendaryElement 
                                                     }
          }));
     };
     
     var legendaryHoverImage = hudButtonD.buttonData.legendaryHoverAppearance

     var legendaryImage = hudButtonD.buttonData.imageData

     if (legendaryHoverImage != null && legendaryHoverImage.legendaryHoverAction.hoverFuncInput != null && legendaryHoverImage.legendaryHoverAction.hoverFuncInput.imageData != null && legendaryHoverImage.legendaryHoverAction.hoverFuncInput.imageData.hoverImage != null)
     {
          legendaryHoverImage = legendaryHoverImage.legendaryHoverAction.hoverFuncInput.imageData.hoverImage
          
          legendaryImage = hudButtonD.buttonData.imageData.image
     }
     else if (hudButtonD.buttonData.imageData != null && hudButtonD.buttonData.imageData.image != null)
     {
          legendaryHoverImage = hudButtonD.buttonData.imageData.image

          legendaryImage = hudButtonD.buttonData.imageData.image
     }
     
     if (hudButtonD.buttonData.imageData != null && hudButtonD.buttonData.imageData.uri != null)
     {
          legendaryHoverImage = hudButtonD.buttonData.imageData.uri
          
          legendaryImage = hudButtonD.buttonData.imageData.uri
     }
     
     return (
          <div className = "HUDButton">
               {legendaryButton.map((legendaryElement) => {
                    return (
                         <LegendaryHUDButton
                              legendaryButtonData = { legendaryElement }
                              
                              hoverStyle = { legendaryElement.legendaryHoverAppearance }
                              
                              onPress = {legendaryElement.legendaryClickAction}
                              
                              onMouseEnter = { checkForHUDImageHover }
                              
                              onMouseLeave = { checkForHUDImageHover }
                         >
                              <Image
                                   source = { legendaryElement.hovered && legendaryHoverImage != null ? legendaryHoverImage : legendaryImage }
                                   
                                   style = { legendaryElement.imageSizeData }
                              />
                              
                              { hudButtonD.buttonData.text ? hudButtonD.buttonData.text : '' }
                         </LegendaryHUDButton>
                    );
               })};
          </div>
     );
}

export default class LegendaryHUDBuilder
{
   static legendaryBuild = null;
   
   static legendaryBuilding() 
   {
        if (LegendaryHUDBuilder.legendaryBuild == null) {
            LegendaryHUDBuilder.legendaryBuild = new LegendaryHUDBuilder();
        }
        
        return this.legendaryBuild;
   }
   
   SetUIComponent(
        uiComponent,
        positionID,
        positionAxisV,
        specificPositionID
   ) 
   {
        if (specificPositionID == null) {
             uiComponent[positionID] = positionAxisV;
        } else if (specificPositionID != null) {
             uiComponent[positionID][specificPositionID] = positionAxisV;
        }
        
        return;
   }
   
   HUDScrollView(hudScrollViewData) 
   {
        return <ScrollView style = { hudScrollViewData.scrollViewData } > </ScrollView>;
   }
   
   LegendaryHypeTrainImager(imagerSettings, legendaryImage) 
   {
        imagerSettings.legendaryHypeTrainImagerSettings.image = legendaryImage;
        
        var hudImagerSettings = imagerSettings.legendaryHypeTrainImagerSettings;
        
        return (
             <LegendaryHUDImager
                  legendaryHUDImagerSettings = {hudImagerSettings}
             />
        );
   }

   HUDSearchBar(hudSearchBarData) 
   {
        var searchBarData = hudSearchBarData.searchBarData;
        
        return (
             <SearchBar
                  containerStyle = {searchBarData.containerStyle}
                  inputStyle = {searchBarData.inputStyle}
                  placeHolder ={ searchBarData.placeHolderText}
                  placeHolderTextColor = {searchBarData.placeHolderTextColor}
                  cancelDisabled = {searchBarData.cancelDisabled}
                  paddingTop = {searchBarData.paddingTop}
                  round = {searchBarData.round}
                  showCancel = {searchBarData.showCancel}
                  showLoading = {searchBarData.showLoading}
                  lightTheme = {searchBarData.lightTheme}
                  platform = {searchBarData.platform}
             />
        );
   }

   HUDTextLabel(textLabelSettings) 
   {
        var textData = textLabelSettings.legendaryHUDTextLabelSettings;
        
        return (
          //    <LegendaryHUDTextLabel 
          //         legendaryHUDTextLabelSettings = { textData } > 
          //    </LegendaryHUDTextLabel>

          <Text style={textData} >
    { textData ? textData.text : "" }
    </Text>
        );
   }
   HUDGradientTextLabel = (legendaryHUDGradientTextLabelSettings) => {
     var viewBoxPos = legendaryHUDGradientTextLabelSettings.viewBoxPositionVector;
     
     var viewBoxHeight = legendaryHUDGradientTextLabelSettings.viewBoxHeight;
     
     var viewBoxWidth = legendaryHUDGradientTextLabelSettings.viewBoxWidth;
     
     var hudGradientLabelColors = legendaryHUDGradientTextLabelSettings.gradientColors;
   
     var fontSize = legendaryHUDGradientTextLabelSettings.fontSize;
   
     var gradientID = legendaryHUDGradientTextLabelSettings.gradientID;
     
     legendaryHUDGradientTextLabelSettings.flexWrap = 'wrap';
   
     legendaryHUDGradientTextLabelSettings.flexWrap = 'row';
     
     return (
          <Svg 
               viewBox = { viewBoxPos }
               height = { viewBoxHeight }
               width = { viewBoxWidth }
          >
             <Defs>
               <LinearGradient id = { gradientID } x1 = "5%" x2 = "0" y1 = "0" y2 = "100%" gradientUnits = "userSpaceOnUse" >
                 {hudGradientLabelColors.map(hudGradientColor => (
                     <Stop stopColor = { hudGradientColor.color } offset = { hudGradientColor.colorOffset } />
                 ))}
               </LinearGradient>
             </Defs>
             
             <Text style = { legendaryHUDGradientTextLabelSettings } fill = { "url(#" + gradientID + ")" } >
               <TSpan fonSize = { fontSize } x = "69" dy = "91" > 
                    { legendaryHUDGradientTextLabelSettings.text || "???" } 
               </TSpan>
             </Text>
          </Svg>
     );
   };
   

   HUDTextField(legendaryHUDTextFieldSettings, legendaryHUDTextFieldContainerSettings, legendaryHUDTextFieldTitleSettings, textInput)
   {
        var hudTextFieldSettings = legendaryHUDTextFieldSettings.hudTextFieldSettings
        
        var hudTextFieldContainerSettings = legendaryHUDTextFieldSettings.hudTextFieldContainerSettings
        
        var hudTextFieldTitleSettings = legendaryHUDTextFieldSettings.hudTextFieldTitleSettings
        
        return (
             <LegendaryHUDTextField
                  legendaryHUDTextFieldViewSettings = { hudTextFieldSettings }
                  
                  legendaryHUDTextFieldTitleSettings = { hudTextFieldTitleSettings }
                  
                  legendaryHUDTextFieldContainerSettings = { hudTextFieldContainerSettings }
                  
                  textInputValue = { textInput }
             />
        );
   }

   HUDShowcaseCardCell(inputData)
   {
     const showcaseInputData : LegendaryHUDShowcaseCardViewModel = {
          iD : inputData.iD,
          
          showcaseTitle : inputData.title,
          
          topShowcaseImgURL : inputData.topShowcaseImgURL,
          
          showcaseImgURL : inputData.showcaseImgURL,
          
          bottomShowcaseImgURl : inputData.bottomShowcaseImgURL

     }
     
     return (
          <LegendaryHUDShowcaseCardCell itemData = { showcaseInputData } itemIndex = { inputData.iD } />
     );
   }
   
   HUDCollectionView(legendaryHUDCollectionViewConfiguration)
   {
        var hudCollectionViewData = legendaryHUDCollectionViewConfiguration.hudCollectionViewData
        
        var hudCollectionViewBackgroundSettings = legendaryHUDCollectionViewConfiguration.hudCollectionViewBackgroundSettings
        console.log(legendaryHUDCollectionViewConfiguration)
        var hudCollectionViewSettings = legendaryHUDCollectionViewConfiguration.hudCollectionViewSettings
        
        return (
             <LegendaryHUDCollectionView  
                  legendaryHUDCollectionViewSettings = { hudCollectionViewSettings }
                  legendaryHUDCollectionViewBackgroundSettings = { hudCollectionViewBackgroundSettings }
                  legendaryHUDCollectionViewData = { hudCollectionViewData }
                  
             />
        );
   }
   
   HUDModal(hudModalConfiguration)
   {
       var hopBoardOnTheHypeTrainViewSettings = legendaryBuild.ConfigureView(
            'white',
            null,
            0,
            '40%',
            '40%',
            'percentage',
            0,
            '100%',
            'center',
            'center'
       );
       
       var hopBoardOnTheHypeTrainHeaderViewSettings = legendaryBuild.ConfigureView(
            'white',
             null,
             0,
            '27%',
            '15%',
            'percentage',
             0,
            '100%',
            'center',
            'center'
       );
      
       var hopBoardOnTheHypeTrainBodyViewSettings = legendaryBuild.ConfigureView(
            'white',
            null,
            0,
            '27%',
            '47%',
            'percentage',
            0,
            '100%',
            'center',
            'center'
       );
       
       var hopBoardOnTheHypeTrainTitleLabelSettings = legendaryBuild.ConfigureTextLabel(
            "Hop on the Hypetrain!",
            10,
            15,
            15,
            'Superclarendon',
            15,
            'percentage',
            'transparent',
            '#099',
            false
       );
       
       var hopBoardOnTheHypeTrainFooterViewSettings = legendaryBuild.ConfigureView(
            'white',
            null,
            0,
            '27%',
            '15%',
            'percentage',
            0,
            '100%',
            'center',
            'center'
       );
       
       legendaryBuilder.SetUIComponent(hopBoardOnTheHypeTrainViewSettings, 'left', '5%');
       
       return (
            <LegendaryHUDModal 
                 visible = {hudModalConfiguration.currentHoverState ? hudModalConfiguration.currentHoverState : false} 
                 
                 animationInTime = {1000}
                 
                 animationOutTime = {100}
                 
                 backdropTransitionInTime = {800}
                 
                 backdropTransitionOutTime = {80}
            >
                 <LegendaryHUDModal.Container 
                      legendaryModalHUDViewSettings = {hopBoardOnTheHypeTrainViewSettings}
                 >
                      <LegendaryHUDModal.Header 
                           legendaryModalHeaderSettings = {hopBoardOnTheHypeTrainHeaderViewSettings} 
                           
                           legendaryModalTextLabelSettings = {hopBoardOnTheHypeTrainTitleLabelSettings} title="LogRocket is fab!" 
                      />
                      
                      <LegendaryHUDModal.Body 
                           legendaryHUDModalBodyViewSettings = {hopBoardOnTheHypeTrainBodyViewSettings} 
                      >
                           
                      </LegendaryHUDModal.Body>
                      
                      <LegendaryHUDModal.Footer 
                           legendaryHUDModalFooterViewSettings = { hopBoardOnTheHypeTrainFooterViewSettings } 
                      >
                           
                      </LegendaryHUDModal.Footer>
                 </LegendaryHUDModal.Container>
            </LegendaryHUDModal>
       );
   }

   HUDButton(hudButtonData) 
   {
        var buttonData = hudButtonData.buttonData;
        console.log(buttonData)
        return (
          //    <SetUpHUDButton buttonData = { buttonData } />
          <TouchableOpacity
          activeOpacity = { 1 }
          
          style = { [{ cursor: 'inherit' }, buttonData, this.state.hover ? hoverStyle : {}] }
          
          onMouseEnter = { () => {
               this.setState({ hover : true }) 
               
               const hoverAction = hoverStyle.legendaryHoverAction;
               
               if (hoverAction != null && hoverAction.hoverFunc != null) 
               { 
                    hoverAction.hoverFuncInput.currentHoverState = true
                    
                    hoverAction.hoverFunc(hoverAction.hoverFuncInput)
               }
          }}
          
          onMouseLeave = { () => { 
               this.setState({ hover : false }) 
               
               const hoverAction = hoverStyle.legendaryHoverAction;
               
               if (hoverAction != null && hoverAction.hoverFunc != null) 
               { 
                    hoverAction.hoverFuncInput.currentHoverState = false
                    
                    hoverAction.hoverFunc(hoverAction.hoverFuncInput) 
               }
          }}
        >
             
             
             <TouchableOpacity { ...this.props } />
        </TouchableOpacity>
        );
        
   }
}

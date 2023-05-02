import { TextInput, View } from 'react-native';
import LegendaryHUDBuilder from './UIBuilding/LegendaryHUDBuilder.js';











const LegendaryHUDTextField = ({ legendaryHUDTextFieldViewSettings, legendaryHUDTextFieldContainerSettings, legendaryHUDTextFieldTitleSettings, textInputValue }) => {
     const legendaryBuilder = LegendaryHUDBuilder.legendaryBuilding();
     
     return (
          <View style = { legendaryHUDTextFieldContainerSettings } >
               <legendaryBuilder.HUDTextLabel legendaryHUDTextLabelSettings = { legendaryHUDTextFieldTitleSettings } >
                    
               </legendaryBuilder.HUDTextLabel>
               
               <TextInput 
                    style = { legendaryHUDTextFieldViewSettings } 
                    
                    placeHolder = { legendaryHUDTextFieldViewSettings ? legendaryHUDTextFieldViewSettings.placeHolder : ""}
                    
                    autoCorrect = { legendaryHUDTextFieldViewSettings ? legendaryHUDTextFieldViewSettings.autoCorrect : false }
                    
                    secureTextEntry = { legendaryHUDTextFieldViewSettings ? legendaryHUDTextFieldViewSettings.secureTextEntry : null }
                    
                    onChangeText = { legendaryHUDTextFieldViewSettings ? legendaryHUDTextFieldViewSettings.onChangeText : null }
                    
                    value = { textInputValue }
               >
               
               </TextInput>
          </View>
     );
}

export default LegendaryHUDTextField;
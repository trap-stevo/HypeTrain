//  import Svg, { LinearGradient, Text, Defs,
//   Stop,
//   TSpan
// } from 'react-native-svg';

// const LegendaryHUDGradientText = (legendaryHUDGradientTextLabelSettings) => {
//   var viewBoxPos = legendaryHUDGradientTextLabelSettings.viewBoxPositionVector;
  
//   var viewBoxHeight = legendaryHUDGradientTextLabelSettings.viewBoxHeight;
  
//   var viewBoxWidth = legendaryHUDGradientTextLabelSettings.viewBoxWidth;
  
//   var hudGradientLabelColors = legendaryHUDGradientTextLabelSettings.gradientColors;

//   var fontSize = legendaryHUDGradientTextLabelSettings.fontSize;

//   var gradientID = legendaryHUDGradientTextLabelSettings.gradientID;
  
//   legendaryHUDGradientTextLabelSettings.flexWrap = 'wrap';

//   legendaryHUDGradientTextLabelSettings.flexWrap = 'row';
  
//   return (
//        <Svg 
//             viewBox = { viewBoxPos }
//             height = { viewBoxHeight }
//             width = { viewBoxWidth }
//        >
//           <Defs>
//             <LinearGradient id = { gradientID } x1 = "5%" x2 = "0" y1 = "0" y2 = "100%" gradientUnits = "userSpaceOnUse" >
//               {hudGradientLabelColors.map(hudGradientColor => (
//                   <Stop stopColor = { hudGradientColor.color } offset = { hudGradientColor.colorOffset } />
//               ))}
//             </LinearGradient>
//           </Defs>
          
//           <Text style = { legendaryHUDGradientTextLabelSettings } fill = { "url(#" + gradientID + ")" } >
//             <TSpan fonSize = { fontSize } x = "69" dy = "91" > 
//                  { legendaryHUDGradientTextLabelSettings.text || "???" } 
//             </TSpan>
//           </Text>
//        </Svg>
//   );
// };

// export default LegendaryHUDGradientText;
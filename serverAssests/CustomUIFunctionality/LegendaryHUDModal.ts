// import React from "react";
// import { View, Text } from "react-native";
// import RNModal from "react-native-modal";

// type LegendaryHUDModalProps = 
// {
//   visible: boolean;
  
//   animationInTime : number;
  
//   animationOutTime : number;
  
//   backdropTransitionInTime : number;
  
//   backdropTransitionOutTime : number;
  
//   legendaryComponents: React.ReactNode;
  
//   [x : string]: any;
// };

// const LegendaryHUDModal = ({
//   visible = false,
//   animationInTime,
//   animationOutTime,
//   backdropTransitionInTime,
//   backdropTransitionOutTime,
//   legendaryComponents,
//   ...props
// } : LegendaryHUDModalProps) => {
//   return (
//     <RNModal
//       visible = { visible }
//       animationInTiming = { animationInTime }
//       animationOutTiming = { animationOutTime }
//       backdropTransitionInTiming = { backdropTransitionInTime }
//       backdropTransitionOutTiming = { backdropTransitionOutTime }
//       { ...props }
//     >
//       { legendaryComponents }
//     </RNModal>
//   );
// };

// const LegendaryHUDModalContainer = ({ legendaryModalHUDViewSettings, legendaryComponents } : { legendaryComponents : React.ReactNode }) => (
//   <View style = { legendaryModalHUDViewSettings } > { legendaryComponents } </View>
// );

// const LegendaryHUDModalHeader = ({ legendaryModalHeaderSettings, legendaryModalTextLabelSettings, title } : { title : string }) => (
//   <View style = { legendaryModalHeaderSettings } >
//     <Text style = { legendaryModalTextLabelSettings } > { title } </Text>
//   </View>
// );

// const LegendaryHUDModalBody = ({ legendaryHUDModalBodyViewSettings, legendaryComponents } : { legendaryComponents? : React.ReactNode }) => (
//   <View style = { legendaryHUDModalBodyViewSettings } > { legendaryComponents } </View>
// );

// const LegendaryHUDModalFooter = ({ legendaryHUDModalFooterViewSettings, legendaryComponents } : { legendaryComponents? : React.ReactNode }) => (
//   <View style = { legendaryHUDModalFooterViewSettings } > { legendaryComponents } </View>
// );

// LegendaryHUDModal.Header = LegendaryHUDModalHeader;
// LegendaryHUDModal.Container = LegendaryHUDModalContainer;
// LegendaryHUDModal.Body = LegendaryHUDModalBody;
// LegendaryHUDModal.Footer = LegendaryHUDModalFooter;

// export default LegendaryHUDModal;
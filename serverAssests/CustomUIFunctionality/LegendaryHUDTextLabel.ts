import { Text, StyleSheet } from "react-native";











export type LegendaryHUDTextLabelProps = 
{
  legendaryHUDTextLabelSettings : any;
  
  [x : string]: any;
};

export const LegendaryHUDTextLabel = ({
  legendaryHUDTextLabelSettings,
  ...props
} : LegendaryHUDTextLabelProps) => {
  // return (
  //   // <Text
  //   // style = { styles.container }
  //   // { ...props }
  //   // >
  //   // { legendaryHUDTextLabelSettings ? legendaryHUDTextLabelSettings.text : "" }
  //   // </Text>
  //   );
    
    const styles = StyleSheet.create({
      container:
      {...legendaryHUDTextLabelSettings}
    })
  
};

export default LegendaryHUDTextLabel;
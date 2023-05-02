import React from 'react';
import { Image } from "react-native";











export type LegendaryHUDImagerProps = 
{
  legendaryHUDImagerSettings : any;
  
  legendaryComponents : React.ReactNode;
  
  [x : string]: any;
};

export const LegendaryHUDImager = ({
  legendaryHUDImagerSettings,
  legendaryComponents,
  ...props
} : LegendaryHUDImagerProps) => {
  return (
    <Image
      source = { legendaryHUDImagerSettings.source }

      style = { legendaryHUDImagerSettings }
      
      { ...props }
    >
      { legendaryComponents }
    </Image>
  );
};

export default LegendaryHUDImager;
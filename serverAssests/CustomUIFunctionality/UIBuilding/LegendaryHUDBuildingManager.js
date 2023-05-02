import { StyleSheet } from 'react-native';


   const stationHubStyles = StyleSheet.create({
  textViewMainSettings: {
    flex: 1,
    color: '#fff',
    fontFamily: 'CC Biff Bam Boom',
    fontWeight: 'Bold',
    fontSize: 28,
  },

  hudButtonMainSettings: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  hypeTrainImageViewerMainSettings: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default class LegendaryHUDBuildingManager
{
   static legendaryBuild = null;
   
   static build() 
   {
        if (LegendaryHUDBuildingManager.legendaryBuild == null) {
            LegendaryHUDBuildingManager.legendaryBuild = new LegendaryHUDBuildingManager();
        }
        
        return this.legendaryBuild;
   }
   
   ConfigureView(
  backgroundColor,
  borderWidth,
  borderRadius,
  width,
  height,
  position,
  paddingTop,
  opacity,
  alignItems,
  justifyContent,
  pointerEvents,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  borderStyle,
  backfaceVisibility,
  borderBottomColor,
  borderBottomEndRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStartRadius,
  borderBottomWidth,
  borderColor,
  borderEndColor,
  borderLeftColor,
  borderLeftWidth,
  borderRightColor,
  borderRightWidth,
  borderStartColor,
  paddingLeft,
  paddingRight,
  paddingBottom,
  padding
) 
{
  return {
    backgroundColor : backgroundColor,
    borderWidth : borderWidth,
    paddingTop : paddingTop,
    padding : padding,
    width : width,
    height : height,
    borderRadius : borderRadius,
    opacity : opacity,
    alignItems : alignItems,
    justifyContent : justifyContent,
    position : position,
    pointerEvents : pointerEvents,
    shadowColor : shadowColor,
    shadowOffset : shadowOffset,
    shadowOpacity : shadowOpacity,
    shadowRadius : shadowRadius,
    elevation : elevation,
    borderStyle : borderStyle,
    backfaceVisibility : backfaceVisibility,
    borderBottomColor : borderBottomColor,
    borderBottomEndRadius : borderBottomEndRadius,
    borderBottomLeftRadius : borderBottomLeftRadius,
    borderBottomRightRadius : borderBottomRightRadius,
    borderBottomStartRadius : borderBottomStartRadius,
    borderBottomWidth : borderBottomWidth,
    borderColor : borderColor,
    borderEndColor : borderEndColor,
    borderLeftColor : borderLeftColor,
    borderLeftWidth : borderLeftWidth,
    borderRightColor : borderRightColor,
    borderRightWidth : borderRightWidth,
    borderStartColor : borderStartColor,
    paddingBottom,
    paddingRight,
    paddingLeft
  };
}

ConfigureHoverAppearance(
  backgroundColor,
  opacity,
  color,
  legendaryHoverAction,
  legendaryHoverInputData,
  shadowColor,
  shadowOpactiy,
  shadowOffset,
  shadowRadius,
  elevtation
)
{
  const hoverAction = {
    hoverFunc : legendaryHoverAction,
    hoverFuncInput : legendaryHoverInputData
  }
  
  return {
    backgroundColor : backgroundColor,
    opacity : opacity,
    color : color,
    legendaryHoverAction : hoverAction,
    shadowColor : shadowColor,
    shadowOpactiy : shadowOpactiy,
    shadowOffset : shadowOffset,
    shadowRadius : shadowRadius,
    elevtation : elevtation
  };
}

ConfigureTextLabel(
  text,
  paddingTop,
  width,
  height,
  fontFamily,
  fontSize,
  fontWeight,
  position,
  backgroundColor,
  color,
  includeFontPadding,
  paddingLeft,
  paddingRight,
  textAlign
) 
{
  var textViewMainSettings = stationHubStyles.textViewMainSettings;

  return {
    text : text ? text : '',
    paddingTop : paddingTop,
    width : width,
    height : height,
    fontFamily : fontFamily ? fontFamily : textViewMainSettings.fontFamily,
    fontSize : fontSize ? fontSize : 15,
    fontWeight : fontWeight,
    backgroundColor : backgroundColor,
    color : color,
    position : position,
    includeFontPadding : includeFontPadding,
    paddingLeft : paddingLeft,
    paddingRight : paddingRight,
    textAlign : textAlign
  };
}

ConfigureHUDSearchBar(
  placeHolderText,
  placeHolderTextColor,
  paddingTop,
  width,
  height,
  borderColor,
  borderTopColor,
  borderBottomColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  color,
  position,
  opacity,
  platform,
  round,
  showCancel,
  showLoading,
  cancelDisabled,
  lightTheme
) 
{
  var containerStyle = {
    backgroundColor : backgroundColor ? backgroundColor : '#fff',
    borderColor : borderColor ? borderColor : 'transparent',
    borderTopColor : borderTopColor,
    borderBottomColor : borderBottomColor,
    borderWidth : borderWidth,
    borderRadius : borderRadius,
  };

  var inputStyle = {
    color : color ? color : '#fff',
    backgroundColor : backgroundColor ? backgroundColor : '#fff',
    borderColor : borderColor ? borderColor : 'transparent',
    width : width,
    height : height,
  };
  
  return {
    placeHolder : placeHolderText ? placeHolderText : 'Search...',
    placeHolderTextColor : placeHolderTextColor ? placeHolderTextColor : '#000',
    containerStyle : containerStyle,
    inputStyle : inputStyle,
    paddingTop : paddingTop,
    position : position,
    platform : platform,
    showCancel : showCancel,
    showLoading : showLoading,
    cancelDisabled : cancelDisabled,
    opacity : opacity,
    lightTheme : lightTheme,
    round : round,
  };
}

ConfigureHUDCollectionView(
  backGroundColor,
  color,
  width,
  height,
  position,
  marginTop,
  paddingTop,
  borderRadius,
  borderWidth,
  borderColor,
  horizontal,
  vertical,
  initialNumToRender,
  keyExtractor,
  renderItem,
  opacity,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  initialScrollIndex,
  inverted,
  numColumns,
  progressViewOffset,
  removeClippedSubviews,
  ListHeaderComponent,
  columnWrapperStyle,
  ListFooterComponentStyle,
  ListEmptyComponent,
  ListFooterComponent,
  ItemSeparatorComponent
) 
{
  return {
    backGroundColor : backGroundColor,
    color : color ? color : '#000',
    width : width,
    height : height,
    marginTop : marginTop,
    paddingTop : paddingTop,
    position : position,
    borderRadius : borderRadius,
    borderWidth : borderWidth,
    borderColor : borderColor,
    horizontal : horizontal,
    vertical : vertical,
    opacity : opacity,
    initialNumToRender : initialNumToRender,
    initialScrollIndex : initialScrollIndex,
    showsHorizontalScrollIndicator : showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator : showsVerticalScrollIndicator,
    keyExtractor : keyExtractor,
    renderItem : renderItem,
    inverted : inverted,
    numColumns : numColumns,
    progressViewOffset : progressViewOffset,
    removeClippedSubviews : removeClippedSubviews,
    ListHeaderComponent : ListHeaderComponent,
    columnWrapperStyle : columnWrapperStyle,
    ListFooterComponentStyle : ListFooterComponentStyle,
    ListEmptyComponent : ListEmptyComponent,
    ListFooterComponent : ListFooterComponent,
    ItemSeparatorComponent : ItemSeparatorComponent,
  };
}

ConfigureScrollView(
  backgroundColor,
  horizontal,
  veritcal,
  scrollEnabled,
  width,
  height,
  position,
  contentContainerStyle
) 
{
  return {
    backgroundColor : backgroundColor,
    horizontal : horizontal,
    veritcal : veritcal,
    scrollEnabled : scrollEnabled,
    width : width,
    height : height,
    position : position,
    contentContainerStyle : contentContainerStyle,
  };
}

ConfigureHypeTrainImageViewer(
  image, 
  loadingIndicatorSource, 
  width, 
  height, 
  borderRadius, 
  borderWidth, 
  borderBottomLeftRadius, 
  borderBottomRightRadius, 
  borderTopLeftRadius, 
  borderTopRightRadius,
  borderColor, 
  blurRadius, 
  objectFit, 
  resizeMode, 
  opacity, 
  tintColor, 
  backgroundColor, 
  color, 
  backfaceVisibility,  
  shadowOpacity,
  shadowOffset,
  shadowRadius,
  shadowColor,
  elevation,
  overflow
)
{
  var imageMainS = stationHubStyles.hypeTrainImageViewerMainSettings;
  
  return {
    source : image,
    loadingIndicatorSource : loadingIndicatorSource,
    width : width ? width : imageMainS.width,
    height : height ? height : imageMainS.height,
    borderRadius : borderRadius,
    borderWidth : borderWidth,
    borderColor : borderColor,
    borderBottomLeftRadius : borderBottomLeftRadius,
    borderBottomRightRadius : borderBottomRightRadius,
    borderTopLeftRadius : borderTopLeftRadius,
    borderTopRightRadius : borderTopRightRadius,
    opacity : opacity,
    backfaceVisibility : backfaceVisibility,
    blurRadius : blurRadius,
    objectFit : objectFit,
    resizeMode : resizeMode,
    tintColor : tintColor,
    backgroundColor : backgroundColor,
    color : color,
    shadowOpacity : shadowOpacity,
    shadowOffset : shadowOffset,
    shadowRadius : shadowRadius,
    shadowColor : shadowColor,
    elevation : elevation,
    overflow : overflow
  };
}

ConfigureHUDCarousel(
  backgroundColor,
  color,
  position,
  width,
  height,
  borderRadius,
  borderWidth,
  borderColor
)
{
  return {
       backgroundColor : backgroundColor,
       color : color,
       position : position,
       width : width,
       height : height,
       borderRadius : borderRadius,
       borderWidth : borderWidth,
       borderColor : borderColor
  };
}

ConfigureHUDButton(
  text,
  allowActionAnimation,
  activeOpactity,
  paddingTop,
  fontFamily,
  fontWeight,
  fontSize,
  position,
  color,
  backgroundColor,
  borderRadius,
  width,
  height,
  alignItems,
  justifyContent,
  flexDirection,
  includeFontPadding,
  legendaryClickAction,
  legendaryHoverAppearance,
  imageData,
  imageSizeData,
  shadowOpacity,
  shadowOffset,
  shadowRadius,
  shadowColor,
  elevation,
  textAlign
)
{
  var hudButtonMainSettings = stationHubStyles.hudButtonMainSettings;

  return {
    text : text,
    imageData : imageData,
    imageSizeData : imageSizeData,
    paddingTop : paddingTop,
    fontFamily : fontFamily,
    fontWeight : fontWeight,
    fontSize : fontSize,
    disabled : allowActionAnimation,
    activeOpactity : activeOpactity,
    position : position ? position : hudButtonMainSettings.position,
    color : color ? color : hudButtonMainSettings.color,
    backgroundColor : backgroundColor
      ? backgroundColor
      : hudButtonMainSettings.backgroundColor,
    borderRadius : borderRadius
      ? borderRadius
      : hudButtonMainSettings.borderRadius,
    width : width ? width : hudButtonMainSettings.width,
    height : height ? height : hudButtonMainSettings.height,
    alignItems : alignItems ? alignItems : hudButtonMainSettings.alignItems,
    justifyContent : justifyContent
      ? justifyContent
      : hudButtonMainSettings.justifyContent,
    legendaryClickAction : legendaryClickAction,
    legendaryHoverAppearance : legendaryHoverAppearance,
    flexDirection : flexDirection
      ? flexDirection
      : hudButtonMainSettings.flexDirection,
    includeFontPadding: includeFontPadding,
    shadowOpacity : shadowOpacity,
    shadowOffset : shadowOffset,
    shadowRadius : shadowRadius,
    shadowColor : shadowColor,
    elevation : elevation,
    textAlign : textAlign
  };
}
}
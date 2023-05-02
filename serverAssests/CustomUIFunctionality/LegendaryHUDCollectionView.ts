import { useCallback, useEffect, useRef, useState } from 'react';
import { View, FlatList } from "react-native";











export type LegendaryHUDCollectionViewProps = 
{
  legendaryHUDCollectionViewSettings : any;
  
  legendaryHUDCollectionBackgroundSettings : any;
  
  legendaryHUDCollectionViewData : any;
  
  [x : string]: any;
};

export const LegendaryHUDCollectionView = ({
  legendaryHUDCollectionViewSettings,
  legendaryHUDCollectionBackgroundSettings,
  legendaryHUDCollectionViewData,
  ...props
} : LegendaryHUDCollectionViewProps) => {
    if (legendaryHUDCollectionViewSettings == null ) 
    { 
         legendaryHUDCollectionViewSettings = { legendaryInterval : 5000 };
    }
    else if (legendaryHUDCollectionViewSettings.legendaryInterval == null)
    {
         legendaryHUDCollectionViewSettings.legendaryInterval = 5000;
    }
    
    const legendaryCellRef = useRef();
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const legendaryCellIndexRef = useRef(activeIndex);
    
    legendaryCellIndexRef.current = activeIndex;
    
    useInterval(() => {
        if (legendaryHUDCollectionViewData != null && activeIndex < Number(legendaryHUDCollectionViewData?.length) - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    }, legendaryHUDCollectionViewSettings.legendaryInterval);
    
    useEffect(() => {
        if (legendaryCellRef.current && Number(legendaryHUDCollectionViewData?.length) > 0)
        {
             legendaryCellRef.current.scrollToIndex({ 
                  index: activeIndex, 
                  animated: true 
             });
        }
    }, [activeIndex, legendaryHUDCollectionViewData]);
    
    const onViewableItemsHandler = useCallback(
        ({ viewableItems }) => {
            if (activeIndex != 0) {
                setActiveIndex(viewableItems[activeIndex].index);
            }
        },
        [activeIndex]
    );
    
    const onViewableItemsChanged = ({
        viewableItems, 
    }) => {
        onViewableItemsHandler({ viewableItems });
    };
    
    const viewabilityRequest = useRef([
        { onViewableItemsChanged }
    ]);
    
    if (legendaryHUDCollectionViewSettings.horizontal != null && legendaryHUDCollectionViewSettings.horizontal == true)
    {
          return (
              <View style = { legendaryHUDCollectionBackgroundSettings }>
                   <FlatList style = { legendaryHUDCollectionViewSettings }
                        horizontal
                        
                        showsHorizontalScrollIndicator = { legendaryHUDCollectionViewSettings.showsHorizontalScrollIndicator }
                        
                        data = { legendaryHUDCollectionViewData }
                        
                        renderItem = { legendaryHUDCollectionViewSettings.renderItem }
                        
                        keyExtractor = { legendaryHUDCollectionViewSettings.keyExtractor }
                        
                        numColumns = { legendaryHUDCollectionViewSettings.numColumns } 
                        
                        viewabilityConfigCallbackPairs = { viewabilityRequest.current }
                        
                        viewabilityConfig={{
                             itemVisiblePercentThreshold : 69,
                        }}
                        
                        ref = { legendaryCellRef }
                        
                        initialScrollIndex = { legendaryCellRef.current } 
                        
                        onScrollToIndexFailed={info => {
                             const wait = new Promise(
                                  resolve => setTimeout(resolve, 5000)
                             );
                             
                             wait.then(() => {
                                  legendaryCellRef.current.scrollToIndex({ 
                                       index: info.index, 
                                       animated: true 
                                  });
                             });
                        }}
                        
                        extraData = { activeIndex }
                   />
              </View>
         );
    }
    else
    {
         return (
              <View style = { legendaryHUDCollectionBackgroundSettings }>
                   <FlatList style = { legendaryHUDCollectionViewSettings }
                        data = { legendaryHUDCollectionViewData }
                        
                        showsVerticalScrollIndicator = { legendaryHUDCollectionViewSettings.showsVerticalScrollIndicator }
                        
                        renderItem = { legendaryHUDCollectionViewSettings.renderItem }
                        
                        keyExtractor = { legendaryHUDCollectionViewSettings.keyExtractor }
                        
                        numColumns = { legendaryHUDCollectionViewSettings.numColumns }
                        
                        viewabilityConfigCallbackPairs = { viewabilityRequest.current }
                        
                        viewabilityConfig={{
                             itemVisiblePercentThreshold : 69,
                        }}
                        
                        ref = { legendaryCellRef }
                         
                        initialScrollIndex = { legendaryCellRef.current } 
                        
                        onScrollToIndexFailed={info => {
                             const wait = new Promise(
                                  resolve => setTimeout(resolve, 5000)
                             );
                             
                             wait.then(() => {
                                  legendaryCellRef.current.scrollToIndex({ 
                                       index: info.index, 
                                       animated: true 
                                  });
                             });
                        }}
                        
                        extraData = { activeIndex }
                   />
              </View>
         );
    }
};

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        if (delay !== null) {
            let id = setInterval(tick, delay);

            return () => clearInterval(id);
        }
    }, [delay]);
};

export default LegendaryHUDCollectionView;
import { View } from 'react-native';
import LegendaryHUDShowcaseCardCell, { sliderWidth, itemWidth } from "./CustomUICells/LegendaryHUDShowcaseCardCell.js";
import Carousel, { Pagination } from 'react-native-snap-carousel';










const LegendaryHUDCarousel = ({ legendaryHUDInputData }) => {
     const [currentIndex, setIndex] = React.useState(0);

     const confirmedCarousel = React.useRef(null);
     
     return (
          <View>
               <Carousel
                    layout = "tinder"
                    
                    layoutCardOffset = { 9 }
                    
                    ref = { confirmedCarousel }
                       
                    data = { legendaryHUDInputData }
                    
                    renderItem = { LegendaryHUDShowcaseCardCell }
                    
                    sliderWidth = { sliderWidth }
                    
                    itemWidth = { itemWidth }
                    
                    onSnapToItem = { (currentIndex) => setIndex(currentIndex) }
                    
                    useScrollView = { true }
               />
               
               <Pagination
                    dotsLength = { legendaryHUDInputData.length }
                    
                    activeDotIndex = { currentIndex }
                    
                    carouselRef = { confirmedCarousel }
                    
                    dotStyle={{
                         width : 15,
                         height : 15,
                         borderRadius : 7.5,
                         marginHorizontal : 0,
                         backgroundColor : 'rgba(0, 0, 0, 0.92)'
                    }}
                    
                    inactiveDotOpacity = { 0.369 }
                    
                    inactiveDotScale = { 0.69 }
                    
                    tappableDots = { true }
               />
          </View>
     );
};

export default LegendaryHUDCarousel;
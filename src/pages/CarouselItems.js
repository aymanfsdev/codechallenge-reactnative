import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {useDispatch} from 'react-redux';

import RoundedButton from '../components/RoundedButton';

import SliderEntry from './SliderEntry';

import {processCarouselDone} from '../store/actions/appState';

import Colors from '../Colors';

/**
* @author Stanley George
* @function CarouselItems

**/

const SLIDER_1_FIRST_ITEM = 1;

const ENTRIES1 = [
  {
    title: 'Better Living',
    subtitle: 'Helping Patients Live Better',
    illustration:
      'https://images.unsplash.com/photo-1588611911587-7bc55b45d588?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    title: 'Mobile Power',
    subtitle: 'Digital Therapeutics on the go',
    illustration:
      'https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const CarouselItems = props => {
  const slider1Ref = React.useRef(null);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(1);

  const dispatch = useDispatch();

  const {width: viewportWidth, height: viewportHeight} =
    Dimensions.get('window');

  function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const renderItemWithParallax = ({item, index}, parallaxProps) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Blue Note Therapeutics</Text>
      <Carousel
        ref={slider1Ref}
        data={ENTRIES1}
        renderItem={renderItemWithParallax}
        sliderWidth={400}
        itemWidth={300}
        // hasParallaxImages={true}
        // firstItem={SLIDER_1_FIRST_ITEM}
        // inactiveSlideScale={0.94}
        // inactiveSlideOpacity={0.7}
        // inactiveSlideShift={20}
        // containerCustomStyle={styles.slider}
        // contentContainerCustomStyle={styles.sliderContentContainer}
        // loop={true}
        // loopClonesPerSide={1}
        // autoplay={true}
        // autoplayDelay={500}
        // autoplayInterval={3000}
        // onSnapToItem={index => setSlider1ActiveSlide(index)}
      />
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={slider1ActiveSlide}
        containerStyle={styles.paginationContainer}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'black'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={slider1Ref}
        tappableDots={true}
      />
      <RoundedButton
        textValue="Let's Go"
        color={Colors.blue}
        inputStyles={{width: 200, marginTop: 5}}
        onPress={() => {
          dispatch(processCarouselDone());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: 'gray',
  },
  subtitle: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});
export default CarouselItems;

import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel-v4';
import {hp, wp} from 'utils/dimensions';

const Carousel = (props: {onPress: (item: string) => void}) => {
  const {onPress} = props;
  return (
    <SnapCarousel
      vertical={false}
      data={[
        require('assets/jpgs/carousel1.jpg'),
        require('assets/jpgs/carousel2.jpg'),
        require('assets/jpgs/carousel3.jpg'),
      ]}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <Image
            style={{width: wp(80), height: hp(20)}}
            resizeMode="stretch"
            source={item}
          />
        </TouchableOpacity>
      )}
      sliderWidth={wp(100)}
      itemWidth={wp(80)}
    />
  );
};
export default Carousel;

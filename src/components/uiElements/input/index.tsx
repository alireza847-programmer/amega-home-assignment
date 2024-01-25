import React from 'react';
import Input, {RightButton} from './style';
import {VInputProps} from 'types/components/uiElements/input';
import {theme} from 'themes/emotion';
import VRow from '../row';
import {ChevronSvg} from 'assets/svgs';
import {TouchableOpacity} from 'react-native';

const VInput = (props: VInputProps) => {
  const {marginTopRatio, onPressButton, ...rest} = props;
  return (
    <VRow marginTopRatio={marginTopRatio} alignItems="center" fullWidth={false}>
      <Input
        placeholderTextColor={theme.colors.textColor.placeHolder}
        {...rest}
      />
      <TouchableOpacity onPress={onPressButton}>
        <RightButton fullWidth={false}>
          <ChevronSvg style={{transform: [{rotate: '-90deg'}]}} fill={'#000'} />
        </RightButton>
      </TouchableOpacity>
    </VRow>
  );
};

export default VInput;

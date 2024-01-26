import styled from '@emotion/native';
import VRow from 'components/uiElements/row';
import {Platform} from 'react-native';
import {hp, wp} from 'utils/dimensions';

export const Container = styled.View(({}) => ({
  width: '100%',
}));

export const Header = styled(VRow)(({theme}) => ({
  width: wp(100),
  shadowColor:
    Platform.OS === 'ios' ? 'rgba(68, 80, 95, 0.20)' : 'rgba(68, 80, 95, 0.60)',
  shadowOpacity: 1,
  shadowOffset: {
    height: 0,
    width: 0,
  },
  backgroundColor: theme.colors.backgroundColor,
  height: Platform.OS === 'android' ? hp(7) : hp(10),
  alignItems: 'center',
  paddingTop: Platform.OS === 'android' ? 0 : theme.verticalRem * 6,
  elevation: 10,
}));

export const ChildrenWrapper = styled.View(({}) => ({
  maxHeight: hp(80),
}));

export const CloseIcon = styled(VRow)(({theme}) => ({
  position: 'absolute',
  left: theme.HorizontalRem * 4,
  ...(Platform.OS === 'ios' && {top: theme.verticalRem * 10}),
}));

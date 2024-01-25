import styled from '@emotion/native';
import {InputProps} from 'types/components/uiElements/input';
import VRow from '../row';
import {hp} from 'utils/dimensions';

const Input = styled.TextInput<InputProps>(({theme}) => ({
  width: '80%',
  padding: theme.HorizontalRem * 4,
  borderTopLeftRadius: theme.radius * 2,
  borderBottomLeftRadius: theme.radius * 2,
  borderColor: theme.colors.stroke.input,
  fontFamily: theme.fonts.medium15.fontFamily,
  fontSize: theme.fonts.medium15.fontSize,
  backgroundColor: theme.colors.backgroundColor,
  height: hp(6),
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderBottomWidth: 1,
}));

export const RightButton = styled(VRow)(({theme}) => ({
  backgroundColor: theme.colors.backgroundColor,
  height: hp(6),
  borderTopWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.colors.stroke.input,
  borderTopRightRadius: theme.radius * 2,
  borderBottomRightRadius: theme.radius * 2,
}));

export default Input;

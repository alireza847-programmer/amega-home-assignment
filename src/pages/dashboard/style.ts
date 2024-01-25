import styled from '@emotion/native';
import {wp} from 'utils/dimensions';

export const IpTracker = styled.View(({theme}) => ({
  backgroundColor: theme.colors.button.primary,
  width: wp(100),
  alignItems: 'center',
}));

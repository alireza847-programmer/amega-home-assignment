import styled from '@emotion/native';
import VRow from 'components/uiElements/row';

export const TradeItem = styled(VRow)(({theme}) => ({
  borderWidth: 1,
  borderColor: theme.colors.stroke.input,
}));

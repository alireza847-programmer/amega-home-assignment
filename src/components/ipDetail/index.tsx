import VRow from 'components/uiElements/row';
import VText from 'components/uiElements/text';
import texts from 'locales/en';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {theme} from 'themes/emotion';
import {IpDetailProps} from 'types/components/ipDetail';
import {wp} from 'utils/dimensions';

const {dashboard} = texts;

const IpDetail = (props: IpDetailProps) => {
  const {data} = props;
  const ipSections = useMemo(() => {
    return [
      {
        title: dashboard.ip.sections[1],
        value: data?.ip,
      },
      {
        title: dashboard.ip.sections[2],
        value: data?.location,
      },
      {
        title: dashboard.ip.sections[3],
        value: data?.timeZone,
      },
      {
        title: dashboard.ip.sections[4],
        value: data?.isp,
      },
    ];
  }, [data]);
  return (
    <VRow
      backgroundColor={'#000'}
      marginTopRatio={8}
      paddingVerticalRatio={4}
      paddingHorizontalRatio={4}
      fullWidth
      justifyContent="space-between">
      {ipSections.map(({title, value}, index) => {
        return (
          <View style={{width: wp(20)}} key={index}>
            <VText
              typography="medium15"
              color={theme.colors.textColor.button.primary}>
              {title}
            </VText>
            <VText
              typography="regular12"
              marginTopRatio={1}
              color={theme.colors.textColor.placeHolder}>
              {value}
            </VText>
          </View>
        );
      })}
    </VRow>
  );
};
export default IpDetail;

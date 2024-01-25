import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React, {useState} from 'react';
import {IpTracker} from './style';
import VText from 'components/uiElements/text';
import {theme} from 'themes/emotion';
import VInput from 'components/uiElements/input';
import VRow from 'components/uiElements/row';
import {useApi} from 'react-api-wrapper-hook';
import {WHO_IS_API_URL, WhoIsDto} from 'types/api/whois';
import Carousel from 'components/carousel';
import IpDetail from 'components/ipDetail';
import {BOTTOM_NAVIGATION_PROFILE} from 'routes/const';
import {useAppNavigation} from 'hooks/navigation';

const {
  navigation: {dashboard: title},
  dashboard,
} = texts;
const Dashboard = () => {
  const [ipValue, setIpValue] = useState<string>('');
  const navigation = useAppNavigation();
  const {data, fetch} = useApi<WhoIsDto>({
    url: WHO_IS_API_URL,
  });
  return (
    <MainLayout withHeader withClose={false} title={title}>
      <IpTracker>
        <VText
          typography="bold21"
          marginTopRatio={10}
          color={theme.colors.textColor.button.primary}>
          {dashboard.ip.title}
        </VText>
        <VInput
          onPressButton={() =>
            fetch({
              url: `${WHO_IS_API_URL}/${ipValue}`,
            })
          }
          onChangeText={setIpValue}
          marginTopRatio={5}
          placeholder={dashboard.ip.placeHolder}
        />
        <IpDetail
          data={{
            ip: data?.ip,
            isp: data?.connection?.isp,
            location: data?.country,
            timeZone: data?.timezone?.utc,
          }}
        />
      </IpTracker>
      <VRow marginTopRatio={20}>
        <Carousel
          onPress={item =>
            navigation.navigate(BOTTOM_NAVIGATION_PROFILE, {
              imageSource: item,
              data: {
                ip: data?.ip,
                isp: data?.connection?.isp,
                location: data?.country,
                timeZone: data?.timezone?.utc,
              },
            })
          }
        />
      </VRow>
    </MainLayout>
  );
};
export default Dashboard;

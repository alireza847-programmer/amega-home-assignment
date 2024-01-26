import IpDetail from 'components/ipDetail';
import VRow from 'components/uiElements/row';
import {useAppNavigation} from 'hooks/navigation';
import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React from 'react';
import {Image} from 'react-native';
import {ProfileProps} from 'types/routes/profile';
import {hp, wp} from 'utils/dimensions';

const {
  navigation: {profile},
} = texts;
const Profile = (props: ProfileProps) => {
  const {route} = props;
  const navigation = useAppNavigation();
  return (
    <MainLayout
      onClosePress={() => navigation.goBack()}
      withClose
      withHeader
      title={profile}>
      <VRow marginTopRatio={5} justifyContent="center">
        <Image
          source={
            route?.params?.imageSource || require('assets/jpgs/carousel2.jpg')
          }
          style={{
            width: wp(80),
            height: hp(15),
          }}
          resizeMode="stretch"
        />
      </VRow>
      <IpDetail
        data={
          route?.params?.data || {
            ip: '',
            isp: '',
            location: '',
            timeZone: '',
          }
        }
      />
    </MainLayout>
  );
};
export default Profile;

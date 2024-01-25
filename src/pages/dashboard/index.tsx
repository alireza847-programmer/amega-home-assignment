import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React, {useMemo} from 'react';
import {IpTracker} from './style';
import VText from 'components/uiElements/text';
import {theme} from 'themes/emotion';
import VInput from 'components/uiElements/input';
import VRow from 'components/uiElements/row';

const {
  navigation: {dashboard: title},
  dashboard,
} = texts;
const Dashboard = () => {
  const ipSections = useMemo(() => {
    return [];
  }, []);
  return (
    <MainLayout withHeader withClose title={title}>
      <IpTracker>
        <VText
          typography="bold21"
          marginTopRatio={10}
          color={theme.colors.textColor.button.primary}>
          {dashboard.ip.title}
        </VText>
        <VInput placeholder={dashboard.ip.placeHolder} />

        <VRow />
      </IpTracker>
    </MainLayout>
  );
};
export default Dashboard;

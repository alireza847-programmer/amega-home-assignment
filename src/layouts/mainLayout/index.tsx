import React, {PropsWithChildren} from 'react';
import {ChildrenWrapper, CloseIcon, Container, Header} from './style';
import VText from 'components/uiElements/text';
import {MainLayoutProps} from 'types/layouts/mainLayout';
import VRow from 'components/uiElements/row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import {TouchableOpacity} from 'react-native';
import {useAppNavigation} from 'hooks/navigation';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {children, title = '', withClose = true, withHeader} = props;
  const navigation = useAppNavigation();
  return (
    <Container>
      {withHeader && (
        <Header alignItems="center" justifyContent="center">
          {withClose && (
            <CloseIcon fullWidth={false}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}>
                <CloseSvg fill={theme.colors.button.primary} />
              </TouchableOpacity>
            </CloseIcon>
          )}
          <VRow fullWidth={false}>
            <VText color={theme.colors.button.primary} typography="semiBold18">
              {title}
            </VText>
          </VRow>
          <VRow fullWidth={false} />
        </Header>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
export default MainLayout;

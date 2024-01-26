import React, {PropsWithChildren} from 'react';
import {ChildrenWrapper, CloseIcon, Container, Header} from './style';
import VText from 'components/uiElements/text';
import {MainLayoutProps} from 'types/layouts/mainLayout';
import VRow from 'components/uiElements/row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import {TouchableOpacity} from 'react-native';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
    title = '',
    onClosePress = () => {},
    withClose = true,
    withHeader,
  } = props;
  return (
    <Container>
      {withHeader && (
        <Header alignItems="center" justifyContent="center">
          {withClose && (
            <CloseIcon fullWidth={false}>
              <TouchableOpacity onPress={onClosePress} activeOpacity={0.8}>
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

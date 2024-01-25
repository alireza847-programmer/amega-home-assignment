import React, {PropsWithChildren} from 'react';
import {ChildrenWrapper, CloseIcon, Container, Header} from './style';
import VText from 'components/uiElements/text';
import {MainLayoutProps} from 'types/layouts/mainLayout';
import VRow from 'components/uiElements/row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import VButton from 'components/uiElements/button';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
    title = '',
    withClose = true,
    withHeader,
    onClosePress = () => {},
  } = props;
  return (
    <Container>
      {withHeader && (
        <Header alignItems="center" justifyContent="center">
          <CloseIcon fullWidth={false}>
            {withClose && (
              <VButton
                styled="TEXT"
                onPress={onClosePress}
                icon={() => <CloseSvg fill={theme.colors.button.primary} />}
              />
            )}
          </CloseIcon>
          <VRow fullWidth={false}>
            <VText typography="semiBold16">{title}</VText>
          </VRow>
          <VRow fullWidth={false} />
        </Header>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
export default MainLayout;

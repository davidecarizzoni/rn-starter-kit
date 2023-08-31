import { Icon, Row, ScreenContainer, Text } from '@src/components';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <Row mt={10} ml={10}>
        <Text>HomeScreen</Text>
        <Icon icon={['fas', 'user']} />
      </Row>
    </ScreenContainer>
  );
};

import { Text } from 'react-native';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { Row } from '../../../components/Row';

export const LoginScreen = () => {
  return (
    <ScreenContainer>
      <Row mt={10} justifyContent={'center'}>
        <Text>LoginScreen</Text>
      </Row>
    </ScreenContainer>
  );
};

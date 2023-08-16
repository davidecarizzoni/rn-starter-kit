import { Text } from 'react-native';
import { Row, ScreenContainer } from '../../../components';
import { showAlertModal } from '../../../core/services/modal';

export const LoginScreen = () => {
  return (
    <ScreenContainer>
      <Row mt={10} justifyContent={'center'}>
        <Text
          onPress={() => {
            showAlertModal({
              showBack: false,
              text: 'ciao',
              title: 'ciao',
            });
          }}>
          LoginScreen
        </Text>
      </Row>
    </ScreenContainer>
  );
};

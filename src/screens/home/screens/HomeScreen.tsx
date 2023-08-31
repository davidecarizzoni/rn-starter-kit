import { Icon, Row, ScreenContainer, Text } from '@src/components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserToken } from '../../../store/user';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserToken('1234567890'));
  }, []);

  return (
    <ScreenContainer>
      <Row mt={10} ml={10}>
        <Text>HomeScreen</Text>
        <Icon icon={['fas', 'user']} />
      </Row>
    </ScreenContainer>
  );
};

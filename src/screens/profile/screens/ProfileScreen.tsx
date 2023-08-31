import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearUserState } from '../../../store/user';
import { ScreenContainer } from '../../../components';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const onPressLogout = () => {
    dispatch(clearUserState());
  };

  return (
    <ScreenContainer>
      <TouchableOpacity onPress={onPressLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearUserState } from '../../../store/user';
import { ScreenContainer } from '../../../components';
import { useGetUser } from '../../../api/user';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { data: user } = useGetUser();

  const onPressLogout = () => {
    dispatch(clearUserState());
  };

  return (
    <ScreenContainer>
      <TouchableOpacity onPress={onPressLogout}>
        <Text>{user?.email}</Text>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

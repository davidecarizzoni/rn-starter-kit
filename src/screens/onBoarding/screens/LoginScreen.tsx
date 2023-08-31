import { Button, SafeAreaView } from 'react-native';
import { useLogin } from '../../../api/auth';
import { useState } from 'react';
import { TextField } from '../../../components/ui/TextField';
import { Col, Row } from '../../../components';

export const LoginScreen = () => {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('adminadmin');
  const { mutateAsync, isLoading } = useLogin();

  const onPressLogin = async () => {
    await mutateAsync({ email, password });
  };

  return (
    <SafeAreaView>
      <Col style={{ gap: 10 }} mh={10} mt={10}>
        <TextField label={'email'} value={email} onChangeText={setEmail} />
        <TextField label={'password'} value={password} onChangeText={setPassword} />
      </Col>
      <Row>
        <Button title={'Login'} onPress={onPressLogin} />
      </Row>
    </SafeAreaView>
  );
};

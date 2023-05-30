import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PresentationPage({ navigation }) {
  console.log('Ceva');
  const handleNavigationSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleNavigationSignIn = () => {
    navigation.navigate('LogIn');
  };
  return (
    <>
      <View style={styles.container}>
        <Button title="SignUp" onPress={handleNavigationSignUp} />
      </View>
      <View style={styles.container}>
        <Button title="SignIn" onPress={handleNavigationSignIn} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

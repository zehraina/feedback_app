
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <Button title="User Login" onPress={() => navigation.navigate('UserLoginScreen')} />
//       <Button title="Admin Login" onPress={() => navigation.navigate('AdminLoginScreen')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
// });

// export default HomeScreen;

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="User Login" onPress={() => navigation.navigate('Login', { isAdmin: false })} />
      <Button title="Admin Login" onPress={() => navigation.navigate('Login', { isAdmin: true })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

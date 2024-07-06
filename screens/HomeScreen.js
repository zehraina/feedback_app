// import { View, Text, Button, StyleSheet } from 'react-native';
// import React from 'react';

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Application</Text>
//       <Button
//         title="Admin Login"
//         onPress={() => navigation.navigate('AdminLoginScreen')}
//         style={styles.button}
//       />
//       <Button
//         title="User Login"
//         onPress={() => navigation.navigate('UserLoginScreen')}
//         style={styles.button}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   button: {
//     marginVertical: 10,
//   },
// });

// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="User Login" onPress={() => navigation.navigate('UserLoginScreen')} />
      <Button title="Admin Login" onPress={() => navigation.navigate('AdminLoginScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
// // import { initializeApp } from '@firebase/app';
// // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import HomeScreen from './screens/HomeScreen';
// // import AdminLoginScreen from './screens/AdminLoginScreen';
// // import UserLoginScreen from './screens/UserLoginScreen';
// // import { FeedbackProvider } from './FeedbackContext';

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAotE4LLx9oW68aZ6KmWufGnH2YSTpXUBw",
// //   authDomain: "bsnl-e86f2.firebaseapp.com",
// //   projectId: "bsnl-e86f2",
// //   storageBucket: "bsnl-e86f2.appspot.com",
// //   messagingSenderId: "696055476074",
// //   appId: "1:696055476074:web:e360e080e2e4e401ecff13",
// //   measurementId: "G-58WNQ4WJE3"
// // };

// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // const AuthForm = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
// //   return (
// //     <View style={styles.authContainer}>
// //       <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

// //       <TextInput
// //         style={styles.input}
// //         value={email}
// //         onChangeText={setEmail}
// //         placeholder="Email"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         value={password}
// //         onChangeText={setPassword}
// //         placeholder="Password"
// //         secureTextEntry
// //       />
// //       <View style={styles.buttonContainer}>
// //         <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
// //       </View>

// //       <View style={styles.bottomContainer}>
// //         <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
// //           {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
// //         </Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const AuthenticatedScreen = ({ user, handleLogout }) => {
// //   return (
// //     <View style={styles.authContainer}>
// //       <Text style={styles.title}>Welcome</Text>
// //       <Text style={styles.emailText}>{user.email}</Text>
// //       <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
// //     </View>
// //   );
// // };

// // const App = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [user, setUser] = useState(null); // Track user authentication state
// //   const [isLogin, setIsLogin] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const handleAuthentication = async () => {
// //     try {
// //       if (user) {
// //         // If user is already authenticated, log out
// //         await signOut(auth);
// //         console.log('User logged out successfully!');
// //       } else {
// //         // Sign in or sign up
// //         if (isLogin) {
// //           await signInWithEmailAndPassword(auth, email, password);
// //           console.log('User signed in successfully!');
// //         } else {
// //           await createUserWithEmailAndPassword(auth, email, password);
// //           console.log('User created successfully!');
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Authentication error:', error.message);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       console.log('User logged out successfully!');
// //     } catch (error) {
// //       console.error('Logout error:', error.message);
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       {user ? (
// //         <AuthenticatedScreen user={user} handleLogout={handleLogout} />
// //       ) : (
// //         <AuthForm
// //           email={email}
// //           setEmail={setEmail}
// //           password={password}
// //           setPassword={setPassword}
// //           isLogin={isLogin}
// //           setIsLogin={setIsLogin}
// //           handleAuthentication={handleAuthentication}
// //         />
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 16,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   authContainer: {
// //     width: '80%',
// //     maxWidth: 400,
// //     backgroundColor: '#fff',
// //     padding: 16,
// //     borderRadius: 8,
// //     elevation: 3,
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 16,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     marginBottom: 16,
// //     padding: 8,
// //     borderRadius: 4,
// //   },
// //   buttonContainer: {
// //     marginBottom: 16,
// //   },
// //   toggleText: {
// //     color: '#3498db',
// //     textAlign: 'center',
// //   },
// //   bottomContainer: {
// //     marginTop: 20,
// //   },
// //   emailText: {
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// // });

// // export default App;


// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import AdminLoginScreen from './screens/AdminLoginScreen';
// import UserLoginScreen from './screens/UserLoginScreen';
// import { FeedbackProvider } from './FeedbackContext';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <FeedbackProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
//           <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </FeedbackProvider>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import { FeedbackProvider } from './FeedbackContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FeedbackProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
          <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
          <Stack.Screen name="AdminHomeScreen" component={AdminLoginScreen} />
          <Stack.Screen name="UserHomeScreen" component={UserLoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FeedbackProvider>
  );
};

export default App;

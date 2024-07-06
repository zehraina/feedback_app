
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
//           <Stack.Screen name="AdminHomeScreen" component={AdminLoginScreen} />
//           <Stack.Screen name="UserHomeScreen" component={UserLoginScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </FeedbackProvider>
//   );
// };

// export default App;

import React from 'react';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import LoginScreen from './screens/LoginScreen';
import { FeedbackProvider } from './FeedbackContext';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAotE4LLx9oW68aZ6KmWufGnH2YSTpXUBw",
  authDomain: "bsnl-e86f2.firebaseapp.com",
  projectId: "bsnl-e86f2",
  storageBucket: "bsnl-e86f2.appspot.com",
  messagingSenderId: "696055476074",
  appId: "1:696055476074:web:e360e080e2e4e401ecff13",
  measurementId: "G-58WNQ4WJE3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Handle user state changes
    });

    return () => unsubscribe();
  }, []);

  return (
    <FeedbackProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
          <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FeedbackProvider>
  );
};

export default App;

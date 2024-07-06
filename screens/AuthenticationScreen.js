import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
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

export default function AuthenticationScreen({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { userType } = route.params; // Get userType (User or Admin) from route params

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert(`${userType} signed in successfully!`);
        navigation.replace(`${userType}Login`);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert(`${userType} created successfully!`);
        navigation.replace(`${userType}Login`);
      }
    } catch (error) {
      Alert.alert('Authentication error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} />
      <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: '80%',
  },
  toggleText: {
    color: '#3498db',
    marginTop: 16,
  },
});

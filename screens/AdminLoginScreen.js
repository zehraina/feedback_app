import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import React, { useContext } from 'react';
import { FeedbackContext } from '../FeedbackContext';

export default function AdminLoginScreen() {
  const { feedbackData, resolveBill } = useContext(FeedbackContext);

  const handleResolveBill = (index) => {
    resolveBill(index);
    Alert.alert('Bill has been resolved.');
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.feedbackItem}>
      {item.type === 'salary' ? (
        <>
          <Text>Question: {item.question}</Text>
          <Text>Answer: {item.answer}</Text>
          <Text>Date: {item.salaryDate}</Text>
          <Text>Amount: {item.salaryAmount}</Text>
        </>
      ) : (
        <>
          <Text>Bill Amount: {item.billAmount}</Text>
          <Text>Bill Date: {item.billDate}</Text>
          <Text>Status: {item.resolved ? 'Resolved' : 'Pending'}</Text>
          {!item.resolved && (
            <Button title="Resolve the Bill" onPress={() => handleResolveBill(index)} />
          )}
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Screen</Text>
      <FlatList
        data={feedbackData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
  feedbackItem: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

// screens/AdminLoginScreen.js
// screens/AdminLoginScreen.js
// import React, { useState, useEffect } from 'react';
// // screens/AdminLoginScreen.js
// // import React, { useState, useEffect } from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
// import AuthForm from '../components/AuthForm';
// import { auth } from '../FirebaseConfig';

// const AdminLoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigation.navigate('AdminHomeScreen'); // Navigate to Admin Home Screen on successful login
//       }
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleAuthentication = async () => {
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//         console.log('Admin signed in successfully!');
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//         console.log('Admin account created successfully!');
//       }
//     } catch (error) {
//       console.error('Authentication error:', error.message);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <AuthForm
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         isLogin={isLogin}
//         setIsLogin={setIsLogin}
//         handleAuthentication={handleAuthentication}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
// });

// export default AdminLoginScreen;

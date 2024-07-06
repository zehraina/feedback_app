import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { FeedbackContext } from '../FeedbackContext';

export default function UserLoginScreen() {
  const [gotSalary, setGotSalary] = useState(null);
  const [salaryDate, setSalaryDate] = useState('');
  const [salaryAmount, setSalaryAmount] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billDate, setBillDate] = useState('');
  const { addFeedback } = useContext(FeedbackContext);

  const handleYes = () => {
    setGotSalary(true);
  };

  const handleNo = () => {
    setGotSalary(false);
    saveData({ question: "Did you get your salary?", answer: "No" });
  };

  const handleRaiseBill = () => {
    if (billAmount && billDate) {
      saveData({ type: 'bill', billAmount, billDate });
      Alert.alert(`Bill raised for ${billAmount} on ${billDate}`);
      setBillAmount('');
      setBillDate('');
    } else {
      Alert.alert('Please enter both amount and date for the bill.');
    }
  };

  const saveData = (data) => {
    addFeedback(data);
    // You can add any additional logic here to save the data, like sending it to a server or local storage.
  };

  const handleSubmit = () => {
    if (gotSalary) {
      saveData({
        type: 'salary',
        question: "Did you get your salary?",
        answer: "Yes",
        salaryDate,
        salaryAmount,
      });
    }
    // Handle the data as needed
    Alert.alert('Data saved successfully.');
    // Reset fields
    setGotSalary(null);
    setSalaryDate('');
    setSalaryAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Did you get your salary?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={handleYes} />
        <Button title="No" onPress={handleNo} />
      </View>

      {gotSalary && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="When (Date)"
            value={salaryDate}
            onChangeText={setSalaryDate}
            style={styles.input}
          />
          <TextInput
            placeholder="How much"
            value={salaryAmount}
            onChangeText={setSalaryAmount}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}

      <Text style={styles.title}>Raise a bill</Text>
      <TextInput
        placeholder="Amount"
        value={billAmount}
        onChangeText={setBillAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Date"
        value={billDate}
        onChangeText={setBillDate}
        style={styles.input}
      />
      <Button title="Raise Bill" onPress={handleRaiseBill} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  inputContainer: {
    marginVertical: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

// screens/UserLoginScreen.js
// screens/UserLoginScreen.js
// screens/UserLoginScreen.js


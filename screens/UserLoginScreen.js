import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
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
    if (!billAmount || billAmount <= 0) {
      Alert.alert('Please enter a valid amount for the bill.');
      return;
    }

    if (!isValidDate(billDate)) {
      Alert.alert('Please enter a valid bill date in dd/mm/yyyy format.');
      return;
    }

    saveData({ type: 'bill', billAmount, billDate });
    Alert.alert(`Bill raised for ${billAmount} on ${billDate}`);
    setBillAmount('');
    setBillDate('');
  };

  const saveData = (data) => {
    addFeedback(data);
  };

  const handleSubmit = () => {
    if (!salaryAmount || salaryAmount <= 0) {
      Alert.alert('Please enter a valid salary amount.');
      return;
    }

    if (!isValidDate(salaryDate)) {
      Alert.alert('Please enter a valid salary date in dd/mm/yyyy format.');
      return;
    }

    saveData({
      type: 'salary',
      question: "Did you get your salary?",
      answer: "Yes",
      salaryDate,
      salaryAmount,
    });

    Alert.alert('Data saved successfully.');
    setGotSalary(null);
    setSalaryDate('');
    setSalaryAmount('');
  };

  const isValidDate = (dateString) => {
    const regex = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    return regex.test(dateString);
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
            placeholder="Amount"
            value={salaryAmount}
            onChangeText={setSalaryAmount}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Date (dd/mm/yyyy)"
            value={salaryDate}
            onChangeText={setSalaryDate}
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
        placeholder="Date (dd/mm/yyyy)"
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

